import React from 'react';
import type {Node} from 'react';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home.tsx';
import SignUp from './SignUp.tsx';
import CoursesAndDiscounts from './CoursesAndDiscounts.tsx';
import FirstAid from './FirstAid.tsx';
import Sewing from './Sewing.tsx';
import Landscaping from './Landscaping.tsx';
import LifeSkills from './LifeSkills.tsx';
import ChildMinding from './ChildMinding.tsx';
import Cooking from './Cooking.tsx';
import GardenMaintenance from './GardenMaintenance.tsx';
import Bookings from './Bookings.tsx';
import ContactUs from './ContactUs.tsx';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  WebView,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRoute = "Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CoursesAndDiscounts" component={CoursesAndDiscounts} />
        <Stack.Screen name="FirstAid" component={FirstAid} />
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen name="Landscaping" component={Landscaping} />
        <Stack.Screen name="LifeSkills" component={LifeSkills} />
        <Stack.Screen name="ChildMinding" component={ChildMinding} />
        <Stack.Screen name="Cooking" component={Cooking} />
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenance} />
        <Stack.Screen name="Bookings" component={Bookings} />
        <Stack.Screen name="ContactUs" component={ContactUs}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

const Stack = createNativeStackNavigator();

export default App;