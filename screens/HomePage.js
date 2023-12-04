import {View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, ActivityIndicator} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
//import WebSocket from 'react-native-websocket';
import moment from 'moment';
import { getItem, setItem } from '../utils/asyncStorage';

const{width, height} = Dimensions.get('window');

const HomePage = ({route}) =>{
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }

  //usestates
  const [currentDate, setCurrentDate] = useState('');
  const [countdays, setCountdays] = useState('');
  //const [monthset, setMonthset] = useState('');
  //const [dayset, setDayset] = useState('');
  //const [yearset, setYearset] = useState('');
  //const [idbox, setIdbox] = useState('');
  //const [dayscounter1, setDayscounter1] = useState('0');
  //const [initiator, setInitiator] = useState(0);
  const [hasRun, setHasRun] = useState(false);
 
 
  const { idbox } = route.params || {}; // Get idbox value from route params if passed from Dashboard

  useEffect(() => {
    // If idbox is not received from route params, attempt to retrieve it from AsyncStorage
    console.log('Route params:', route.params);
    if (!idbox) {
      retrieveIdboxValue();
    } else {
      console.log('Received idbox value from route:', idbox);
      // You can use the idbox value here if needed
    }
    setMonthDayYear(idbox);
    
  }, [idbox]);

  const retrieveIdboxValue = async () => {
    try {
      // Retrieve the idboxValue from AsyncStorage
      const idboxValue = await AsyncStorage.getItem('idboxValue');
      if (idboxValue !== null) {
        console.log('Retrieved idbox value:', idboxValue);
        // You can use the idboxValue as needed in this component
      } else {
        console.log('No idbox value found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving idbox value:', error);
    }
  };

 
  const setMonthDayYear = async (idbox) => {
    // Logic to set month, day, year based on idbox value
    switch (idbox) {
      case '1':
        const m = await getItem('umonth')
        const d = await getItem('uday')
        const y = await getItem('uyear')
        setItem('homemonth', m)
        setItem('homeday', d)
        setItem('homeyear', y)
        console.log('n',m)
        console.log('nig',d)
        console.log('nigana',y)
        break;
      case '2':
        const m2 = await getItem('umonth1')
        const d2 = await getItem('uday1')
        const y2 = await getItem('uyear1')
        setItem('homemonth', m2)
        setItem('homeday', d2)
        setItem('homeyear', y2)
        console.log('n2',m2)
        console.log('nig2',d2)
        console.log('nigana2',y2)
        break;
      case '3':
        const m3 = await getItem('umonth2')
        const d3 = await getItem('uday2')
        const y3 = await getItem('uyear2')
        setItem('homemonth', m3)
        setItem('homeday', d3)
        setItem('homeyear', y3)
        break;
      case '4':
        const m4 = await getItem('umonth3')
        const d4 = await getItem('uday3')
        const y4 = await getItem('uyear3')
        setItem('homemonth', m4)
        setItem('homeday', d4)
        setItem('homeyear', y4)
        break;
      case '5':
        const m5 = await getItem('umonth4')
        const d5 = await getItem('uday4')
        const y5 = await getItem('uyear4')
        setItem('homemonth', m5)
        setItem('homeday', d5)
        setItem('homeyear', y5)
        break;
      case '6':
        const m6 = await getItem('umonth5')
        const d6 = await getItem('uday5')
        const y6 = await getItem('uyear5')
        setItem('homemonth', m6)
        setItem('homeday', d6)
        setItem('homeyear', y6)
        break;
      case '7':
        const m7 = await getItem('umonth6')
        const d7 = await getItem('uday6')
        const y7 = await getItem('uyear6')
        setItem('homemonth', m7)
        setItem('homeday', d7)
        setItem('homeyear', y7)
        break;
      case '8':
        const m8 = await getItem('umonth7')
        const d8 = await getItem('uday7')
        const y8 = await getItem('uyear7')
        setItem('homemonth', m8)
        setItem('homeday', d8)
        setItem('homeyear', y8)
        break;
      case '9':
        const m9 = await getItem('umonth8')
        const d9 = await getItem('uday8')
        const y9 = await getItem('uyear8')
        setItem('homemonth', m9)
        setItem('homeday', d9)
        setItem('homeyear', y9)
        break;
      case '10':
        const m10 = await getItem('umonth9')
        const d10 = await getItem('uday9')
        const y10 = await getItem('uyear9')
        setItem('homemonth', m10)
        setItem('homeday', d10)
        setItem('homeyear', y10)
        break;  
    
      default:
        // Handle the case when idbox doesn't match any specific value
        break;
    }
    setItem('homeidbox', idbox)
    console.log('hmmm',idbox)
    displaydays()
  };  
  
  
  

  const displaydays = async () => {
    
  //day counter
  var date = new Date().getDate(); //Current Day
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear();
  
  console.log('current date',month, date, year) 
  //const ini = parseInt(await getItem('initiate') || 0);
  //setInitiator(ini)

 
  //const showdays = parseInt(await getItem('dayscounter')) || 0;
    
    // Increment the ID by 1
   // const newdays = showdays + 1;

    // Update the ID in AsyncStorage
  //  setItem('dayscounter', newdays.toString());
    
 //   const idAsString = showdays.toString();

  const monthset = await getItem('homemonth')
  const dayset = await getItem('homeday')
  const yearset = await getItem('homeyear')
  //const initiator = await getItem('initiate')
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
  
  

  switch (homeidbox) {
    case '1':
      const currentDate1 = new Date();
      const storedDate1 = await getItem('lastUpdatedDate1');
      const yearhp1 = currentDate1.getFullYear();
      const monthhp1 = String(currentDate1.getMonth() + 1).padStart(2, '0');
      const dayhp1 = String(currentDate1.getDate()).padStart(2, '0');
      const formattedCurrentDate1 = `${yearhp1}-${monthhp1}-${dayhp1}`;
      const initiator1 = await getItem('initiate1');
      let dayscounter1 = parseInt(await getItem('dayscounter1')) || 0;

      if (formattedCurrentDate1 !== storedDate1) {
        setItem('lastUpdatedDate1', formattedCurrentDate1);
        console.log('hahahhaahahahaha')
        if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
          if (initiator1 !== '1') {
            setItem('initiate1', '1');
            console.log('initiator', initiator1);
            dayscounter1 += 1;
            setItem('dayscounter1', JSON.stringify(dayscounter1));
            setCountdays(await getItem('dayscounter1'))
            console.log(dayscounter1);
            console.log(countdays);
          } else if (date === dayset && month === monthset && year === yearset) {
            dayscounter1 += 1;
            setItem('dayscounter1', JSON.stringify(dayscounter1));
            setCountdays(await getItem('dayscounter1'))
            console.log(dayscounter1);
            console.log(countdays);
          }
        }
      }
 
      break;
    case '2':
      const currentDate2 = new Date();
      const storedDate2 = await getItem('lastUpdatedDate2');
      const yearhp2 = currentDate2.getFullYear();
      const monthhp2 = String(currentDate2.getMonth() + 1).padStart(2, '0');
      const dayhp2 = String(currentDate2.getDate()).padStart(2, '0');
      const formattedCurrentDate2 = `${yearhp2}-${monthhp2}-${dayhp2}`;
      const initiator2 = await getItem('initiate2');
      let dayscounter2 = parseInt(await getItem('dayscounter2')) || 0;

      if (formattedCurrentDate2 !== storedDate2) {
        setItem('lastUpdatedDate2', formattedCurrentDate2);
        console.log('hahahhaahahahaha')
        if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
          if (initiator2 !== '1') {
            setItem('initiate2', '1');
            console.log('initiator', initiator2);
            dayscounter2 += 1;
            setItem('dayscounter2', JSON.stringify(dayscounter2));
            setCountdays(await getItem('dayscounter2'))
            console.log(dayscounter2);
            console.log(countdays);
          } else if (date === dayset && month === monthset && year === yearset) {
            dayscounter2 += 1;
            setItem('dayscounter2', JSON.stringify(dayscounter2));
            setCountdays(await getItem('dayscounter2'))
            console.log(dayscounter2);
            console.log(countdays);
          }
        }
      }
      break;
    case '3':
      const currentDate3 = new Date();
const storedDate3 = await getItem('lastUpdatedDate3');
const yearhp3 = currentDate3.getFullYear();
const monthhp3 = String(currentDate3.getMonth() + 1).padStart(2, '0');
const dayhp3 = String(currentDate3.getDate()).padStart(2, '0');
const formattedCurrentDate3 = `${yearhp3}-${monthhp3}-${dayhp3}`;
const initiator3 = await getItem('initiate3');
let dayscounter3 = parseInt(await getItem('dayscounter3')) || 0;

if (formattedCurrentDate3 !== storedDate3) {
  setItem('lastUpdatedDate3', formattedCurrentDate3);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator3 !== '1') {
      setItem('initiate3', '1');
      console.log('initiator', initiator3);
      dayscounter3 += 1;
      setItem('dayscounter3', JSON.stringify(dayscounter3));
      setCountdays(await getItem('dayscounter3'))
      console.log(dayscounter3);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter3 += 1;
      setItem('dayscounter3', JSON.stringify(dayscounter3));
      setCountdays(await getItem('dayscounter3'))
      console.log(dayscounter3);
      console.log(countdays);
    }
  }
}
      break;
    case '4':
      const currentDate4 = new Date();
      const storedDate4 = await getItem('lastUpdatedDate4');
      const yearhp4 = currentDate4.getFullYear();
      const monthhp4 = String(currentDate4.getMonth() + 1).padStart(2, '0');
      const dayhp4 = String(currentDate4.getDate()).padStart(2, '0');
      const formattedCurrentDate4 = `${yearhp4}-${monthhp4}-${dayhp4}`;
      const initiator4 = await getItem('initiate4');
      let dayscounter4 = parseInt(await getItem('dayscounter4')) || 0;
      
      if (formattedCurrentDate4 !== storedDate4) {
        setItem('lastUpdatedDate4', formattedCurrentDate4);
        console.log('hahahhaahahahaha')
        if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
          if (initiator4 !== '1') {
            setItem('initiate4', '1');
            console.log('initiator', initiator4);
            dayscounter4 += 1;
            setItem('dayscounter4', JSON.stringify(dayscounter4));
            setCountdays(await getItem('dayscounter4'))
            console.log(dayscounter4);
            console.log(countdays);
          } else if (date === dayset && month === monthset && year === yearset) {
            dayscounter4 += 1;
            setItem('dayscounter4', JSON.stringify(dayscounter4));
            setCountdays(await getItem('dayscounter4'))
            console.log(dayscounter4);
            console.log(countdays);
          }
        }
      }
      break;
    case '5':
      const currentDate5 = new Date();
