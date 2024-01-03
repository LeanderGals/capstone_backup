import {View, Text, StyleSheet, Dimensions, Image, Alert, Modal, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, FlatList} from 'react-native'
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
  const LogsPage = async ()=>{
    navigation.push('Logs');
  }
  const customscreen = async ()=>{
    navigation.push('Custom');
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
        concentration: await getItem('concentration'),
        microalgaeType: await getItem('microalgaetype'),
        cultivationDate: await getItem('datecultivate'),
        webaddress: await getItem('websocketip')
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
            data.concentration === newData.concentration &&
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


  const [selectedAquariumId, setSelectedAquariumId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = (aquariumId) => {
      setSelectedAquariumId(aquariumId);
      setModalVisible(!modalVisible);
    };
  
    const deleteAquarium = async (aquariumId) => {
      try {
        const storedData = await AsyncStorage.getItem('aquariumData');
        let currentAquariumData = [];
  
        if (storedData !== null) {
          currentAquariumData = JSON.parse(storedData);
  
          // Filter out the aquarium box to be deleted based on its ID
          const updatedAquariumData = currentAquariumData.filter(
            (data) => data.idbox !== aquariumId
          );
  
          // Update AsyncStorage with the updated data (without the deleted box)
          await AsyncStorage.setItem(
            'aquariumData',
            JSON.stringify(updatedAquariumData)
          );
  
          // Update the state with the updated data (refresh the list)
          setAquariumData(updatedAquariumData);
        }
      } catch (error) {
        console.error('Error deleting aquarium box:', error);
      }
    };


  const renderAquariums = () => {
    const filteredAquariumData = aquariumData.filter(
      (data) =>
        data.aquariumName !== null &&
        data.waterLevel !== null &&
        data.waterLevel !== '' &&
        data.concentration !== null &&
        data.concentration !== '' &&
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
        <Image style={styles.a1} source={require('../images/aquariumdp.gif')} />
        <View style={styles.aqua}>
          <Text style={styles.details}>
            Aquarium Name: <Text style={styles.details1}>{data.aquariumName}</Text>
          </Text>
          <Text style={styles.details}>
            Gallons: <Text style={styles.details1}>{data.waterLevel} gal</Text>
          </Text>
          <Text style={styles.details}>
            Concentration: <Text style={styles.details1}>{data.concentration}</Text>
          </Text>
          <Text style={styles.details}>
            Microalgae: <Text style={styles.details1}>{data.microalgaeType}</Text>
          </Text>
          <Text style={styles.details}>
            Cultivation Start: <Text style={styles.details1}>{data.cultivationDate}</Text>
          </Text>   
        </View>
        <View style={styles.dotsdp}>
          <TouchableOpacity onPress={() => toggleModal(data.idbox)}>
            <Image style={styles.threedots} source={require('../images/menu.png')} />
          </TouchableOpacity>
        </View>


 
      {/* Popup Menu Modal */}
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible && selectedAquariumId === data.idbox}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOuter}
            activeOpacity={1}
            onPress={() => setModalVisible(false)} // Close modal when tapping outside the choices
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => deleteAquarium(data.idbox)}>
                  <Text style={styles.menuItem}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.menuItem}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      
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
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
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
  plus:{
    resizeMode:'contain',
    //display:'flex',
    marginLeft: hp(15),
    //backgroundColor:'orange',
    width:wp(12),
    height:hp(7),
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
    justifyContent:'center',
    fontSize:hp(2.5),
    marginBottom:hp(1)
  },
  aqua:{
    flexDirection:'column',
    //marginLeft: wp(5),
    //backgroundColor:'blue',
    height:hp(20),
    width:wp(45),
    justifyContent:'center'

  },
  dotsdp:{
    //backgroundColor:'yellow',
    height:hp(20),
    width:wp(10)

  },
  threedots:{
    width:wp(3),
    height:hp(3),
    //backgroundColor:'yellow',
    marginLeft: wp(3),
    marginTop: hp(14)
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
    backgroundColor: 'rgba(165,226,121,0.6)',
    borderWidth: hp(0.5),
    borderColor: 'rgba(165,226,121,1)',
    //elevation: hp(1)
  },
  a1:{
    resizeMode:'contain',
    //borderWidth: 1,
    //borderColor:'black',
    width: wp(38),
    height: hp(30),
    //marginLeft: wp(3)
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
  modalOuter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black color
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: hp(1),
    borderRadius: 10,
    elevation: 5,
    position: 'absolute',
  },

  menuItem: {
    fontSize: 18,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
  },
  
})