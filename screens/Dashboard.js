import {View, Text, StyleSheet, Dimensions, Image, Alert, Linking, Modal, TouchableWithoutFeedback, TouchableOpacity, ScrollView, ImageBackground, Button, StatusBar, FlatList} from 'react-native'
import React, {useState, useEffect}from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../utils/asyncStorage.js';
import { clearAsyncStorage } from '../utils/asyncStorage.js';
import AsyncStorage from '@react-native-async-storage/async-storage';





const{width, height} = Dimensions.get('window');

const Dashboard = () => { 
  const navigation = useNavigation();

  const aboutscreen = async ()=>{
    navigation.push('About');
  }
  const cultivation = async ()=>{
    navigation.push('Cultivation');
    closeModal()
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

  
  const addAquarium = async () => {
    try { 
      //setting the ip address of each aquarium
      switch (await getItem('idbox')) {
        case '1':
          const ipadd101 = await getItem('websocketip')
          setItem('websocketipaddress', ipadd101)
          break;
        case '2':
          const ipadd102 = await getItem('websocketip1')
          setItem('websocketipaddress', ipadd102)
          break;
        case '3':
          const ipadd103 = await getItem('websocketip2')
          setItem('websocketipaddress', ipadd103)
          break;
        case '4':
          const ipadd104 = await getItem('websocketip3')
          setItem('websocketipaddress', ipadd104)
          break;
        case '5':
          const ipadd105 = await getItem('websocketip4')
          setItem('websocketipaddress', ipadd105)
          break;
        case '6':
          const ipadd106 = await getItem('websocketip5')
          setItem('websocketipaddress', ipadd106)
          break;
        case '7':
          const ipadd107 = await getItem('websocketip6')
          setItem('websocketipaddress', ipadd107)
          break;
        case '8':
          const ipadd108 = await getItem('websocketip7')
          setItem('websocketipaddress', ipadd108)
          break;
        case '9':
          const ipadd109 = await getItem('websocketip8')
          setItem('websocketipaddress', ipadd109)
          break;
        case '10':
          const ipadd110 = await getItem('websocketip9')
          setItem('websocketipaddress', ipadd110)
          break;
        default:
          break;
      }

      const newData = {
        //getting the data from asyncstorage
        idbox: await getItem('idbox'),
        aquariumName: await getItem('aquariumname'),
        waterLevel: await getItem('waterINgallon'),
        concentration: await getItem('concentration'),
        microalgaeType: await getItem('microalgaetype'),
        cultivationDate: await getItem('datecultivate'),
        webaddress: await getItem('websocketipaddress')
      };
  
      // get the current aquarium data from AsyncStorage
      const storedData = await AsyncStorage.getItem('aquariumData');
      let currentAquariumData = [];
  
      if (storedData !== null) {
        currentAquariumData = JSON.parse(storedData);
  
        // check if the new data already exists in the array
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
    
    //deleting the aquarium in dashboard
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
  
  //for view what is the ip address
  const viewipaddress = async (aquariumId) => {
    try {
      const storedData = await AsyncStorage.getItem('aquariumData');
      const currentAquariumData = storedData ? JSON.parse(storedData) : [];
  
      const selectedAquarium = currentAquariumData.find((data) => data.idbox === aquariumId);
  
      if (selectedAquarium) {
        // Display the IP address in an alert or other UI element
        Alert.alert('IP Address', `WebSocket IP Address: ${selectedAquarium.webaddress}`);
      } else {
        console.warn('Selected aquarium not found');
      }
    } catch (error) {
      console.error('Error viewing IP address:', error);
    }
  }

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
        navigation.navigate('HomePage', { idbox: idboxValue }); 
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


      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible && selectedAquariumId === data.idbox}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOuter}
            activeOpacity={1}
            onPress={() => setModalVisible(false)} 
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => viewipaddress(data.idbox)}>
                  <Text style={styles.menuItem}>View IP Address</Text>
                </TouchableOpacity>
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
  const [modalVisible1, setModalVisible1] = useState(false);
    const closeModal = () => {
      setModalVisible1(false);
    }
    const presslink = () =>{
      Linking.openURL('mailto:asklumotech@gmail.com');
    }
    const presslink2 = () =>{
      Linking.openURL('https://youtu.be/jvws3gEnBvU');
    }
  
  return( 
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <ImageBackground style={styles.bg} resizeMode='cover' source={require('../images/mybg3.gif')}>
        <View style={styles.header}>
          <TouchableOpacity onPress={aboutscreen}>
            <Image style={styles.logo} source={require('../images/logo1.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={customscreen}>
            <Image style={styles.plus} source={require('../images/plus.png')} />
          </TouchableOpacity>
          <Modal
            animationType = 'none'
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              setModalVisible1(!modalVisible1);
            }}
            >
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton1} onPress={cultivation}>
                      <Text style={styles.infoclose}>Cultivation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={presslink2}>
                      <Text style={styles.infoclose}>Tutorial</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.closeButton} onPress={presslink}>
                      <Text style={styles.infoclose}>Feedback</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          {/* Icon button to trigger modal */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              setModalVisible1(true);
            }}
          >
          {/* Replace the source with your icon */}
          <Image
            source={require('../images/menu.png')}
            style={styles.infoIcon}
          />
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
    </View>
  )
}

