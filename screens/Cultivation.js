import {View, Text, StyleSheet, Dimensions, Image, Linking,  TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';



const{width, height} = Dimensions.get('window');

export default function HomeScreen(){
  const navigation = useNavigation();

  const about = async ()=>{
    //await removeItem('onboarded');
    navigation.push('About');
}

const presslink = () =>{
  Linking.openURL('mailto:asklumotech@gmail.com');
}
const presslink2 = () =>{
  Linking.openURL('https://youtu.be/jvws3gEnBvU');
}
const presslink3 = () =>{
  Linking.openURL('https://youtu.be/7QB1JG7fJrk');
}


  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={about}>
        <Image style={styles.logo} source={require('../images/logo1.png')} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.overalltext}>
            <Text style={styles.text}>Cultivating Microalgae</Text>
            <Text style={styles.subtext1}>Cultivate Microalgae in 4 Easy Steps</Text>
            <View style={styles.steps}>
              <Text style={styles.text2}>Step 1</Text>
              <Text style={styles.subtext1}>Prepare the aquarium, air pump, nutrients, led lights and the LUMOTech device. Then plug in the air pump, led light and power up the LUMOTech device with 5V.</Text>
            </View>
            <View style={styles.steps}>
              <Text style={styles.text2}>Step 2</Text>
              <Text style={styles.subtext1}>Put water based to the amount and concentration you cultivate, After that put the starter pack of your microalgae based on the concetration you have, then put nutrients accordingly. </Text>
            </View>
            <View style={styles.steps}>
              <Text style={styles.text2}>Step 3</Text>
              <Text style={styles.subtext1}>Your done setting up your aquarium. Now is the time to monitor it. In mobile app part, create a customized info about you aquarium. Provide all the neccessary details.</Text>
            </View>
            <View style={styles.steps}>
              <Text style={styles.text2}>Step 4</Text>
              <Text style={styles.subtext1}>After successfully creating the aquarium for monitoring, you can now proceed in monitoring it via your phone. In the app you can see the sensor's data and recieve alerts and notifications when things are not normal.</Text>
            </View>
           <Text style={styles.subtext}>Now that your done setting up, enjoy monitoring your healthy microalgae! </Text>
            <Text style={styles.subtext}>Join With Us & Enjoy Cultivating Microalgae</Text>
            <View style={styles.subtext4}>
              <Text style={styles.subtext3}>Tutorial: </Text>
              <TouchableOpacity onPress={presslink2}>
                <Text style={styles.subtext2}>Mobile App Tutorial</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.subtext5}>
              <Text style={styles.subtext3}>Tutorial 2: </Text>
              <TouchableOpacity onPress={presslink3}>
                <Text style={styles.subtext2}>Mobile App Tutorial 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.subtext5}>
              <Text style={styles.subtext3}>Contact us: </Text>
              <TouchableOpacity onPress={presslink}>
                <Text style={styles.subtext2}>asklumotech@gmail.com</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f6fdc3'
  },
  overalltext:{
    //backgroundColor:'orange',
    margin: wp(1),
    paddingBottom: hp(4)
  },
  text:{
    fontSize: hp(3.5),
    fontWeight:'bold',
    alignSelf:'center',
    marginBottom:hp(1)
  },
  text2:{
    fontSize: hp(3),
    fontWeight:'bold',
    alignSelf:'center',
    padding: hp(1)
  },
  steps:{
    //flexDirection:'row',
    //backgroundColor:'yellow',
    alignItems:'center',
    //justifyContent:'center',
    marginTop: hp(1),
  },
  subtext:{
    fontSize: hp(2),
    alignSelf:'center',
    padding: hp(1),
    marginTop: hp(2),
    textAlign:'center',
    fontWeight:'bold'
  },
  subtext1:{
    fontSize: hp(2),
    paddingLeft: wp(3),
    paddingRight: wp(3),
    alignSelf:'center',
    //backgroundColor:'red'
    textAlign: 'center'
  },
  subtext2:{
    fontSize: hp(2),
    alignSelf:'flex-start',
    paddingLeft: hp(1),
    marginTop: hp(1),
    textDecorationLine: 'underline',
    color:'blue'
  },
  subtext3:{
    fontSize: hp(2),
    alignSelf:'flex-start',
    paddingLeft: hp(1),
    marginTop: hp(1),
  },
  subtext4:{
    flexDirection: 'row',
    marginTop: hp(3),
  },
  subtext5:{
    flexDirection: 'row',
    marginTop:hp(2)
  },
  logo:{
    resizeMode:'contain',
    alignSelf:'flex-start',
    marginTop: hp(8),
    marginLeft: hp(2),
    marginBottom: hp(2),
    width: wp(60),
    height: hp(10),
    
  },
  back: {
    backgroundColor: '#34d399',
    width: wp(90),
    height: hp(5),
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: hp(5),
    marginBottom: hp(5) 
  },
  getStarted:{
    fontSize: hp(2),
    justifyContent:'center',
    alignSelf:'center'
  }
})