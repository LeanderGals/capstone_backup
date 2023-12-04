import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';



const{width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home')
        setItem('onboarded', '1')
    }
  return (
    <View style={styles.container}>
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            containerStyles={{paddingHorizontal:15 }}
            pages={[
                {
                    backgroundColor: '#A5E279',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('../assets/animations/animation_lnixpx7z.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Monitor Microalgae',
                    subtitle: 'Welcome to the Microalgae Monitoring App! This app is designed to help you monitor and manage your microalgae cultures more effectively.',
                },
                {
                    backgroundColor: '#FFCF96',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('../assets/animations/animation_lnixrc2o.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Save Time ',
                    subtitle: 'Microalgae Monitoring App can help you to save time by streamlining the microalgae monitoring process and providing you with the tools you need to make informed decisions.',
                },
                {
                    backgroundColor: '#82a0d8',
                    image: (
                        <View style={styles.lottie}>
                            <LottieView source={require('../assets/animations/animation_lnixp69g.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Maintain Healthy Microalgae',
                    subtitle: 'Providing real-time data on key parameters, so you can identify and address problems early on and automating many of the tasks involved in microalgae monitoring, such as data collection.',
                },
        ]}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width
    }
})