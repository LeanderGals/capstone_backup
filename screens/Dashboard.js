import {View, Text, StyleSheet, Dimensions, Image, Alert, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, FlatList} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../utils/asyncStorage.js';
import { clearAsyncStorage } from '../utils/asyncStorage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';



const{width, height} = Dimensions.get('window');

const Dashboard = () => { 
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const AlertPage = async ()=>{
    navigation.push('Alert');
  }
  const customscreen = async ()=>{
    navigation.push('Custom');
  } 

  const HomePage = async ()=>{
    navigation.navigate('HomePage')
  }


  const [aquariumData, setAquariumData] = useState([]);

  useEffect(() => {
    retrieveAndSetAquariumData();
    addAquarium()
    //clearAsyncStorage()
    //resetAquariumData() 
  }, []);
 
  const retrieveAndSetAquariumData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('aquariumData');
      if (storedData !== null) {
        setAquariumData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const saveAquariumData = async (data) => {
    try {
      await AsyncStorage.setItem('aquariumData', JSON.stringify(data));
      console.log(aquariumData)
    } catch (error) {
      console.error('Error saving data:', error); 
    }
  };

  const addAquarium = async () => {
    try { 
      const newData = {
        idbox: await getItem('idbox'),
        aquariumName: await getItem('aquariumname'),
        waterLevel: await getItem('waterINgallon'),
        microalgaeType: await getItem('microalgaetype'),
        cultivationDate: await getItem('datecultivate'),
      };
  
      // Get the current aquarium data from AsyncStorage
      const storedData = await AsyncStorage.getItem('aquariumData');
      let currentAquariumData = [];
  
      if (storedData !== null) {
        currentAquariumData = JSON.parse(storedData);
  
        // Check if the new data already exists in the array
        const exists = currentAquariumData.some(
          (data) =>
            data.aquariumName === newData.aquariumName &&
            data.waterLevel === newData.waterLevel &&
            data.microalgaeType === newData.microalgaeType &&
            data.cultivationDate === newData.cultivationDate
        );
  
        // If data doesn't exist, add it to the array
        if (!exists) {
          currentAquariumData.push(newData);
  
          // Update AsyncStorage with the updated array
          await AsyncStorage.setItem('aquariumData', JSON.stringify(currentAquariumData));
  
          // Update the state with the new array including the new aquarium data
          setAquariumData(currentAquariumData);
        } else {
          console.log('Data already exists');
        }
      } else {
        // If no stored data, add the new data as the first entry
        currentAquariumData.push(newData);
        await AsyncStorage.setItem('aquariumData', JSON.stringify(currentAquariumData));
        setAquariumData(currentAquariumData);
      }
    } catch (error) {
      console.error('Error adding aquarium:', error);
    }
  };
  console.log(aquariumData)
  
  const renderAquariums = () => {
    const filteredAquariumData = aquariumData.filter(
      (data) =>
        data.aquariumName !== null &&
        data.waterLevel !== null &&
        data.waterLevel !== '' &&
        data.microalgaeType !== null &&
        data.microalgaeType !== '' &&
        data.cultivationDate !== null &&
        data.cultivationDate !== ''
    );
    const navigateToHomePage = async (idboxValue) => {
      try {
        // Save the idboxValue to AsyncStorage before navigating to HomePage
        await AsyncStorage.setItem('idboxValue', idboxValue.toString());
        navigation.navigate('HomePage', { idbox: idboxValue }); // Pass idbox as a route parameter
      } catch (error) {
        console.error('Error saving idbox value:', error);
      }
    };
    return filteredAquariumData.map((data, index) => (
      <TouchableOpacity style={styles.aquarium1} key={index} onPress={() => navigateToHomePage(data.idbox)}>
        <Image style={styles.a1} source={require('../images/turbidity.png')} />
        <View style={styles.aqua}>
          <Text style={styles.details}>
            Aquarium Name: <Text style={styles.details1}>{data.aquariumName}</Text>
          </Text>
          <Text style={styles.details}>
            Gallons: <Text style={styles.details1}>{data.waterLevel} gal</Text>
          </Text>
          <Text style={styles.details}>
            Microalgae: <Text style={styles.details1}>{data.microalgaeType}</Text>
          </Text>
          <Text style={styles.details}>
            Cultivation Date: <Text style={styles.details1}>{data.cultivationDate}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    ));
  };
  

  const resetAquariumData = async () => {
    try {
      // Update the state to an empty array
      setAquariumData([]);
  
      // Update AsyncStorage with an empty array
      await AsyncStorage.setItem('aquariumData', JSON.stringify([]));
    } catch (error) {
      console.error('Error resetting aquarium data:', error);
    }
  };
  
  const removeTodo = (id) => {
    const updatedTodos = allitems.filter((todo) => todo.id !== id);
    setAllItems(updatedTodos);
    saveTodoItems(updatedTodos); // Save updated todo items to AsyncStorage
  };
  
  //console.log('1 ', aquariumData) 

  
  
  return( 
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/bg.jpg')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={AlertPage}>
            <Image style={styles.messagebox} source={require('../images/email3.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={customscreen}>
            <Image style={styles.plus} source={require('../images/plus.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.middle}>
            <View style={styles.topName}>
              <Text style={styles.myAquarium}>My Aquariums</Text>
            </View>
            <ScrollView> 
            <View style={styles.section1}>
              {renderAquariums()}  
            </View>                
            </ScrollView>
        </View> 

        <View style={styles.footer}>

        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Dashboard


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
  messagebox:{
    resizeMode:'contain',
    marginLeft: wp(16),
    //backgroundColor:'orange',
    width:wp(12),
    height:hp(5),
  },
  plus:{
    resizeMode:'contain',
    //display:'flex',
    marginLeft: hp(2),
    //backgroundColor:'orange',
    width:wp(12),
    height:hp(5),
  },
  topName:{
    backgroundColor: 'rgba(165,226,121, .8)',
    height:hp(5),
    width: wp(70),
    marginBottom:hp(1),
    borderRadius: 15,
    alignSelf:'center',
    justifyContent:'center',
  },
  middle:{
    flex: 15,
    //backgroundColor: 'tomato',
  },
  myAquarium:{
    alignSelf:'center',
    fontSize:hp(2.5),
    marginBottom:hp(1)
  },
  aqua:{
    flexDirection:'column',
    marginLeft: wp(5)
    //backgroundColor:'blue'
  },
  section1:{
    //flex: 1,
    alignItems:'center',
    //backgroundColor:'blue',
  },
  all:{
    flexDirection:'row'
  },
  aquarium1:{
    flexDirection: 'row',
    margin:hp(0.5),
    marginBottom:hp(1),
    //borderWidth: 1,
    //borderColor:'black',
    width: wp(95),
    height: hp(20),
    alignItems:'center',
    //backgroundColor:'white',
    borderRadius: 20,
    backgroundColor: 'rgba(165,226,121,0.5)',
    borderWidth: hp(0.5),
    borderColor: 'rgba(165,226,121,1)',
    //elevation: hp(1)
  },
  a1:{
    resizeMode:'contain',
    //borderWidth: 1,
    //borderColor:'black',
    width: wp(30),
    height: hp(20),
    marginLeft: wp(3)
  },
  details:{
    fontSize: hp(1.8),
    
  },
  details1:{
    fontSize: hp(1.8),
    fontWeight:'bold'
  },

  footer:{
    flex: 1,
    //backgroundColor: 'blue',
    backgroundColor: '#A5E279',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  
})