const storedDate5 = await getItem('lastUpdatedDate5');
const yearhp5 = currentDate5.getFullYear();
const monthhp5 = String(currentDate5.getMonth() + 1).padStart(2, '0');
const dayhp5 = String(currentDate5.getDate()).padStart(2, '0');
const formattedCurrentDate5 = `${yearhp5}-${monthhp5}-${dayhp5}`;
const initiator5 = await getItem('initiate5');
let dayscounter5 = parseInt(await getItem('dayscounter5')) || 0;

if (formattedCurrentDate5 !== storedDate5) {
  setItem('lastUpdatedDate5', formattedCurrentDate5);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator5 !== '1') {
      setItem('initiate5', '1');
      console.log('initiator', initiator5);
      dayscounter5 += 1;
      setItem('dayscounter5', JSON.stringify(dayscounter5));
      setCountdays(await getItem('dayscounter5'))
      console.log(dayscounter5);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter5 += 1;
      setItem('dayscounter5', JSON.stringify(dayscounter5));
      setCountdays(await getItem('dayscounter5'))
      console.log(dayscounter5);
      console.log(countdays);
    }
  }
}

      break;
    case '6':
      const currentDate6 = new Date();
const storedDate6 = await getItem('lastUpdatedDate6');
const yearhp6 = currentDate6.getFullYear();
const monthhp6 = String(currentDate6.getMonth() + 1).padStart(2, '0');
const dayhp6 = String(currentDate6.getDate()).padStart(2, '0');
const formattedCurrentDate6 = `${yearhp6}-${monthhp6}-${dayhp6}`;
const initiator6 = await getItem('initiate6');
let dayscounter6 = parseInt(await getItem('dayscounter6')) || 0;

