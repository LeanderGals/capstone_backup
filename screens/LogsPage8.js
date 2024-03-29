import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { getItem, setItem } from '../utils/asyncStorage';
import  {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { startDataLogging } from './SensorDataLogger';



export default function Logspage() {
  const [logs, setLogs] = useState([]);
  const navigation = useNavigation();
  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  useEffect(() => {
    const fetchDataAndLogs = async () => {
      try {
        const storedLogs = await getItem('sensorLogs8');
        if (storedLogs) {
          setLogs(JSON.parse(storedLogs));
        }
      } catch (error) {
        console.error('Error fetching sensor logs:', error);
      }
    };
 
    fetchDataAndLogs();

    // Start interval to update logs every 1 minute
    const interval = setInterval(() => {
      appendSensorDataToLogs();
    }, 60000); // 120000 milliseconds = 2 minute

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);


  //code for exporting the logs into gmail or other platform
  const exportToCSV = async () => {
    try {
      let csvData = 'Aquarium Name, Date, Time, Water Temperature,Light Intensity,Humidity,Turbidity,pH Level,Environment Temperature\n';
  
      logs.forEach((log) => {
        const { timestamp, data } = log;
        const {
          aquariumName = 'N/A',
          ds18b20temp = 'N/A',
          lux = 'N/A',
          humidity = 'N/A',
          turbidity = 'N/A',
          phLevel = 'N/A',
          temperature = 'N/A',
        } = data || {};

        const formattedTimestamp = new Date(timestamp).toLocaleString();
        csvData += `${aquariumName},${formattedTimestamp},${ds18b20temp},${lux},${humidity},${turbidity},${phLevel},${temperature}\n`;
      });

      const fileUri = `${FileSystem.documentDirectory}sensor_logs.csv`;

      Alert.alert(
        'Export CSV',
        'Are you sure you want to export the CSV file? This would also delete the logs.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Export',
            onPress: async () => {
              await FileSystem.writeAsStringAsync(fileUri, csvData, { encoding: FileSystem.EncodingType.UTF8 });
  
              await Sharing.shareAsync(fileUri, {
                mimeType: 'text/csv',
                dialogTitle: 'Share CSV',
                UTI: 'public.comma-separated-values-text',
              });
              await deleteLogsData();
              console.log('File saved to local storage:', fileUri);
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error exporting to CSV:', error);
    }
  };

  //delete the data for sensorlogs
  const deleteLogsData = async () => {
    try {
      await setItem('sensorLogs8', JSON.stringify([]));
      setLogs([]);
      console.log('Logs data deleted');
    } catch (error) {
      console.error('Error deleting logs data:', error);
    }
  };


  //putting the data into array then saving it to asyncstorage
  const appendSensorDataToLogs = async () => {
    try {
      const storedLogs = await getItem('sensorLogs8');
      const updatedLogs = storedLogs ? JSON.parse(storedLogs) : [];

      const tempt2 = await getItem('logenvitempt')
      const light2 = await getItem('loglight')
      const turb2 = await getItem('logturbidity')
      const hum2 = await getItem('loghumidity')
      const ph2 = await getItem('logph')
      const ds2 = await getItem('logwatertempt')
      const aquariumName = await getItem('aquariumlogname');

      // Replace with the data retrieved from the sensors
      const newLogData = {
        temperature: tempt2, 
        humidity: hum2, 
        turbidity: turb2, 
        phLevel: ph2, 
        ds18b20temp: ds2, 
        lux: light2, 
        aquariumName: aquariumName,
      };

      const timestamp = new Date().toISOString();
      const newLog = {
        timestamp,
        data: newLogData,
      };

      const updatedLogsWithNewLog = [newLog, ...updatedLogs];

      
      await setItem('sensorLogs8', JSON.stringify(updatedLogsWithNewLog));
      setLogs(updatedLogsWithNewLog);
      console.log('Sensor data appended to logs:', newLog);
    } catch (error) {
      console.error('Error appending sensor data to logs:', error);
    } 
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
      <View style={styles.header}> 
        <TouchableOpacity onPress={aboutscreen}>
          <Image style={styles.logo} source={require('../images/logo1.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={exportToCSV}>
          <Image style={styles.messagebox} source={require('../images/share.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <View style={styles.topName}>
          <Text style={styles.logsheader}>Sensor Reading Logs</Text>
        </View>
          <ScrollView>
          <View style={styles.all}>
          <View style={styles.logs}>
            {logs.map((log, index) => (
              <View key={index} style={styles.logsensor}>
                <Text style={styles.logtext}>Aquarium Name: {log.data?.aquariumName || 'N/A'}</Text>
                <Text style={styles.logtext}>Timestamp: {new Date(log.timestamp).toLocaleString()}</Text>
                <Text style={styles.logtext}>Water Temperature: {log.data?.ds18b20temp || 'N/A'}</Text>
                <Text style={styles.logtext}>Light Intensity: {log.data?.lux || 'N/A'}</Text>
                <Text style={styles.logtext}>Humidity: {log.data?.humidity || 'N/A'}</Text>
                <Text style={styles.logtext}>Turbidity: {log.data?.turbidity || 'N/A'}</Text>
                <Text style={styles.logtext}>pH Level: {log.data?.phLevel || 'N/A'}</Text>
                <Text style={styles.logtext}>Environment Temperature: {log.data?.temperature || 'N/A'}</Text>
              </View>
            ))}
          </View>
          </View>
          </ScrollView>
        </View>    
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems: 'center',
    //backgroundColor: '#C6F3AA'
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: hp(2)
  },
  header:{
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    marginTop: hp(3)
  },
  logo:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: hp(1),
    //marginBottom: hp(2),
    width: wp(50),
    height: hp(10),
  },
  messagebox:{
    resizeMode:'contain',
    marginLeft: wp(27),
    //backgroundColor:'orange',
    width:wp(10),
    height:hp(5),
  },
  topName:{
    backgroundColor: 'rgba(165,226,121, .8)',
    height:hp(6),
    width: wp(70),
    marginBottom:hp(1),
    borderRadius: 15,
    alignSelf:'center',
    justifyContent:'center',
  },
  logsheader:{
    fontSize: hp(3),
    fontWeight: 'bold',
    //marginLeft: wp(4),
    //marginBottom: hp(2),
    alignSelf:'center',
    justifyContent:'center'
  },
  middle:{
    flex: 10
  },
  all:{
    marginLeft: wp(5)
  },
  logs:{
    marginBottom: hp(2),
    //backgroundColor: 'green',

  },
  logsensor:{
    borderWidth: 1,
    borderColor: 'black',
    marginTop: hp(1),
    marginRight: wp(5),
    padding: hp(1),
    paddingLeft: wp(5),
    borderRadius: 10,
  },
  logtext:{
    fontSize: hp(2),
    fontWeight: 'bold'
  },

})