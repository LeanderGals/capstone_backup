import {View, Text, StyleSheet, Dimensions, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, Modal, ScrollView, ImageBackground, Button, StatusBar, ActivityIndicator} from 'react-native'
import React, {useState, useEffect, useRef }from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../utils/asyncStorage';
import NetInfo from '@react-native-community/netinfo';
import * as Notifications from 'expo-notifications';
import { startDataLogging } from './SensorDataLogger';
import { startDataLogging2 } from './SensorDataLogger2';
import { startDataLogging3 } from './SensorDataLogger3';
import { startDataLogging4 } from './SensorDataLogger4';
import { startDataLogging5 } from './SensorDataLogger5';
import { startDataLogging6 } from './SensorDataLogger6';
import { startDataLogging7 } from './SensorDataLogger7';
import { startDataLogging8 } from './SensorDataLogger8';
import { startDataLogging9 } from './SensorDataLogger9';
import { startDataLogging10 } from './SensorDataLogger10';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


//notification on phone
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const{width, height} = Dimensions.get('window');

const HomePage = ({route}) =>{
  const navigation = useNavigation();
  //page navigations 
  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const camera = async()=>{
    navigation.push('Camera')
  }
  const LogsPage = async ()=>{
    
    switch (idbox) {
      case '1':
        navigation.push('Logs');
        break;
      case '2':
        navigation.push('Logs2');
        break;
      case '3':
        navigation.push('Logs3');
        break;
      case '4':
        navigation.push('Logs4');
        break;
      case '5':
        navigation.push('Logs5');
        break;
      case '6':
        navigation.push('Logs6');
        break;
      case '7':
        navigation.push('Logs7');
        break;
      case '8':
        navigation.push('Logs8');
        break;
      case '9':
        navigation.push('Logs9');
        break;
      case '10':
        navigation.push('Logs10');
        break;
      default:
        break;
    }
  }


  const [countdays, setCountdays] = useState('');

 
 
  const { idbox } = route.params || {}; // get idbox value from route params if passed from Dashboard

  useEffect(() => {
    // if idbox is not received get it from async
    console.log('Route params:', route.params);
    if (!idbox) {
      retrieveIdboxValue();
    } else {
      console.log('Received idbox value from route:', idbox);
    }
    setMonthDayYear(idbox);
    
    
  }, [idbox]);

  const retrieveIdboxValue = async () => {
    try {
      // Retrieve the idboxValue from AsyncStorage
      const idboxValue = await AsyncStorage.getItem('idboxValue');
      if (idboxValue !== null) {
        console.log('Retrieved idbox value:', idboxValue);
      } else {
        console.log('No idbox value found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving idbox value:', error);
    }
  };

  // getting the date base on aquarium
  const setMonthDayYear = async (idbox) => {
    // Logic to set month, day, year based on idbox value
    switch (idbox) {
      case '1':
        const aqlog = await getItem('aqlogname')
        setItem('aquariumlogname', aqlog)
        setItem('aqid', '1')
        const m = await getItem('umonth')
        const d = await getItem('uday')
        const y = await getItem('uyear')
        const websocket = await getItem('websocketip')
        setItem('homeweb', websocket)
        setItem('homemonth', m)
        setItem('homeday', d)
        setItem('homeyear', y)
        console.log('n',m)
        console.log('nig',d)
        console.log('nigana',y)
        break;
      case '2':
        const aqlog2 = await getItem('aqlogname1')
        setItem('aquariumlogname', aqlog2)
        setItem('aqid', '2')
        const m2 = await getItem('umonth1')
        const d2 = await getItem('uday1')
        const y2 = await getItem('uyear1')
        const websocket2 = await getItem('websocketip1')
        setItem('homeweb', websocket2)
        setItem('homemonth', m2)
        setItem('homeday', d2)
        setItem('homeyear', y2)
        console.log('n2',m2)
        console.log('nig2',d2)
        console.log('nigana2',y2)
        break;
      case '3':
        const aqlog3 = await getItem('aqlogname2')
        setItem('aquariumlogname', aqlog3)
        setItem('aqid', '3')
        const m3 = await getItem('umonth2')
        const d3 = await getItem('uday2')
        const y3 = await getItem('uyear2')
        const websocket3 = await getItem('websocketip2')
        setItem('homeweb', websocket3)
        setItem('homemonth', m3)
        setItem('homeday', d3)
        setItem('homeyear', y3)
        break;
      case '4':
        const aqlog4 = await getItem('aqlogname3')
        setItem('aquariumlogname', aqlog4)
        setItem('aqid', '4')
        const m4 = await getItem('umonth3')
        const d4 = await getItem('uday3')
        const y4 = await getItem('uyear3')
        const websocket4 = await getItem('websocketip3')
        setItem('homeweb', websocket4)
        setItem('homemonth', m4)
        setItem('homeday', d4)
        setItem('homeyear', y4)
        break;
      case '5':
        const aqlog5 = await getItem('aqlogname4')
        setItem('aquariumlogname', aqlog5)
        setItem('aqid', '5')
        const m5 = await getItem('umonth4')
        const d5 = await getItem('uday4')
        const y5 = await getItem('uyear4')
        const websocket5 = await getItem('websocketip4')
        setItem('homeweb', websocket5)
        setItem('homemonth', m5)
        setItem('homeday', d5)
        setItem('homeyear', y5)
        break;
      case '6':
        const aqlog6 = await getItem('aqlogname5')
        setItem('aquariumlogname', aqlog6)
        setItem('aqid', '6')
        const m6 = await getItem('umonth5')
        const d6 = await getItem('uday5')
        const y6 = await getItem('uyear5')
        const websocket6 = await getItem('websocketip5')
        setItem('homeweb', websocket6)
        setItem('homemonth', m6)
        setItem('homeday', d6)
        setItem('homeyear', y6)
        break;
      case '7':
        const aqlog7 = await getItem('aqlogname6')
        setItem('aquariumlogname', aqlog7)
        setItem('aqid', '7')
        const m7 = await getItem('umonth6')
        const d7 = await getItem('uday6')
        const y7 = await getItem('uyear6')
        const websocket7 = await getItem('websocketip6')
        setItem('homeweb', websocket7)
        setItem('homemonth', m7)
        setItem('homeday', d7)
        setItem('homeyear', y7)
        break;
      case '8':
        const aqlog8 = await getItem('aqlogname7')
        setItem('aquariumlogname', aqlog8)
        setItem('aqid', '8')
        const m8 = await getItem('umonth7')
        const d8 = await getItem('uday7')
        const y8 = await getItem('uyear7')
        const websocket8 = await getItem('websocketip7')
        setItem('homeweb', websocket8)
        setItem('homemonth', m8)
        setItem('homeday', d8)
        setItem('homeyear', y8)
        break;
      case '9':
        const aqlog9 = await getItem('aqlogname8')
        setItem('aquariumlogname', aqlog9)
        setItem('aqid', '9')
        const m9 = await getItem('umonth8')
        const d9 = await getItem('uday8')
        const y9 = await getItem('uyear8')
        const websocket9 = await getItem('websocketip8')
        setItem('homeweb', websocket9)
        setItem('homemonth', m9)
        setItem('homeday', d9)
        setItem('homeyear', y9)
        break;
      case '10':
        const aqlog10 = await getItem('aqlogname9')
        setItem('aquariumlogname', aqlog10)
        setItem('aqid', '10')
        const m10 = await getItem('umonth9')
        const d10 = await getItem('uday9')
        const y10 = await getItem('uyear9')
        const websocket10 = await getItem('websocketip9')
        setItem('homeweb', websocket10)
        setItem('homemonth', m10)
        setItem('homeday', d10)
        setItem('homeyear', y10)
        break;  
    
      default:
        break;
    }
    setItem('homeidbox', idbox)
    console.log('hmmm',idbox)
    displaydays()
  };  
  
  const handleRestartCounter = async () => {
    const homeidbox = await getItem('homeidbox');

    Alert.alert(
      'Confirm',
      'Do you want to reset the days?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => runSwitchCase(homeidbox),
        },
      ],
      { cancelable: false }
    );
  };

  //restarting the counting of days when harvested
  const runSwitchCase = async (homeidbox) => {
    // Reset the days counter to zero
    console.log('h111',homeidbox)
    switch (homeidbox) {
      case '1':
        setItem('dayscounter1', '1');
        setCountdays('1');
        break;
      case '2':
        setItem('dayscounter2', '1');
        setCountdays('1');
        break;
      case '3':
        setItem('dayscounter3', '1');
        setCountdays('1');
        break;
      case '4':
        setItem('dayscounter4', '1');
        setCountdays('1');
        break;
      case '5':
        setItem('dayscounter5', '1');
        setCountdays('1');
        break;
      case '6':
        setItem('dayscounter6', '1');
        setCountdays('1');
        break;
      case '7':
        setItem('dayscounter7', '1');
        setCountdays('1');
        break;
      case '8':
        setItem('dayscounter8', '1');
        setCountdays('1');
        break;
      case '9':
        setItem('dayscounter9', '1');
        setCountdays('1');
        break;
      case '10':
        setItem('dayscounter10', '1');
        setCountdays('1');
        break;
      default:
        break;
    }
  };
  

  const displaydays = async () => {
    
    //day counter
    var date = new Date().getDate(); //Current Day
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear();//Current Year
    
    console.log('current date',month, date, year) 

    const monthset = parseInt(await getItem('homemonth'));
    const dayset = parseInt(await getItem('homeday'));
    const yearset = parseInt(await getItem('homeyear'));
    const homeidbox = await getItem('homeidbox')
    console.log('user date', monthset, dayset, yearset) 
    
    switch (homeidbox){
      case '1': 
        setCountdays(await getItem('dayscounter1'))
        break;
      case '2':
        setCountdays(await getItem('dayscounter2'))
        break;
      case '3':
        setCountdays(await getItem('dayscounter3'))
        break;
      case '4': 
        setCountdays(await getItem('dayscounter4'))
      break;
      case '5':
        setCountdays(await getItem('dayscounter5'))
        break;
      case '6':
        setCountdays(await getItem('dayscounter6'))
        break;
      case '7': 
        setCountdays(await getItem('dayscounter7'))
      break;
      case '8':
        setCountdays(await getItem('dayscounter8'))
        break;
      case '9':
        setCountdays(await getItem('dayscounter9'))
        break;
      case '10':
        setCountdays(await getItem('dayscounter10'))
        break;
    }
    
    
    /*setting the displayed days by getting the real time and date and 
    sustracting it when the user set date of cultivation*/
    const handleHomeIdBox = async (id) => {
      const currentDate = new Date();
      const storedDate = await getItem(`lastUpdatedDate${id}`);
      const yearhp = currentDate.getFullYear();
      const monthhp = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dayhp = String(currentDate.getDate()).padStart(2, '0');
      const formattedCurrentDate = `${yearhp}-${monthhp}-${dayhp}`;
      let initiator = parseInt(await getItem(`initiate${id}`));
      let dayscounter = parseInt(await getItem(`dayscounter${id}`)) || 0;

      //condition when it is harvest days
      if(countdays >= 5 && countdays <= 7){
        Alert.alert(
          'Harvest Ready',
          'Your microalgae is are ready to harvest! 🌾 Once harvested restart tha days by tapping the restart button.',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
            {
              text: 'Harvest',
              onPress: () => runSwitchCase(homeidbox),
            },
          ],
          { cancelable: false }
        );
      }
      if(countdays > 7){
        Alert.alert(
          'Contaminated Microalgae',
          'Your microalgae might be contaminated. Harvest it as soon as possible.',
          [
            {
              text: 'OK',
              style: 'cancel',
            },
            {
              text: 'Harvest',
              onPress: () => runSwitchCase(homeidbox),
            },
          ],
          { cancelable: false }
        );
      }

      //condition if the user date and real date match
      if (month === monthset && date === dayset && year === yearset) {
        setItem(`initiate${id}`, '1');
        initiator = parseInt(await getItem(`initiate${id}`));
      }
      
      //adding 1 on countdays when both dates are the same 
      if (formattedCurrentDate !== storedDate) {
        setItem(`lastUpdatedDate${id}`, formattedCurrentDate);
        if (
          ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) &&
          initiator === 1
        ) {
          dayscounter += 1;
          setItem(`dayscounter${id}`, JSON.stringify(dayscounter));
          setCountdays(await getItem(`dayscounter${id}`));
          }
        }
      };
    

    //the countdays is based on what aquarium is selected
    switch (homeidbox) {
      case '1':
        await handleHomeIdBox('1');
        break;
      case '2':
        await handleHomeIdBox('2');
        break;
      case '3':
        await handleHomeIdBox('3');
        break;
      case '4':
        await handleHomeIdBox('4');
        break;
      case '5':
        await handleHomeIdBox('5');
        break;
      case '6':
        await handleHomeIdBox('6');
        break;
      case '7':
        await handleHomeIdBox('7');
        break;
      case '8':
        await handleHomeIdBox('8');
        break;
      case '9':
        await handleHomeIdBox('9');
        break;
      case '10':
        await handleHomeIdBox('10');
        break;
      default:
        break;
    }
      }
      
    //for storing and displaying of data
    const [temptAlert, setTemptAlert] = useState('');
    const [lightAlert, setLightAlert] = useState(''); 
    const [turbAlert, setTurbAlert] = useState('');
    const [humAlert, sethumAlert] = useState('');
    const [phAlert, setPhAlert] = useState('');
    const [envitemptAlert, setEnviemptAlert] = useState('');

    const [temptAlertColor, setTemptAlertColor] = useState('');
    const [lightAlertColor, setLightAlertColor] = useState('');
    const [turbAlertColor, setTurbAlertColor] = useState('');
    const [humAlertColor, sethumAlertColor] = useState('');
    const [phAlertColor, setPhAlertColor] = useState('');
    const [envitemptAlertColor, setEnviemptAlertColor] = useState('');


    //data connection
    const [sensorData, setSensorData] = useState({
      temperature: null,
      humidity: null,
      turbidity: null,
      phLevel: null,
      ds18b20temp: null,
      lux: null,
    });
    
   
  
    useEffect(() => {
      var weberror = 0;
      var weberror2 = 0;
      //get data from sensors
      const connectWebSocket = async () => {
        try {
          const websocketipadd = await getItem('homeweb');
          console.log('webaddress', websocketipadd);
  
          const socket = new WebSocket(`ws://${websocketipadd}:443`);
  
          socket.onopen = () => {
            console.log('WebSocket connection opened.');
          };
  
          socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log('Received data:', data);
            setSensorData(data);
            alertUser(data);
          };
  
          socket.onclose = () => {
            console.log('WebSocket connection closed. Reconnecting...');
            weberror += 1;
            if (weberror <= 3) {
              alert('Error, Cannot connect please restart the app now.');
              scheduleLocalNotification(`Error, Cannot connect please restart the app now.`);
              // Reconnect after 3 seconds
              setTimeout(connectWebSocket, 3000);
            }
          };
  
          socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            weberror2 += 1;
            if (weberror2 <= 3) {
              alert(`WebSocket error: ${JSON.stringify(error)}`);
              scheduleLocalNotification(`WebSocket error: ${JSON.stringify(error)}`);
              // Reconnect after 3 seconds
              setTimeout(connectWebSocket, 3000);
            }         
          };
        } catch (error) {
          console.error('Error connecting to WebSocket:', error);
          alert(`Error connecting: ${JSON.stringify(error)}`);
        }
      };
    

      //check if there is network or internet
      const checkNetworkStatus = async () => {
        try {
          const state = await NetInfo.fetch();
      
          if (!state.isConnected) {
            alert('Not connected to the internet.');
          } else {
            console.log('Connected to:', state.type);
          }
      
          return state;
      
        } catch (error) {
          if (error.code === NetInfo.ERROR_CODES.NO_PERMISSIONS) {
            console.error('Network permissions not granted.');
            alert('Please grant network permissions to access this feature.');
          } else {
            console.error('Error checking network status:', error);
            alert('Error checking network status.');
          }
      
          return null;
        }
        
      };

      var ds3 = 0
      var lux3 = 0 
      var turb3 = 0
      var hum3 = 0
      var ph3 = 0
      var et3 = 0

      var ds4 = 0
      var lux4 = 0 
      var turb4 = 0
      var hum4 = 0
      var ph4 = 0
      var et4 = 0

    
      const alertUser = (data) => {
        if(data){
          //getting the data from each sensor
          const tempthp = data.temperature !== null ? parseInt(data.temperature) : 0;
          const humhp = data.humidity !== null ? parseInt(data.humidity) : 0;
          const turhp = data.turbidity !== null ? parseInt(data.turbidity) : 0;
          const phhp = data.phLevel !== null ? parseInt(data.phLevel) : 0;
          const dshp = data.ds18b20temp !== null ? parseInt(data.ds18b20temp) : 0;
          const luxhp = data.lux !== null ? parseInt(data.lux) : 0;
          //console.log(luxhp)  
          const tempthp1 = data.temperature !== null ? parseFloat(data.temperature).toFixed(2) : '0.00';
          const humhp1 = data.humidity !== null ? parseFloat(data.humidity).toFixed(2) : '0.00';
          const turhp1 = data.turbidity !== null ? parseFloat(data.turbidity).toFixed(2) : '0.00';
          const phhp1 = data.phLevel !== null ? parseFloat(data.phLevel).toFixed(2) : '0.00';
          const dshp1 = data.ds18b20temp !== null ? parseFloat(data.ds18b20temp).toFixed(2) : '0.00';
          const luxhp1 = data.lux !== null ? parseFloat(data.lux).toFixed(2) : '0.00';
          
        
          setItem('logwatertempt', dshp1)
          setItem('loglight', luxhp1)
          setItem('logturbidity', turhp1)
          setItem('loghumidity', humhp1)
          setItem('logph', phhp1)
          setItem('logenvitempt', tempthp1)
          
          console.log('mymy', dshp1)

          //conditions if data is above or below the optimal range
          if(dshp < 25.01){
            setTemptAlert('Too Cold');
            setTemptAlertColor('#EE4B2B');
            if(ds3 < 3){
              scheduleLocalNotification(`Temperature is too cold: ${dshp}`);
              ds3 += 1;
            }
            console.log('tmine1')
          }  
          else if(dshp > 30.01){
            setTemptAlert('Too Hot');
            setTemptAlertColor('#EE4B2B');
            if(ds4 < 3){
              scheduleLocalNotification(`Temperature is too cold: ${dshp}`);
              ds4 += 1;
            }
            console.log('tmine2')
          }
          else{
            setTemptAlert('Normal');
            setTemptAlertColor('#9cd274');
            console.log('tmine3')
          }
          if(luxhp < 1000){
            setLightAlert('Too Dim');
            setLightAlertColor('#EE4B2B');
            if(lux3 < 3){
              scheduleLocalNotification(`Light is too dim: ${luxhp}`);
              lux3 += 1;
            }
            console.log('mine1')
          }
          else if(luxhp > 2000){
            setLightAlert('Too Bright');
            setLightAlertColor('#EE4B2B');
            if(lux4 < 3){
              scheduleLocalNotification(`Light is too bright: ${luxhp}`);
              lux4 += 1;
            }
            console.log('mine2')
          }
          else{
            setLightAlert('Normal');
            setLightAlertColor('#9cd274');
            console.log('mine3')
          }
          if(turhp < 100){
            setTurbAlert('Too Low Turbidity');
            setTurbAlertColor('#EE4B2B');
            if(turb3 < 3){
              scheduleLocalNotification(`Turbidity is too low: ${turhp}`);
              turb3 += 1;
            }
            console.log('mine1')
          }
          else if(turhp > 200){
            setTurbAlert('Too High Turbidity');
            setTurbAlertColor('#EE4B2B');
            if(turb4 < 3){
              scheduleLocalNotification(`Turbidity is too high: ${turhp}`);
              turb4 += 1;
            }
            console.log('mine2')
          }
          else{
            setTurbAlert('Normal');
            setTurbAlertColor('#9cd274');
            console.log('mine3')
          }
          if(humhp < 70){
            sethumAlert('Too Low Humidity');
            sethumAlertColor('#EE4B2B');
            if(hum3 < 3){
              scheduleLocalNotification(`Humidity is too low: ${humhp}`);
              hum3 += 1;
            }
            console.log('mine1')
          }
          else if(humhp > 80){
            sethumAlert('Too High Humidity');
            sethumAlertColor('#EE4B2B');
            if(hum4 < 3){
              scheduleLocalNotification(`Humidity is too high: ${humhp}`);
              hum4 += 1;
            }
            console.log('mine2')
          }
          else{
            sethumAlert('Normal');
            sethumAlertColor('#9cd274');
            console.log('mine3')
          }
          if(phhp < 7.01){
            setPhAlert('Too Acidic');
            setPhAlertColor('#EE4B2B');
            if(ph3 < 3){
              scheduleLocalNotification(`pH is too acidic: ${phhp}`);
              ph3 += 1;
            }
            console.log('mine1')
          }
          else if(phhp > 8.01){
            setPhAlert('Too Basic');
            setPhAlertColor('#EE4B2B');
            if(ph3 < 3){
              scheduleLocalNotification(`pH is too basic: ${phhp}`);
              ph3 += 1;
            }
            console.log('mine2')
          }
          else{
            setPhAlert('Normal');
            setPhAlertColor('#9cd274');
            console.log('mine3')
          }
          if(tempthp < 25.01){
            setEnviemptAlert('Too Cold');
            setEnviemptAlertColor('#EE4B2B');
            if(et3 < 3){
              scheduleLocalNotification(`Envi. Temperature is too cold: ${tempthp}`);
              et3 += 1;
            }
            console.log('emine1')
          }  
          else if(tempthp > 30.01){
            setEnviemptAlert('Too Hot');
            setEnviemptAlertColor('#EE4B2B');
            if(et4 < 3){
              scheduleLocalNotification(`Envi. Temperature is too hot: ${tempthp}`);
              et4 += 1;
            }
            console.log('emine2')
          }
          else{
            setEnviemptAlert('Normal');
            setEnviemptAlertColor('#9cd274');
            console.log('emine3')
          }
          console.log(dshp)
          console.log(luxhp)
          console.log(turhp)
          console.log(humhp)
          console.log(phhp)
          console.log(tempthp)
          
        
          } 
        }
        
        switch (idbox) {
          case '1':
            startDataLogging();
            break;
          case '2':
            startDataLogging2();
            break;
          case '3':
            startDataLogging3();
            break;
          case '4':
            startDataLogging4();
            break;
          case '5':
            startDataLogging5();
            break;
          case '6':
            startDataLogging6();
            break;
          case '7':
            startDataLogging7();
            break;
          case '8':
            startDataLogging8();
            break;
          case '9':
            startDataLogging9();
            break;
          case '10':
            startDataLogging10();
            break;
          default:
            break;
        }
      
      checkNetworkStatus();
      connectWebSocket();
      alertUser();
    }, []); 
    

    //notification for sensors 
    const scheduleLocalNotification = async (message) => {
      try {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Sensor Alert 🚨',
            body: message,
            data: { data: 'goes here' },
          },
          trigger: null 
        });
      } catch (error) {
        console.error('Error scheduling local notification:', error);
      }
    };


    //for popup mini screen contains information
    const [modalVisible, setModalVisible] = useState(false);
    const closeModal = () => {
      setModalVisible(false);
    }

    //code for the expected harvest time
    const harvesttime = async() => {
      const userdayinput = parseInt(await getItem("homeday"));
      const usermonthinput = parseInt(await getItem('homemonth'));
      const umonthinput = await getItem('umonthintput')
      const uyearinput = parseInt(await getItem('homeyear'));
      var firstharvestday = 4 + userdayinput;
      console.log(umonthinput)
      console.log(userdayinput)
      console.log(usermonthinput)
      if(userdayinput > 27){
        var usermonthinput2 = usermonthinput + 1;
        switch (usermonthinput2) {
          case 1:
            setItem('umonthintput', 'January')
            break;
          case 2:
            setItem('umonthintput', 'Febuary')
            break;
          case 3:
            setItem('umonthintput', 'March')
            break;
          case 4:
            setItem('umonthintput', 'April')
            break;
          case 5:
            setItem('umonthintput', 'May')
            break;
          case 6:
            setItem('umonthintput', 'June')
            break;
          case 7:
            setItem('umonthintput', 'July')
            break;
          case 8:
            setItem('umonthintput', 'August')
            break;
          case 9:
            setItem('umonthintput', 'September')
            break;
          case 10:
            setItem('umonthintput', 'October')
            break;
          case 11:
            setItem('umonthintput', 'November')
            break;
          case 12:
            setItem('umonthintput', 'December')
            break;
          default:
            break;
        }
      }
      
        switch (usermonthinput) {
          case 1:
            setItem('umonthintput', 'January')
            break;
          case 2:
            setItem('umonthintput', 'Febuary')
            break;
          case 3:
            setItem('umonthintput', 'March')
            break;
          case 4:
            setItem('umonthintput', 'April')
            break;
          case 5:
            setItem('umonthintput', 'May')
            break;
          case 6:
            setItem('umonthintput', 'June')
            break;
          case 7:
            setItem('umonthintput', 'July')
            break;
          case 8:
            setItem('umonthintput', 'August')
            break;
          case 9:
            setItem('umonthintput', 'September')
            break;
          case 10:
            setItem('umonthintput', 'October')
            break;
          case 11:
            setItem('umonthintput', 'November')
            break;
          case 12:
            setItem('umonthintput', 'December')
            break;
          default:
            break;
        }
      
      
      // alert when days is tapped
      Alert.alert(
        'Expected Harvest Time',
        'Your microalgae is are ready to harvest in ' + umonthinput + ' ' + firstharvestday + ', ' + uyearinput,
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
    
  
  return( 
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={camera}>
            <Image style={styles.camera} source={require('../images/camera1.png')} />
          </TouchableOpacity>  

          <TouchableOpacity onPress={LogsPage}>
            <Image style={styles.messagebox} source={require('../images/log4.png')} />
          </TouchableOpacity>     
               
        </View>

        <View style={styles.middle}> 
          <View style={styles.daysandrestart}>
          <View style={styles.days}>
            <TouchableOpacity onPress={harvesttime}>
              <Image style={styles.leaf} source={require('../images/leaf.png')} />
              <View style={styles.textdays}>
                <Text Text style={styles.daysday}>Day {countdays}</Text>
              </View>
            </TouchableOpacity>
          </View>  
          </View>        
        </View>
 
        <View style={styles.footer}>
          <View style={styles.algaerow}>
            <Text style={styles.algaetext}>Microalgae</Text>
            <Modal
            animationType= "fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            >
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.aqsize1}>
                    <Text style={styles.infotext}>Your microalgae was harvested 0 times</Text>
                    <Image source={require('../images/aquariumdp.gif')} style={styles.aqsize}/>
                  </View>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                      <Text style={styles.infoclose}>Close</Text>
                    </TouchableOpacity>
                  
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          {/* Icon button to trigger modal */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
          {/* Replace the source with your icon */}
          <Image
            source={require('../images/info.png')}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
          </View>
          <ScrollView>
          <View style={styles.all}>
            
              <View style={styles.part1}>
                <Image style={styles.tempt} source={require('../images/tempt2.gif')} />
                  <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>Water Temperature</Text>
                    <Text style={styles.temptNum}>{sensorData.ds18b20temp !== null ? sensorData.ds18b20temp.toFixed(2) : null}°C</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>20-30 °C</Text>
                    </View>
                  </View>
                  <View style={[styles.part2, {backgroundColor: temptAlertColor, }]}>
                    <Text style={styles.alertText}>{temptAlert}</Text>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.light} source={require('../images/light2.gif')} />
                <View style={styles.temptText}>
                  <Text style={styles.temperatureText}>Light</Text>
                  <Text style={styles.temptNum}>{sensorData.lux} µmol</Text>
                  <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>1000-2000 µmol photons/(m²·s)</Text>
                    </View>
                </View>
                <View style={[styles.part2, {backgroundColor: lightAlertColor,}]}>
                  <Text style={styles.alertText}>{lightAlert}</Text>
                </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.turb123} source={require('../images/turbidity.png')} />
                <View style={styles.temptText}>
                  <Text style={styles.temperatureText}>Turbidity</Text>
                  <Text style={styles.temptNum}>{sensorData.turbidity} NTU</Text>
                  <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}> 100 - 200 NTU </Text>
                    </View>
                </View>
                <View style={[styles.part2, {backgroundColor: turbAlertColor,}]}>
                  <Text style={styles.alertText}>{turbAlert}</Text>
                </View>
            </View>
              <View style={styles.part1}>
                <Image style={styles.humidity} source={require('../images/humidity2.gif')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>Humidity</Text>
                    <Text style={styles.temptNum}>{sensorData.humidity}% RH</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>70% - 80% RH</Text>
                    </View>
                  </View>
                  <View style={[styles.part2, {backgroundColor: humAlertColor,}]}>
                    <Text style={styles.alertText}>{humAlert}</Text>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.ph} source={require('../images/ph2.gif')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>pH Level</Text>
                    <Text style={styles.temptNum}>{sensorData.phLevel !== null ? sensorData.phLevel.toFixed(2) : null}</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>7 - 8 ph</Text>
                    </View>
                  </View>
                  <View style={[styles.part2, {backgroundColor: phAlertColor, }]}>
                    <Text style={styles.alertText}>{phAlert}</Text>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.tempt} source={require('../images/etempt2.gif')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>envi. Temperature</Text>
                    <Text style={styles.temptNum}>{sensorData.temperature}°C</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>20 - 30 °C</Text>
                    </View>
                  </View>
                  <View style={[styles.part2, {backgroundColor: envitemptAlertColor, }]}>
                    <Text style={styles.alertText}>{envitemptAlert}</Text>
                  </View>
              </View>     
            </View>
          </ScrollView>
        </View>
        </ImageBackground>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    
  },
  header:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginTop: hp(4)
  },
  logo:{
    resizeMode:'contain',
    marginLeft: wp(3),
    width: wp(50),
    height: hp(10),
  },
  plus:{
    resizeMode:'contain',
    marginLeft: wp(15),
    width:wp(12),
    height:hp(5),
  },
  camera:{
    resizeMode:'contain',
    marginLeft: wp(12),
    width:wp(12),
    height:hp(7),
  },
  messagebox:{
    resizeMode:'contain',
    marginLeft: wp(5),
    width:wp(12),
    height:hp(8),
  },
  algaerow:{
    flexDirection:'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(10),
  },
  infotext:{
    fontSize:hp(1.7),
    alignSelf:'flex-start',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: hp(3),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: hp(2),
    maxWidth: wp(85),
  },
  iconButton: {
    marginTop:hp(0.7), 
    marginLeft: wp(3),
  },
  infoIcon: {
    height: hp(5),
    width:wp(8),
    resizeMode: 'contain',
  },
  infoclose:{
    fontSize:hp(1.7),
    fontWeight:'bold'
  },
  infotext:{
    fontSize:hp(1.7),
    alignSelf:'center',
  },
  closeButton: {
    alignSelf: 'center',
    paddingTop: hp(3),
  },
  aqsize:{
    height: hp(50),
    width:wp(80),
    resizeMode: 'contain',
  },
  middle:{
    flex: 3,
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'row',
    //backgroundColor: 'red'
  },
  leaf:{
    resizeMode:'contain',
    width: wp(50),
    height: hp(26),
  },
  days:{
    justifyContent:'center',
    alignItems:'center',
   //backgroundColor:'yellow'
  },
  textdays:{
    position:'absolute',
    justifyContent:'center',
    alignSelf:'center',
    width: wp(30),
    height:hp(20),
    marginTop: hp(3),
    //flexDirection:'row',
    //backgroundColor:'blue'
  },
  daysnum:{
    fontSize: hp(8),
    fontWeight: 'bold'
  },
  daysday:{
    fontSize:hp(5),
    alignSelf:'center'
  },
  startTime:{
    flexDirection:'row'
  },
  restart:{
    marginTop:hp(20),
    marginLeft:wp(5)
  },
  
  getStarted:{
    height: hp(5),
    width:wp(10),
    resizeMode: 'contain',
  },

  footer:{
    flex: 8,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginBottom:hp(2)
  },
  all:{
    //flexDirection:'row'
  },
  section1:{ 
    flex: 1, 
  },
  section2:{
    flex: 1,
  },
  part1:{
    flexDirection:'row',
    backgroundColor: '#90ee90',
    borderWidth: hp(0.5),
    borderColor: '#7aeb7a',
    borderRadius: 30,
    height: hp(15),
    alignItems: 'center',
    margin: wp(1)
  },
  part2:{
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: wp(35),
    height:hp(15),
    justifyContent:'center',
    
  },
  alertText:{
    fontSize: hp(2.5),
    fontWeight: 'bold',
    alignSelf:'center'
  },
  algaetext:{
    fontWeight:'bold',
    fontSize: hp(3.5),
    paddingTop: hp(1),
    paddingLeft: wp(4),
    paddingBottom: hp(1),
  },
  tempt:{
    resizeMode:'contain',
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(17),
    height: hp(12),
  },
  temptText:{
    marginLeft: wp(2),
    height: hp(15),
    width:wp(45),
    justifyContent:'center'
  },
  temperatureText:{
    fontSize: hp(2.5)
  },
  range:{
    marginTop:hp(1)
  },
  normalrange:{
    fontSize: hp(1.5)
  },
  temptNum:{
    fontWeight: 'bold',
    fontSize: hp(4.5)
  },
  light:{
    resizeMode:'contain',
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(17),
    height: hp(12),
  },
  turb123:{
    resizeMode:'contain',
    marginLeft: wp(2),
    marginBottom: hp(1),
    marginRight: wp(2),
    width: wp(15),
    height: hp(12),
  },
  humidity:{
    resizeMode:'contain',
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(17),
    height: hp(12),
  },
  ph:{
    resizeMode:'cover',
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(17),
    height: hp(12),
  },
})