export default Dashboard


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
    //backgroundColor:'yellow'
  },
  plus:{
    resizeMode:'contain',
    marginLeft: wp(21),
    width:wp(13),
    height:hp(7),
    //backgroundColor: 'blue'
  },
  centeredView: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    marginTop: hp(8),
    marginLeft: wp(65),
    borderRadius: 20,
    //padding: hp(3),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: hp(2),
    maxWidth: wp(30), 
  },
  aqsize:{
    height: hp(50),
    width:wp(80),
    resizeMode: 'contain',
  },
  iconButton: {
    //marginTop:hp(), 
    marginLeft: wp(4),
  },
  infoIcon: {
    height: hp(5),
    width:wp(8),
    resizeMode: 'contain',
  },
  infoclose:{
    fontSize:hp(1.7),
    fontWeight:'bold',
    alignSelf:'center',
  },
  infotext:{
    fontSize:hp(1.7),
    alignSelf:'flex-start',
  },
  closeButton: {
    alignSelf: 'flex-start',
    padding: hp(1.5),
    //paddingLeft: wp(3),
    // /marginLeft: wp(3),
    width: wp(30),
    //backgroundColor: 'yellow',
    //borderBottomWidth: 1
  },
  closeButton1: {
    alignSelf: 'flex-start',
    padding: hp(1.5),
    //paddingLeft: wp(3),
    // /marginLeft: wp(3),
    width: wp(30),
    //padding: hp(1),
    //borderBottomWidth: 1

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
  },
  myAquarium:{
    alignSelf:'center',
    justifyContent:'center',
    fontSize:hp(2.5),
    marginBottom:hp(1)
  },
  aqua:{
    flexDirection:'column',
    height:hp(20),
    width:wp(45),
    justifyContent:'center'

  },
  dotsdp:{
    height:hp(20),
    width:wp(10)

  },
  threedots:{
    width:wp(3),
    height:hp(3),
    marginLeft: wp(3),
    marginTop: hp(14)
  },
  section1:{
    alignItems:'center',
  },
  all:{
    flexDirection:'row'
  },
  aquarium1:{
    flexDirection: 'row',
    margin:hp(0.5),
    marginBottom:hp(1),
    width: wp(95),
    height: hp(20),
    alignItems:'center',
    borderRadius: 20,
    backgroundColor: 'rgba(165,226,121,0.6)',
    borderWidth: hp(0.5),
    borderColor: 'rgba(165,226,121,1)',
  },
  a1:{
    resizeMode:'contain',
    width: wp(38),
    height: hp(30),
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
    backgroundColor: '#A5E279',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  modalOuter: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
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
    alignSelf:'center'
  },
  
})