if (formattedCurrentDate6 !== storedDate6) {
  setItem('lastUpdatedDate6', formattedCurrentDate6);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator6 !== '1') {
      setItem('initiate6', '1');
      console.log('initiator', initiator6);
      dayscounter6 += 1;
      setItem('dayscounter6', JSON.stringify(dayscounter6));
      setCountdays(await getItem('dayscounter6'))
      console.log(dayscounter6);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter6 += 1;
      setItem('dayscounter6', JSON.stringify(dayscounter6));
      setCountdays(await getItem('dayscounter6'))
      console.log(dayscounter6);
      console.log(countdays);
    }
  }
}
      break;
    case '7':
      const currentDate7 = new Date();
const storedDate7 = await getItem('lastUpdatedDate7');
const yearhp7 = currentDate7.getFullYear();
const monthhp7 = String(currentDate7.getMonth() + 1).padStart(2, '0');
const dayhp7 = String(currentDate7.getDate()).padStart(2, '0');
const formattedCurrentDate7 = `${yearhp7}-${monthhp7}-${dayhp7}`;
const initiator7 = await getItem('initiate7');
let dayscounter7 = parseInt(await getItem('dayscounter7')) || 0;

if (formattedCurrentDate7 !== storedDate7) {
  setItem('lastUpdatedDate7', formattedCurrentDate7);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator7 !== '1') {
      setItem('initiate7', '1');
      console.log('initiator', initiator7);
      dayscounter7 += 1;
      setItem('dayscounter7', JSON.stringify(dayscounter7));
      setCountdays(await getItem('dayscounter7'))
      console.log(dayscounter7);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter7 += 1;
      setItem('dayscounter7', JSON.stringify(dayscounter7));
      setCountdays(await getItem('dayscounter7'))
      console.log(dayscounter7);
      console.log(countdays);
    }
  }
}
      break;
    case '8':
      const currentDate8 = new Date();
