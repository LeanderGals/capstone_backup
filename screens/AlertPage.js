import {View, Text, StyleSheet, Dimensions, TextInput, Image, Alert, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, ActivityIndicator} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import moment from 'moment';

const{width, height} = Dimensions.get('window');

export default function Custom(){ 
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const customscreen = async ()=>{
    navigation.push('Custom');
  }
  const [aquariumName1, setaquariumname] = useState('');
  const [waterLevel, setwaterlevel] = useState('');
  //console.log(aquariumName)
  //console.log(waterLevel)


  const data = [
    { label: 'Chlorella vulgaris', value: 'Chlorella vulgaris' },
    { label: 'Cyanobacteria', value: 'Cyanobacteria' },
    { label: 'Spirulina', value: 'Spirulina' },
    { label: 'Scenedesmus obliquus', value: 'Scenedesmus obliquus' },
    { label: 'Isochrysis galbana', value: 'Isochrysis galbana' },
    { label: 'Other...', value: 'N/A' },
  ];
 
  const dateMonth = [
    { label: 'January', value: 'Jan.' },
    { label: 'Febuary', value: 'Feb.' },
    { label: 'March', value: 'Mar.' },
    { label: 'April', value: 'Apr.' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'Aug.' },
    { label: 'September', value: 'Sept.' },
    { label: 'October', value: 'Oct.' },
    { label: 'November', value: 'Nov.' },
    { label: 'December', value: 'Dec.' },
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
    {label:'2023', value:'2023'},
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

  const [value, setValue] = useState(null);

  const [idnum, setIdnum] = useState('0');
  const [month, setmonth] = useState('');
  const [day, setday] = useState('');
  const [year, setyear] = useState('');  

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!aquariumName1) {
      alert('Please Enter Aquarium Name');
      return;
    }
    //Check for the Email TextInput
    if (!waterLevel) {
      alert('Please Enter the Water Level');
      return;
    }
    if (!value) {
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
    
    if(idnum == 0){
      setIdnum('1')
    }
    if(idnum == 1){
      setIdnum('2')
    }
    if(idnum == 2){
      setIdnum('3')
    }
    if(idnum == 3){
      setIdnum('4')
    }
    if(idnum == 4){
      setIdnum('5')
    }
   

    
    
    navigation.navigate('Dashboard', { 
      aquariumName1, waterLevel, value, idnum, month, day, year})
  };
  
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
          <Text style={styles.aquariumName}>Aquarium Name:</Text>
          <TextInput 
            required
            style={styles.aquariumNameinput}
            onChangeText={setaquariumname}
            value={aquariumName1}
            placeholder='Name of Aquarium'
            maxLength={12}
          />
          <Text style={styles.aquariumName}>Water Level:</Text>
          <View style={styles.amtWater}>
            <TextInput 
              style={styles.amountWater}
              onChangeText={setwaterlevel}
              value={waterLevel}
              placeholder='Amount of Water in gallon'
              maxLength={3}
              keyboardType="numeric"
            />
            <Text style={styles.gallon}>gal</Text>
          </View>
          <Text style={styles.aquariumName}>Microalgae Type:</Text>
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
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            )}
          />


          <Text style={styles.aquariumName}>Date of Cultivation:</Text>
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
          <View style={styles.saveButton}>
          <TouchableOpacity onPress={checkTextInput}style={styles.start} >
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
          </View>
        </View>


        <View style={styles.footer}>


        </View>
        
        </ImageBackground>
    </SafeAreaView>
  )
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
    
  },
  header:{
    flex: 2,
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
    flex: 15,
    //backgroundColor: 'tomato',
    //alignItems:'center',
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
    //backgroundColor:'orange',
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
    //backgroundColor:'#B5EA91'
  },
  start: {
    backgroundColor: '#34d399',
    width: wp(80),
    height: hp(7),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: hp(25) 
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
    fontSize: hp(2),
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