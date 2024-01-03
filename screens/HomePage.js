import {View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, ActivityIndicator} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
//import WebSocket from 'react-native-websocket';
import moment from 'moment';
import { getItem, setItem } from '../utils/asyncStorage';
import NetInfo from '@react-native-community/netinfo';


const{width, height} = Dimensions.get('window');

const HomePage = ({route}) =>{
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const LogsPage = async ()=>{
    navigation.push('Logs');
  }

  //usestates
  //const [currentDate, setCurrentDate] = useState('');
  const [countdays, setCountdays] = useState('');
  //const [hasRun, setHasRun] = useState(false);
 
 
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
        // Handle the case when idbox doesn't match any specific value
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


  const runSwitchCase = (homeidbox) => {
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
        // Handle the case when idbox doesn't match any specific value
        break;
    }
  };
  

  const displaydays = async () => {
    
    //day counter
    var date = new Date().getDate(); //Current Day
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear();
    
    console.log('current date',month, date, year) 

    const monthset = parseInt(await getItem('homemonth'));
    const dayset = parseInt(await getItem('homeday'));
    const yearset = parseInt(await getItem('homeyear'));
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
    
    

    const handleHomeIdBox = async (id) => {
      const currentDate = new Date();
      const storedDate = await getItem(`lastUpdatedDate${id}`);
      const yearhp = currentDate.getFullYear();
      const monthhp = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dayhp = String(currentDate.getDate()).padStart(2, '0');
      const formattedCurrentDate = `${yearhp}-${monthhp}-${dayhp}`;
      let initiator = parseInt(await getItem(`initiate${id}`));
      let dayscounter = parseInt(await getItem(`dayscounter${id}`)) || 0;

      if (month === monthset && date === dayset && year === yearset) {
        setItem(`initiate${id}`, '1');
        initiator = parseInt(await getItem(`initiate${id}`));
      }

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
        // Handle the case when idbox doesn't match any specific value
        break;
    }
      }
      

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
            // Reconnect after 3 seconds
            setTimeout(connectWebSocket, 3000);
            alert( 'WebSocket connection closed. Reconnecting...')
          };
  
          socket.onerror = (error) => {
            console.error('WebSocket error:', error);
            // Reconnect after 3 seconds
            setTimeout(connectWebSocket, 3000);
            alert(`WebSocket error: ${JSON.stringify(error)}`);
          };
        } catch (error) {
          console.error('Error connecting to WebSocket:', error);
          alert(`Error connecting to WebSocket: ${JSON.stringify(error)}`);
        }
      };
    
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
          alert('Error checking network status.'); // General error message for users
        }
    
        return null; // Or a fallback state object
      }
      
    };
    
    const alertUser = (data) => {
      if(data){
        const tempthp = data.temperature !== null ? parseInt(data.temperature) : 0;
        const humhp = data.humidity !== null ? parseInt(data.humidity) : 0;
        const turhp = data.turbidity !== null ? parseInt(data.turbidity) : 0;
        const phhp = data.phLevel !== null ? parseInt(data.phLevel) : 0;
        const dshp = data.ds18b20temp !== null ? parseInt(data.ds18b20temp) : 0;
        const luxhp = data.lux !== null ? parseInt(data.lux) : 0;
      //console.log(luxhp)  
      
      if(dshp < 25){
        setTemptAlert('Too Cold');
        setTemptAlertColor('#EE4B2B');
        console.log('tmine1')
      }  
      else if(dshp > 30){
        setTemptAlert('Too Hot');
        setTemptAlertColor('#EE4B2B');
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
        console.log('mine1')
      }
      else if(luxhp > 2000){
        setLightAlert('Too Bright');
        setLightAlertColor('#EE4B2B');
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
        console.log('mine1')
      }
      else if(turhp > 200){
        setTurbAlert('Too High Turbidity');
        setTurbAlertColor('#EE4B2B');
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
        console.log('mine1')
      }
      else if(humhp > 80){
        sethumAlert('Too High Humidity');
        sethumAlertColor('#EE4B2B');
        console.log('mine2')
      }
      else{
        sethumAlert('Normal');
        sethumAlertColor('#9cd274');
        console.log('mine3')
      }
      if(phhp < 7){
        setPhAlert('Too Acidic');
        setPhAlertColor('#EE4B2B');
        console.log('mine1')
      }
      else if(phhp > 8){
        setPhAlert('Too Basic');
        setPhAlertColor('#EE4B2B');
        console.log('mine2')
      }
      else{
        setPhAlert('Normal');
        setPhAlertColor('#9cd274');
        console.log('mine3')
      }
      if(tempthp < 25){
        setEnviemptAlert('Too Cold');
        setEnviemptAlertColor('#EE4B2B');
        console.log('emine1')
      }  
      else if(tempthp > 30){
        setEnviemptAlert('Too Hot');
        setEnviemptAlertColor('#EE4B2B');
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
    checkNetworkStatus();
    connectWebSocket();
    alertUser();
    }, []); 
    
  
  return( 
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={LogsPage}>
            <Image style={styles.messagebox} source={require('../images/log4.png')} />
          </TouchableOpacity>
          
        </View>

        <View style={styles.middle}> 
          <View style={styles.daysandrestart}>
          <View style={styles.days}>
            <Image style={styles.leaf} source={require('../images/leaf.png')} />
            <View style={styles.textdays}>
              <Text Text style={styles.daysday}>Day {countdays}</Text>
            </View>
          </View> 
          <View style={styles.restart}> 
            <TouchableOpacity onPress={handleRestartCounter} style={styles.start}>
              <Image style={styles.getStarted} source={require('../images/refresh.png')}/>
            </TouchableOpacity>
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
                      <Text style={styles.normalrange}>20-30 °C</Text>
                    </View>
                  </View>
                  <View style={[styles.part2, {backgroundColor: temptAlertColor, }]}>
                    <Text style={styles.alertText}>{temptAlert}</Text>
                  </View>
              </View>
              <View style={styles.part1}>
                <Image style={styles.light} source={require('../images/light.png')} />
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
                <Image style={styles.light} source={require('../images/turbidity.png')} />
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
                <Image style={styles.humidity} source={require('../images/humidity.png')} />
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
                <Image style={styles.ph} source={require('../images/ph.png')} />
                <View style={styles.temptText}>
                    <Text style={styles.temperatureText}>ph Level</Text>
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
                <Image style={styles.ph} source={require('../images/etempt.png')} />
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
  messagebox:{
    resizeMode:'contain',
    marginLeft: wp(25),
    //backgroundColor:'orange',
    width:wp(12),
    height:hp(8),
  },
  middle:{
    flex: 3,
    //backgroundColor: 'tomato',
    alignContent:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  leaf:{
    resizeMode:'contain',
    //alignSelf:'center',
    //backgroundColor:'orange',
    //marginTop: hp(8),
    //marginLeft: hp(1),
    //marginBottom: hp(2),
    width: wp(50),
    height: hp(26),
  },
  daysandrestart:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    marginLeft:wp(15)
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
    //alignItems:'center',
    //borderWidth: 1,
    //borderColor:'black',
    width: wp(30),
    height:hp(20),
    //backgroundColor:'yellow',
    flexDirection:'row'
  },
  daysnum:{
    fontSize: hp(8),
    fontWeight: 'bold'
  },
  daysday:{
    fontSize:hp(5),
    alignSelf:'center'
    //marginBottom:hp(2)
  },
  startTime:{
    flexDirection:'row'
  },
  restart:{
    //backgroundColor:'yellow'
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
    backgroundColor: '#90ee90',
    //backgroundColor: 'blue',
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
    //backgroundColor: '#A5E279',
    //backgroundColor:'yellow',
    justifyContent:'center',
    //marginLeft: wp(8),
    
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
    //backgroundColor:'blue'
    //borderWidth: 1,
    //borderColor:'#A5E279'
  },
  tempt:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
    //borderWidth: 1,
    //borderColor:'black'
  },
  temptText:{
    marginLeft: wp(4),
    height: hp(15),
    //marginTop:hp(1),
    //backgroundColor: 'red',
    width:wp(45),
    justifyContent:'center'
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
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
    //borderWidth: 1,
    //borderColor:'black'
  },
  humidity:{
    resizeMode:'contain',
    //marginTop: hp(8),
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
  },
  ph:{
    resizeMode:'contain',
    //alignSelf: 'flex-end',
    //marginTop: hp(8),
    marginLeft: wp(2),
    marginBottom: hp(1),
    width: wp(12),
    height: hp(10),
  },
})