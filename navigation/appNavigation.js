import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import HomePage from '../screens/HomePage.js';
import AboutPage from '../screens/AboutPage.js';
import CustomPage from '../screens/CustomPage.js';
import Dashboard from '../screens/Dashboard.js';
import LogsPage from '../screens/LogsPage.js';
import LogsPage2 from '../screens/LogsPage2.js';
import LogsPage3 from '../screens/LogsPage3.js';
import LogsPage4 from '../screens/LogsPage4.js';
import LogsPage5 from '../screens/LogsPage5.js';
import LogsPage6 from '../screens/LogsPage6.js';
import LogsPage7 from '../screens/LogsPage7.js';
import LogsPage8 from '../screens/LogsPage8.js';
import LogsPage9 from '../screens/LogsPage9.js';
import LogsPage10 from '../screens/LogsPage10.js';
import Camera from '../screens/Camerafunc.js';
import Cultivation from '../screens/Cultivation.js';
import { getItem } from '../utils/asyncStorage.js';




const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  
  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async ()=>{
    let onboarded = await getItem('onboarded');
    if(onboarded == 1){
      // hide onboarding
      setShowOnboarding(false);
    }else{
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if(showOnboarding==null){
    return null;
  }


  if(showOnboarding){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Dashboard" options={{headerShown: false}} component={Dashboard} />
          <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutPage} />
          <Stack.Screen name="Custom" options={{headerShown: false}} component={CustomPage} />
          <Stack.Screen name="Camera" options={{headerShown: false}} component={Camera} />
          <Stack.Screen name="Logs" options={{headerShown: false}} component={LogsPage} />
          <Stack.Screen name="Logs2" options={{headerShown: false}} component={LogsPage2} />
          <Stack.Screen name="Logs3" options={{headerShown: false}} component={LogsPage3} />
          <Stack.Screen name="Logs4" options={{headerShown: false}} component={LogsPage4} />
          <Stack.Screen name="Logs5" options={{headerShown: false}} component={LogsPage5} />
          <Stack.Screen name="Logs6" options={{headerShown: false}} component={LogsPage6} />
          <Stack.Screen name="Logs7" options={{headerShown: false}} component={LogsPage7} />
          <Stack.Screen name="Logs8" options={{headerShown: false}} component={LogsPage8} />
          <Stack.Screen name="Logs9" options={{headerShown: false}} component={LogsPage9} />
          <Stack.Screen name="Logs10" options={{headerShown: false}} component={LogsPage10} />
          <Stack.Screen name="Cultivation" options={{headerShown: false}} component={Cultivation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Dashboard'>
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Dashboard" options={{headerShown: false}} component={Dashboard} />
          <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutPage} />
          <Stack.Screen name="Custom" options={{headerShown: false}} component={CustomPage} />
          <Stack.Screen name="Camera" options={{headerShown: false}} component={Camera} />
          <Stack.Screen name="Logs" options={{headerShown: false}} component={LogsPage} />
          <Stack.Screen name="Logs2" options={{headerShown: false}} component={LogsPage2} />
          <Stack.Screen name="Logs3" options={{headerShown: false}} component={LogsPage3} />
          <Stack.Screen name="Logs4" options={{headerShown: false}} component={LogsPage4} />
          <Stack.Screen name="Logs5" options={{headerShown: false}} component={LogsPage5} />
          <Stack.Screen name="Logs6" options={{headerShown: false}} component={LogsPage6} />
          <Stack.Screen name="Logs7" options={{headerShown: false}} component={LogsPage7} />
          <Stack.Screen name="Logs8" options={{headerShown: false}} component={LogsPage8} />
          <Stack.Screen name="Logs9" options={{headerShown: false}} component={LogsPage9} />
          <Stack.Screen name="Logs10" options={{headerShown: false}} component={LogsPage10} />
          <Stack.Screen name="Cultivation" options={{headerShown: false}} component={Cultivation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
