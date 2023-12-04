import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import HomePage from '../screens/HomePage.js';
import AboutPage from '../screens/AboutPage.js';
import CustomPage from '../screens/CustomPage.js';
import TypesPage from '../screens/TypesPage.js';
import Dashboard from '../screens/Dashboard.js';
import AlertPage from '../screens/AlertPage.js';
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
          <Stack.Screen name="Types" options={{headerShown: false}} component={TypesPage} />
          <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutPage} />
          <Stack.Screen name="Custom" options={{headerShown: false}} component={CustomPage} />
          <Stack.Screen name="Alert" options={{headerShown: false}} component={AlertPage} />
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
          <Stack.Screen name="Types" options={{headerShown: false}} component={TypesPage} />
          <Stack.Screen name="HomePage" options={{headerShown: false}} component={HomePage} />
          <Stack.Screen name="About" options={{headerShown: false}} component={AboutPage} />
          <Stack.Screen name="Custom" options={{headerShown: false}} component={CustomPage} />
          <Stack.Screen name="Alert" options={{headerShown: false}} component={AlertPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
