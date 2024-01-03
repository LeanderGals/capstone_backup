import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Card, Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import  {SafeAreaView} from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getItem, setItem } from '../utils/asyncStorage';


// Function to parse log entry and extract relevant information
function parseLog(logEntry) {
  const regex = /Temperature: ([-\d.]+), Humidity: ([-\d.]+), Turbidity: ([-\d.]+), pH Level: ([-\d.]+), DS18B20 Temperature: ([-\d.]+), Light Intensity: ([-\d.]+)/;
  const match = logEntry.match(regex);

  return match ? match.slice(1) : null;
}

export default function App() {
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    turbidity: null,
    phLevel: null,
    ds18b20temp: null,
    lux: null,
  });

  const [logsWithin5Mins, setLogsWithin5Mins] = useState([]);
  const [showLogs, setShowLogs] = useState(false);
  const currentIntervalStart = useRef(new Date().getTime());
  const groupLogs = useRef([]);

  useEffect(() => {
    const connectWebSocket = async () => {
      const websocketipadd = await getItem('homeweb');
      console.log( 'webadress', websocketipadd)
      //alert('webaddress' + websocketipadd)
      const socket = new WebSocket(`ws://${websocketipadd}:443`);
      let reconnectAttempts = 0;

      socket.onopen = () => {
        console.log('WebSocket connection opened.');
        reconnectAttempts = 0;
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Received data:', data);
        setSensorData(data);
        logData(data);
      };

      socket.onclose = (event) => {
        console.log('WebSocket connection closed. Reconnecting...');
        setTimeout(connectWebSocket, 5000);
        reconnectAttempts++;
      };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        setTimeout(connectWebSocket, 5000);
        reconnectAttempts++;
      };

      return () => {
        saveLogsToStorage(groupLogs.current);
        socket.close();
      };
    };

    connectWebSocket();
    loadLogsFromStorage();
  }, []);

  const logData = (data) => {
    const timestamp = new Date().toLocaleTimeString();
    const currentTime = new Date().getTime();
    const elapsedMinutes = Math.floor((currentTime - currentIntervalStart.current) / (1000 * 60));
  
    const logEntry = `${timestamp} - Temperature: ${data.temperature}, Humidity: ${data.humidity}, Turbidity: ${data.turbidity}, pH Level: ${data.phLevel}, DS18B20 Temperature: ${data.ds18b20temp}, Light Intensity: ${data.lux}`;
  
    if (elapsedMinutes > 0 && elapsedMinutes % 5 === 0) {
      console.log(`Sensor Readings at ${timestamp}:\n${logEntry}`);
  
      groupLogs.current.push({
        timestamp: currentTime,
        log: logEntry,  
        isFiveMinuteReading: true,
      });
  
      setLogsWithin5Mins((prevLogs) => [
        {
          timestamp: currentTime,
          log: logEntry,
          isFiveMinuteReading: true,
        },
        ...prevLogs,
      ]);
  
      saveLogsToStorage(groupLogs.current); // Pass groupLogs.current to saveLogsToStorage
    }
  };
  

  const saveLogsToStorage = async () => {
    try {
      await AsyncStorage.setItem('logs', JSON.stringify(groupLogs.current));
      console.log('Logs saved to AsyncStorage');
    } catch (error) {
      console.error('Error saving logs to AsyncStorage:', error);
    }
  };

  const loadLogsFromStorage = async () => {
    try {
      const storedLogs = await AsyncStorage.getItem('logs');
      if (storedLogs) {
        const parsedLogs = JSON.parse(storedLogs);
        groupLogs.current = parsedLogs;
        setLogsWithin5Mins(parsedLogs);
        console.log('Logs loaded from AsyncStorage');
      }
    } catch (error) {
      console.error('Error loading logs from AsyncStorage:', error);
    }
  };

  const exportToCSV = async () => {
    try {
      let csvData = 'Date, Time, Temperature,Humidity,Turbidity,pH Level,DS18B20 Temperature,Light Intensity\n';
  
      // Sort logsWithin5Mins based on timestamps in ascending order
      const sortedLogs = logsWithin5Mins.slice().sort((a, b) => a.timestamp - b.timestamp);
  
      sortedLogs.forEach((log) => {
        const { timestamp, log: logEntry } = log;
        const logParts = parseLog(logEntry);
  
        if (logParts) {
          const [
            temperatureStr,
            humidityStr,
            turbidityStr,
            phLevelStr,
            ds18b20tempStr,
            luxStr,
          ] = logParts;
  
          const temperature = parseFloat(temperatureStr);
          const humidity = parseFloat(humidityStr);
          const turbidity = parseFloat(turbidityStr);
          const phLevel = parseFloat(phLevelStr);
          const ds18b20temp = parseFloat(ds18b20tempStr);
          const lux = parseFloat(luxStr);
  
          const formattedTimestamp = new Date(timestamp).toLocaleString();
  
          if (isNaN(temperature) || isNaN(humidity) || isNaN(turbidity) || isNaN(phLevel) || isNaN(ds18b20temp) || isNaN(lux)) {
            console.error(`Invalid values in log entry: ${logEntry}`);
          } else {
            csvData += `${formattedTimestamp},${temperature},${humidity},${turbidity},${phLevel},${ds18b20temp},${lux}\n`;
          }
        } else {
          console.error(`Unexpected log entry format: ${logEntry}`);
        }
      });
  
      const fileUri = `${FileSystem.documentDirectory}sensor_logs.csv`;
  
      await FileSystem.writeAsStringAsync(fileUri, csvData, { encoding: FileSystem.EncodingType.UTF8 });
  
      await Sharing.shareAsync(fileUri, {
        mimeType: 'text/csv',
        dialogTitle: 'Share CSV',
        UTI: 'public.comma-separated-values-text',
      });
  
      console.log('File saved to local storage:', fileUri);
  
      setLogsWithin5Mins([]);
      groupLogs.current = [];
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  };
  

  const clearLogs = () => {
    setLogsWithin5Mins([]);
    groupLogs.current = [];
    AsyncStorage.removeItem('logs');
  };


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <ScrollView>
          {showLogs && (
            <ScrollView style={styles.logContainer}>
              {logsWithin5Mins.map((log, index) => (
                <View key={index}>
                  {log.isFiveMinuteReading && (
                    <>
                      <Text style={styles.logLabel}>Reading every 5 mins:</Text>
                    </>
                  )}
                  <Text key={index} style={styles.logText}>
                    {log.log}
                  </Text>
                </View>
              ))}
            </ScrollView>
          )}
          <View style={styles.logsbutton}>
            <TouchableOpacity style={styles.button} onPress={() => setShowLogs(!showLogs)}>
              <Text style={styles.buttontext}>{showLogs ? 'Hide Logs' : 'Show Logs'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={exportToCSV}>
              <Text style={styles.buttontext}>Export to Excel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={clearLogs}>
              <Text style={styles.buttontext}>Clear Logs</Text>
            </TouchableOpacity>
          </View>
      
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logLabel: {
    fontSize: hp(1),
    color: 'green',
    fontWeight: 'bold',
  },
  container: {
    //padding: 16,
    flex: 1
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  logContainer: {
    //maxHeight: 200,
    //marginTop: 16,
    height: hp(70),
    width: wp(95),
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: hp(2),
    alignSelf: 'center',
    marginBottom: hp(3)

  },
  logText: {
    fontSize: hp(1.5),
  },
  button: {
    backgroundColor: '#24a0ed',
    width: wp(90),
    height: hp(6),
    borderRadius: 10,
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent:'center',
  },
  logsbutton:{
    alignItems:'center'
  },
  buttontext:{
    fontSize: hp(2)
  },
  
});
