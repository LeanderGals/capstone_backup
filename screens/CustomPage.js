import {View, Text, StyleSheet, Dimensions, TextInput, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, ScrollView, ImageBackground, Modal, Button, StatusBar, ActivityIndicator} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { setItem, getItem } from '../utils/asyncStorage';





const{width, height} = Dimensions.get('window');

const Custom = ({}) => {
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const DashboardScreen = async ()=>{
    navigation.push('Dashboard');
  }
  const [aquariumName1, setaquariumname1] = useState('');
  const [waterLevel, setwaterlevel] = useState('');
  const [microalgae, setmicroalgae] = useState(null);
  const [concentration, setconcentration] = useState(null);
  const [idnum, setIdnum] = useState('0');
  const [month, setmonth] = useState('');
  const [day, setday] = useState('');
  const [year, setyear] = useState('');  
  const [userdate1, setuserdate1] = useState(''); 
  const [websocketip, setwebsocketip] = useState('');


  const data = [
    { label: 'Chlorella vulgaris', value: 'Chlorella vulgaris' },
    { label: 'Cyanobacteria', value: 'Cyanobacteria' },
    { label: 'Spirulina', value: 'Spirulina' },
    { label: 'Scenedesmus obliquus', value: 'Scenedesmus obliquus' },
    { label: 'Isochrysis galbana', value: 'Isochrysis galbana' },
    { label: 'Other...', value: 'N/A' },
  ];
 
  const dateMonth = [
    { label: 'January', value: '1' },
    { label: 'Febuary', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];


  const dateDay = [
    {label:'1', value:'1'},
    {label:'2', value:'2'},
    {label:'3', value:'3'},
    {label:'4', value:'4'},
    {label:'5', value:'5'},
    {label:'6', value:'6'},
    {label:'7', value:'7'},
    {label:'8', value:'8'},
    {label:'9', value:'9'},
    {label:'10', value:'10'},
    {label:'11', value:'11'},
    {label:'12', value:'12'},
    {label:'13', value:'13'},
    {label:'14', value:'14'},
    {label:'15', value:'15'},
    {label:'16', value:'16'},
    {label:'17', value:'17'},
    {label:'18', value:'18'},
    {label:'19', value:'19'},
    {label:'20', value:'20'},
    {label:'21', value:'21'},
    {label:'22', value:'22'},
    {label:'23', value:'23'},
    {label:'24', value:'24'},
    {label:'25', value:'25'},
    {label:'26', value:'26'},
    {label:'27', value:'27'},
    {label:'28', value:'28'},
    {label:'29', value:'29'},
    {label:'30', value:'30'},
    {label:'31', value:'31'},
  ];

  const dateYear = [
    {label:'2024', value:'2024'},
    {label:'2025', value:'2025'},
    {label:'2026', value:'2026'},
    {label:'2027', value:'2027'},
    {label:'2028', value:'2028'},
    {label:'2029', value:'2029'},
    {label:'2030', value:'2030'},
    {label:'2031', value:'2031'},
    {label:'2032', value:'2032'},
    {label:'2033', value:'2033'},
  ];

  const concentration1 = [
    {label:'10%', value:'10%'},
    {label:'20%', value:'20%'},
    {label:'30%', value:'30%'},
    {label:'40%', value:'40%'},
    {label:'50%', value:'50%'},
    {label:'60%', value:'60%'},
    {label:'70%', value:'70%'},
    {label:'80%', value:'80%'},
    {label:'90%', value:'90%'},
    {label:'100%', value:'100%'},
  ];

  const checkTextInput = async () => {
    const check10 = parseInt(await getItem('idbox'))
    if(check10 > 9){
      Alert.alert(
        'Limited Cultivation',
        'You already have 10 aquariums currently in cultivation. You cannot add anymore.',
        [
          {
            text: 'OK',
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
    }
    else{

    if (!aquariumName1) {
      alert('Please Enter Aquarium Name');
      return;
    }
    if (!waterLevel || waterLevel == 0) {
      alert('Please Enter the Water Level');
      return;
    }
    if (!concentration) {
      alert('Please Select Concentration');
      return;
    }
    if (!microalgae) {
      alert('Please Select Microalgae');
      return;
    }
    if (!month) {
      alert('Please Select Month');
      return;
    }
    if (!day) {
      alert('Please Select Day');
      return;
    }
    if (!year) {
      alert('Please Select Year');
      return;
    }
    if (!websocketip) {
      alert('Please Enter the IP Address');
      return;
    }

    //setuserdate1(month + '/' + day + '/' + year)
    var date1 = new Date().getDate(); //Current Date
    var month1 = new Date().getMonth() + 1; //Current Month
    var year1 = new Date().getFullYear(); //Current Year
    console.log('h', date1)
    if (parseInt(year) < year1) {
      alert('Please Set The Date In Present Or In Future');
      return;
    }
    
    if (parseInt(year) === year1 && parseInt(month) < month1) {
      alert('Please Set The Date In Present Or In Future');
      return;
    }
    
    if (parseInt(year) === year1 && parseInt(month) === month1 && parseInt(day) < date1) {
      alert('Please Set The Date In Present Or In Future');
      return;
    }


    setItem('aquariumname', aquariumName1)
    setItem('waterINgallon', waterLevel)
    setItem('concentration', concentration)
    setItem('microalgaetype', microalgae)
    setItem('datecultivate', month + '/' + day + '/' + year)
    
    const currentId = parseInt(await getItem('idbox')) || 0;
    
 
    const newId = currentId + 1;

    // Update the ID in AsyncStorage
    setItem('idbox', newId.toString());
    
    const idAsString = currentId.toString();
    console.log('myid', await getItem('idbox'))

    
    switch (idAsString) {
      case '0':
        setItem('aqlogname', aquariumName1)
        setItem('umonth', month);
        setItem('uday', day);   
        setItem('uyear', year);
        setItem('websocketip', websocketip)
        console.log('0myidC', currentId)
        console.log('0myiddddddd', await getItem('idbox'))
        break;
      case '1':
        setItem('aqlogname1', aquariumName1)
        setItem('umonth1', month);
        setItem('uday1', day);
        setItem('uyear1', year);
        setItem('websocketip1', websocketip)
        console.log('1myidC', currentId)
        console.log('1myiddddddd', await getItem('idbox'))
        break;
      case '2':
        setItem('aqlogname2', aquariumName1)
        setItem('umonth2', month);
        setItem('uday2', day);
        setItem('uyear2', year);
        setItem('websocketip2', websocketip)
        console.log('myidddddddhehe', currentId)
        console.log('myidddddddhehe', await getItem('idbox'))
        break;
      case '3':
        setItem('aqlogname3', aquariumName1)
        setItem('umonth3', month);
        setItem('uday3', day);
        setItem('uyear3', year);
        setItem('websocketip3', websocketip)
        break;
      case '4':
        setItem('aqlogname4', aquariumName1)
        setItem('umonth4', month);
        setItem('uday4', day);
        setItem('uyear4', year);
        setItem('websocketip4', websocketip)
        break;
      case '5':
        setItem('aqlogname5', aquariumName1)
        setItem('umonth5', month);
        setItem('uday5', day);
        setItem('uyear5', year);
        setItem('websocketip5', websocketip)
        break;
      case '6':
        setItem('aqlogname6', aquariumName1)
        setItem('umonth6', month);
        setItem('uday6', day);
        setItem('uyear6', year);
        setItem('websocketip6', websocketip)
        break;
      case '7':
        setItem('aqlogname7', aquariumName1)
        setItem('umonth7', month);
        setItem('uday7', day);
        setItem('uyear7', year);
        setItem('websocketip7', websocketip)
        break;
      case '8':
        setItem('aqlogname8', aquariumName1)
        setItem('umonth8', month);
        setItem('uday8', day);
        setItem('uyear8', year);
        setItem('websocketip8', websocketip)
        break;
      case '9':
        setItem('aqlogname9', aquariumName1)
        setItem('umonth9', month)
        setItem('uday9', day)
        setItem('uyear9', year)
        setItem('websocketip9', websocketip)
        break;
      case '10':
        setItem('aqlogname10', aquariumName1)
        setItem('umonth10', month)
        setItem('uday10', day)
        setItem('uyear10', year)
        setItem('websocketip10', websocketip)
        break;
      default:
        break;
    }
  
   
    
    console.log(userdate1)
    DashboardScreen()
  }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
    setModalVisible2(false);
    setModalVisible3(false);
    setModalVisible4(false);
    setModalVisible5(false);
    setModalVisible6(false);
  };


  return( 
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.middle}>
        <View style={styles.aq1}>
          <Text style={styles.aquariumName}>Aquarium Name:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  
                  <Text style={styles.infotext}>Enter the desired name of your aquarium. This will be used in determining your aquarium.</Text>
                 
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
            <TextInput 
              required
              style={styles.aquariumNameinput}
              onChangeText={setaquariumname1}
              value={aquariumName1}
              placeholder='e.g LUMOTech'
              maxLength={12}
            />
     
          <View style={styles.aq1}>
          <Text style={styles.aquariumName}>Water Level:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              setModalVisible2(!modalVisible2);
            }}
          >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.aqsize1}>
                <Text style={styles.infotext}>Enter the amount of water based on the size of your aquarium.</Text>
                <Image source={require('../images/aqsize.png')} style={styles.aqsize}/>
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
          setModalVisible2(true);
        }}
      >
        {/* Replace the source with your icon */}
        <Image
          source={require('../images/info.png')}
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      </View>
          <View style={styles.amtWater}>
            <TextInput 
              style={styles.amountWater}
              onChangeText={setwaterlevel}
              value={waterLevel}
              placeholder='e.g. 150 gallons'
              maxLength={3}
              keyboardType="numeric"
            />
            <Text style={styles.gallon}>gal</Text>
            
          </View>
          <View style={styles.aq1}>
          <Text style={styles.aquariumName}>Concentration:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible6}
            onRequestClose={() => {
              setModalVisible6(!modalVisible6);
            }}
          >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.infotext}>Select how many gallons of starter pack you want to put. </Text>
            <Text style={styles.infotext1}>e.g. If your water level is 10 gallons then your concentration is 70%. 
            So there is 7gallons of microalgae starter pack and 3 gallons of water.</Text>   
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
          setModalVisible6(true);
        }}
      >
        {/* Replace the source with your icon */}
        <Image
          source={require('../images/info.png')}
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      </View>
          <Dropdown
            style={styles. dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={concentration1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Concentration"
            searchPlaceholder="Search..."
            value={concentration}
            onChange={item => {
              setconcentration(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />

        <View style={styles.aq1}>
          <Text style={styles.aquariumName}>Microalgae Type:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => {
              setModalVisible3(!modalVisible3);
            }}
          >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.infotext}>Select the type of microalgae you are culturing.</Text>
            <Text style={styles.infotext1}>e.g. chlorella vulgaris</Text>   
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
          setModalVisible3(true);
        }}
      >
        {/* Replace the source with your icon */}
        <Image
          source={require('../images/info.png')}
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      </View>
          <Dropdown
            style={styles. dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select Microalgae"
            searchPlaceholder="Search..."
            value={microalgae}
            onChange={item => {
              setmicroalgae(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />
        <View style={styles.aq1}>
          <Text style={styles.aquariumName}>Start of Cultivation:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible4}
            onRequestClose={() => {
              setModalVisible4(!modalVisible4);
            }}
          >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.infotext}>Select the date of your cultivation. Cultivation must not be in the past. It should be in the present or future time.</Text>
                 
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
          setModalVisible4(true);
        }}
      >
        {/* Replace the source with your icon */}
        <Image
          source={require('../images/info.png')}
          style={styles.infoIcon}
        />
      </TouchableOpacity>
      </View>
          <View style={styles.date}>
          <Dropdown
            style={styles.datepicker}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dateMonth}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select month"
            searchPlaceholder="Search..."
            value={month}
            onChange={item => {
              setmonth(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />
          <Dropdown
            style={styles.datepicker}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dateDay}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select day"
            searchPlaceholder="Search..."
            value={day}
            onChange={item => {
              setday(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />
          <Dropdown
            style={styles.datepicker}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dateYear}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select year"
            searchPlaceholder="Search..."
            value={year}
            onChange={item => {
              setyear(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />
          
            
            
          </View>

          <View style={styles.aq1}>
          <Text style={styles.aquariumName}>WebSocket IP Adrress:</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible5}
            onRequestClose={() => {
              setModalVisible5(!modalVisible5);
            }}
          >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.infotext}>Enter the ip address located outside of the box. Each box has its own unique ip address.</Text>
              <Text style={styles.infotext1}>e.g. 192.168.130.94</Text>
                 <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                   <Text style={styles.infoclose}>Close</Text>
                 </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>


        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            setModalVisible5(true);
          }}
        >

          <Image
            source={require('../images/info.png')}
            style={styles.infoIcon}
          />
        </TouchableOpacity>
      </View>
          <TextInput 
            required
            style={styles.aquariumNameinput}
            onChangeText={setwebsocketip}
            value={websocketip}
            placeholder='000.000.000.000'
            maxLength={15}
            keyboardType="numeric"
          />



          <View style={styles.saveButton}>
          <TouchableOpacity onPress={checkTextInput}style={styles.start} >
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
          </View>
        </View>


        <View style={styles.footer}>


        </View>
        
        </ImageBackground>
    </View>
  )
}
export default Custom

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  header:{
    flex: 2,
    flexDirection:'row',
    alignItems:'center',
    marginTop: hp(3)
  },
  logo:{
    resizeMode:'contain',
    marginLeft: hp(1),
    width: wp(50),
    height: hp(10),
  },
  plus:{
    resizeMode:'contain',
    marginLeft: hp(15),
    width:wp(12),
    height:hp(5),
  },
  middle:{
    flex: 18,
  },
  aq1:{
    flexDirection:'row'
  },
  aquariumName:{
    fontSize:hp(2.5),
    alignSelf:'flex-start',
    marginTop:hp(2),
    marginLeft:hp(2),
  },
  aquariumNameinput: {
    height: hp(5),
    width: wp(90),
    marginTop:hp(2),
    marginLeft:hp(2),
    borderWidth: 1,
    borderRadius: hp(10),
    paddingLeft: hp(3),
    paddingRight: hp(3),
    fontSize: hp(2)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  infotext:{
    fontSize:hp(1.7),
    alignSelf:'flex-start',
  },
  infotext1:{
    fontSize:hp(1.7),
    paddingTop:hp(1),
    alignSelf:'flex-start',
    fontStyle:'italic'
  },
  infotext2:{
    fontSize:hp(1.7),
    alignSelf:'flex-start',
    paddingTop:hp(1),
    paddingRight:wp(5)
  },
  infotext3:{
    fontSize:hp(1.7),
    alignSelf:'flex-start',
    paddingLeft: wp(5)
  },
  infoclose:{
    fontSize:hp(1.7),
    fontWeight:'bold'
  },
  closeButton: {
    alignSelf: 'center',
    paddingTop: hp(3),
  },
  iconButton: {
    marginTop:hp(2), 
    marginLeft: hp(2),
    
  },
  infoIcon: {
    height: hp(3),
    width:wp(7),
    resizeMode: 'contain',
  },
  aqsize:{
    height: hp(50),
    width:wp(80),
    resizeMode: 'contain',
  },
  aqsize1:{
  },
  amountWater: {
    height: hp(5),
    width: wp(60),
    marginTop:hp(2),
    marginLeft:hp(2),
    borderWidth: 1,
    borderRadius: hp(10),
    paddingLeft: hp(3),
    paddingRight: hp(3),
    fontSize: hp(2)
  },
  amtWater:{
    flexDirection:'row',
  },
  gallon:{
    fontSize:hp(2),
    alignSelf:'flex-start',
    marginTop:hp(4),
    marginLeft:hp(1),
  },
  dropdown: {
    margin: hp(1),
    height: hp(5),
    borderBottomColor: 'gray',
    borderBottomWidth: hp(0.2),
  },
  start: {
    backgroundColor: '#34d399',
    width: wp(80),
    height: hp(7),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: hp(5) 
  },
  save:{
    fontSize: hp(2)
  },
  saveButton:{
    alignItems:'center',
    justifyContent:'flex-end'
  },
  date:{
    flexDirection:'row'
  },
  datepicker:{
    margin: hp(1),
    width: wp(29),
    height: hp(5),
    borderBottomColor: 'gray',
    borderBottomWidth: hp(0.2),
  },
  icon: {
    marginRight: hp(1),
  },
  placeholderStyle: {
    fontSize: wp(3.5),
  },
  selectedTextStyle: {
    fontSize: hp(2),
  },
  iconStyle: {
    width: wp(2),
    height: hp(2),
  },
  inputSearchStyle: {
    height: hp(5),
    fontSize: hp(2),
  },

  footer:{
    flex: 1,
    backgroundColor: 'blue',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor:'#B5EA91'
  },

})