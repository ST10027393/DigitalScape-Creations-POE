import React from 'react';
import type {Node} from 'react';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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


const CoursesAndDiscounts = ({navigation, route }) => {
    
    return (
    <View style={styles.container}>
      <Image source={require('./img/logo.jpg')} style={styles.logo} />

      <Text style={styles.heading}>Courses on Offer</Text>
      <Text style={styles.text}>
        We offer a variety of 6-month and 6-week courses. Click on the courses below to receive further information about each course
      </Text>

      <Text style={styles.heading}>6 month courses</Text>

      <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('FirstAid')}>
  <Text style={styles.buttonText}>First Aid</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Sewing')}>
  <Text style={styles.buttonText}>Sewing</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Landscaping')}>
  <Text style={styles.buttonText}>Landscaping</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('LifeSkills')}>
  <Text style={styles.buttonText}>Life Skills</Text>
  </TouchableOpacity>

      <Text style={styles.heading}>6 week courses</Text>

      <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('ChildMinding')}>
  <Text style={styles.buttonText}>Child Minding</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Cooking')}>
  <Text style={styles.buttonText}>Cooking</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('GardenMaintenance')}>
  <Text style={styles.buttonText}>Garden Maintenance</Text>
  </TouchableOpacity>

      <Text style={styles.heading}>Discounts</Text>
      <Text style={styles.text}> • One course – no discount </Text>
      <Text style={styles.text}> • Two courses – 5% discount </Text>
      <Text style={styles.text}> • Three courses – 10% discount </Text>
      <Text style={styles.text}> • More than three courses – 15% discount </Text>
    </View>
  );
};    
      
        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  customButton: {
    backgroundColor: '#2E8B57',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 60, 
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    marginRight: 8,
    color: 'white',
  },
  logo: {
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop: 20, 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  courseItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    margin: 10,
  },
  discountItem: {
    fontSize: 18,
    marginBottom: 10,
  }
});

export default CoursesAndDiscounts;
