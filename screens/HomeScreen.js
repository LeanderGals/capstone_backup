import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import  {SafeAreaView} from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';



const{width, height} = Dimensions.get('window');

export default function HomeScreen(){
  const navigation = useNavigation();

  const handleReset = async ()=>{
    //await removeItem('onboarded');
    navigation.push('Custom');
}

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle={'dark-content'}/>
      <Image style={styles.logo} source={require('../images/logo1.png')} />
      <View style={styles.lottie}>
        <Image style={styles.people} source={require('../images/wavingPeople.png')} />
        <LottieView source={require('../assets/animations/animation_lnkj0z5c.json')} autoPlay loop />
      </View> 
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.subtext}>Join with Us & Enjoy Cultivating Microalgae</Text>
      <TouchableOpacity onPress={handleReset} style={styles.start}>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f6fdc3'
  },
  people:{
    width: width*0.8,
    height: height*0.8,
    resizeMode:'contain'
  },
  lottie:{
    alignItems:'center',
    justifyContent:'center',
    width: width*0.9,
    height: width*1,
    //backgroundColor:'green'
  },
  text:{
    fontSize: hp(5),
    marginBottom:wp(1),
    fontWeight:'bold'
  },
  subtext:{
    fontSize: hp(2),
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
  start: {
    backgroundColor: '#34d399',
    width: wp(90),
    height: hp(5),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: hp(12) 
  },
  getStarted:{
    fontSize: hp(2)
  }
})