const storedDate8 = await getItem('lastUpdatedDate8');
const yearhp8 = currentDate8.getFullYear();
const monthhp8 = String(currentDate8.getMonth() + 1).padStart(2, '0');
const dayhp8 = String(currentDate8.getDate()).padStart(2, '0');
const formattedCurrentDate8 = `${yearhp8}-${monthhp8}-${dayhp8}`;
const initiator8 = await getItem('initiate8');
let dayscounter8 = parseInt(await getItem('dayscounter8')) || 0;

if (formattedCurrentDate8 !== storedDate8) {
  setItem('lastUpdatedDate8', formattedCurrentDate8);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator8 !== '1') {
      setItem('initiate8', '1');
      console.log('initiator', initiator8);
      dayscounter8 += 1;
      setItem('dayscounter8', JSON.stringify(dayscounter8));
      setCountdays(await getItem('dayscounter8'))
      console.log(dayscounter8);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter8 += 1;
      setItem('dayscounter8', JSON.stringify(dayscounter8));
      setCountdays(await getItem('dayscounter8'))
      console.log(dayscounter8);
      console.log(countdays);
    }
  }
}
      break;
    case '9':
      const currentDate9 = new Date();
const storedDate9 = await getItem('lastUpdatedDate9');
const yearhp9 = currentDate9.getFullYear();
const monthhp9 = String(currentDate9.getMonth() + 1).padStart(2, '0');
const dayhp9 = String(currentDate9.getDate()).padStart(2, '0');
const formattedCurrentDate9 = `${yearhp9}-${monthhp9}-${dayhp9}`;
const initiator9 = await getItem('initiate9');
let dayscounter9 = parseInt(await getItem('dayscounter9')) || 0;

