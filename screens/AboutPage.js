import {View, Text, StyleSheet, Dimensions, Image, Linking, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';



const{width, height} = Dimensions.get('window');

export default function HomeScreen(){
  const navigation = useNavigation();

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
      <Image style={styles.logo} source={require('../images/logo1.png')} />
      <ScrollView>
        <View style={styles.overalltext}>
            <Text style={styles.subtext}>Lumotech is a microalgae monitoring system that helps researchers and producers to optimize the growth and production of microalgae. 
                The system uses a variety of sensors to collect data on microalgae cultures, such as temperature, pH, light, humidity, and turbidity</Text>
            <Text style={styles.subtext}>Lumotech is a valuable tool for researchers who are studying the growth and physiology of microalgae. 
                The system can be used to identify the optimal conditions for microalgae growth, and to track the effects of different environmental factors on microalgae cultures.</Text>
            <Text style={styles.text2}>Benefits of using Lumotech:</Text>
            <Text style={styles.subtext1}>- Increased microalgae productivity</Text>
            <Text style={styles.subtext1}>- Reduced production costs</Text>
            <Text style={styles.subtext1}>- Improved product quality</Text>
            <Text style={styles.subtext1}>- Reduced risk of culture contamination</Text>
            <Text style={styles.subtext1}>- Increased research efficiency</Text>
            <Text style={styles.subtext}>Lumotech is a powerful microalgae monitoring system that can help researchers and producers to optimize the growth and production of microalgae. The system is easy to use and provides users with valuable insights into the health and productivity of their cultures.</Text>
            <Text style={styles.subtext}>Join with Us & Enjoy Cultivating Microalgae</Text>
            
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
    //alignItems: 'center',
    backgroundColor: '#f6fdc3'
  },
  overalltext:{
    margin: wp(1),
    paddingBottom: hp(4)
  },
  text:{
    fontSize: hp(5),
    //marginBottom:wp(1),
    fontWeight:'bold',
    //justifyContent:'center'
    alignSelf:'center'
  },
  text2:{
    fontSize: hp(2.5),
    marginTop: hp(2),
    //marginBottom:wp(1),
    fontWeight:'bold',
    alignSelf:'center',
    padding: hp(2)
  },
  subtext:{
    fontSize: hp(2),
    alignSelf:'center',
    padding: hp(1),
    marginTop: hp(2),
    textAlign:'center',

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