if (formattedCurrentDate9 !== storedDate9) {
  setItem('lastUpdatedDate9', formattedCurrentDate9);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator9 !== '1') {
      setItem('initiate9', '1');
      console.log('initiator', initiator9);
      dayscounter9 += 1;
      setItem('dayscounter9', JSON.stringify(dayscounter9));
      setCountdays(await getItem('dayscounter9'))
      console.log(dayscounter9);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter9 += 1;
      setItem('dayscounter9', JSON.stringify(dayscounter9));
      setCountdays(await getItem('dayscounter9'))
      console.log(dayscounter9);
      console.log(countdays);
    }
  }
}
      break;
    case '10':
      const currentDate10 = new Date();
const storedDate10 = await getItem('lastUpdatedDate10');
const yearhp10 = currentDate10.getFullYear();
const monthhp10 = String(currentDate10.getMonth() + 1).padStart(2, '0');
const dayhp10 = String(currentDate10.getDate()).padStart(2, '0');
const formattedCurrentDate10 = `${yearhp10}-${monthhp10}-${dayhp10}`;
const initiator10 = await getItem('initiate10');
let dayscounter10 = parseInt(await getItem('dayscounter10')) || 0;

if (formattedCurrentDate10 !== storedDate10) {
  setItem('lastUpdatedDate10', formattedCurrentDate10);
  console.log('hahahhaahahahaha')
  if ((month >= monthset && year >= yearset) || (month < monthset && year > yearset)) {
    if (initiator10 !== '1') {
      setItem('initiate10', '1');
      console.log('initiator', initiator10);
      dayscounter10 += 1;
      setItem('dayscounter10', JSON.stringify(dayscounter10));
      setCountdays(await getItem('dayscounter10'))
      console.log(dayscounter10);
      console.log(countdays);
    } else if (date === dayset && month === monthset && year === yearset) {
      dayscounter10 += 1;
      setItem('dayscounter10', JSON.stringify(dayscounter10));
      setCountdays(await getItem('dayscounter10'))
      console.log(dayscounter10);
      console.log(countdays);
    }
  }
}
      break;  
  
    default:
      // Handle the case when idbox doesn't match any specific value
      break;
  }

  
  /*
  //get data from sensors
  const connectWebSocket = () => {
    const socket = new WebSocket('ws://192.168.192.94:81');

    socket.onopen = () => {
      console.log('WebSocket connection opened.');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
      setSensorData(data);
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed. Reconnecting...');
      // Attempt to reconnect after 3 seconds
      setTimeout(connectWebSocket, 3000);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      // Attempt to reconnect after 3 seconds
      setTimeout(connectWebSocket, 3000);
    };

    return () => {
      socket.close();
    };
  };

  // Initial WebSocket connection
  connectWebSocket(); 

 */
  }
     

  //data connection
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    turbidity: null,
    phLevel: null,
    ds18b20temp: null,
    lux: null,
  });

  
 
  return( 
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/bg.jpg')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>
          
        </View>

        <View style={styles.middle}>
          <View style={styles.days}>
            <Image style={styles.leaf} source={require('../images/leaf.png')} />
            <View style={styles.textdays}>
              <Text Text style={styles.daysday}>Day {countdays}</Text>
              
            </View>
          </View>          
        </View>
 
        <View style={styles.footer}>
          <Text style={styles.algaetext}>Microalgae</Text>
          <ScrollView>
          <View style={styles.all}>
            
              <View style={styles.part1}>
                <Image style={styles.tempt} source={require('../images/tempt.png')} />
                  <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>Water Temperature</Text>
                    <Text style={styles.temptNum}>{sensorData.ds18b20temp !== null ? sensorData.ds18b20temp.toFixed(2) : null}°C</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>25-30 °C</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.light} source={require('../images/light.png')} />
                <View style={styles.temptText}>
                  <Text style={styles.temperatureText}>Light</Text>
                  <Text style={styles.temptNum}>{sensorData.lux} cd</Text>
                  <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>200-400 µmol photons/(m²·s)</Text>
                    </View>
                </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.light} source={require('../images/turbidity.png')} />
                <View style={styles.temptText}>
                  <Text style={styles.temperatureText}>Turbidity</Text>
                  <Text style={styles.temptNum}>{sensorData.turbidity} NTU</Text>
                  <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>  0.2 - 2.0% or higher</Text>
                    </View>
                </View>
               
            </View>
              <View style={styles.part1}>
                <Image style={styles.humidity} source={require('../images/humidity.png')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>Humidity</Text>
                    <Text style={styles.temptNum}>{sensorData.humidity} %rh</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>25-30 °C</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.ph} source={require('../images/ph.png')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>ph Level</Text>
                    <Text style={styles.temptNum}>{sensorData.phLevel !== null ? sensorData.phLevel.toFixed(2) : null}</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>6.5-7.5</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.ph} source={require('../images/etempt.png')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>envi. Temperature</Text>
                    <Text style={styles.temptNum}>{sensorData.temperature}°C</Text>
                    <View style={styles.range}>
                      <Text style={styles.normalrange}>Normal Range:</Text>
                      <Text style={styles.normalrange}>25-30 °C</Text>
                    </View>
                  </View>
              </View>
            
            </View>
          </ScrollView>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    //alignItems: 'center',
    //backgroundColor: '#C6F3AA'
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    
  },
  header:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    //backgroundColor:'#B5EA91'
    //backgroundColor:'green'
  },
  logo:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: hp(1),
    //marginBottom: hp(2),
    width: wp(50),
    height: hp(10),
  },
  plus:{
    resizeMode:'contain',
    //display:'flex',
    marginLeft: hp(15),
    //backgroundColor:'orange',
    width:wp(12),
    height:hp(5),
  },
  middle:{
    flex: 3,
    //backgroundColor: 'tomato',
    alignItems:'center',
  },
  leaf:{
    resizeMode:'contain',
    alignSelf:'center',
    //marginTop: hp(8),
    //marginLeft: hp(1),
    //marginBottom: hp(2),
    width: wp(50),
    height: hp(26),
  },
  days:{
    //position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    //borderWidth: 1,
    //borderColor:'black',
    //backgroundColor:'blue'
  },
  textdays:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    //borderWidth: 1,
    //borderColor:'black',
    width: wp(30),
    height:hp(20),
    //backgroundColor:'yellow'
    flexDirection:'row'
  },
  daysnum:{
    fontSize: hp(8),
    fontWeight: 'bold'
  },
  daysday:{
    fontSize:hp(5),
    //marginBottom:hp(2)
  },
  startTime:{
    flexDirection:'row'
  },
  

  footer:{
    flex: 8,
    //backgroundColor: 'blue',
    //backgroundColor: '#A5E279',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginBottom:hp(2)
  },
  all:{
    //flexDirection:'row'
  },
  section1:{ 
    flex: 1, 
    //backgroundColor:'blue',
  },
  section2:{
    flex: 1,
    //backgroundColor:'orange'
  },
  part1:{
    flexDirection:'row',
    backgroundColor: '#A5E279',
    //borderWidth: hp(1),
    //borderColor: 'black',
    borderRadius: 30,
    height: hp(15),
    alignItems: 'center',
    margin: hp(0.5)
  },
  algaetext:{
    fontWeight:'bold',
    fontSize: hp(3.5),
    paddingTop: hp(1),
    paddingLeft: hp(2),
    paddingBottom: hp(1),
    //backgroundColor:'blue'
    //borderWidth: 1,
    //borderColor:'#A5E279'
  },
  tempt:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: hp(1),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
    //borderWidth: 1,
    //borderColor:'black'
  },
  temptText:{
    marginLeft: hp(2),
    //marginTop:hp(1),
  },
  temperatureText:{
    //fontWeight: 'bold',
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
    //marginTop: hp(8),
    marginLeft: hp(1),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
    //borderWidth: 1,
    //borderColor:'black'
  },
  humidity:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: hp(1),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
  },
  ph:{
    resizeMode:'contain',
    //alignSelf: 'flex-end',
    //marginTop: hp(8),
    marginLeft: hp(1),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
  },
})