import React from 'react';
import type {Node} from 'react';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
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


const ChildMinding = ({navigation, route }) => {

        const description = "Master the art of child minding with this comprehensive course. Child minding, often referred to as childcare or babysitting, is a critical skill for ensuring the safety, well-being, and development of children. This course covers topics such as child safety, child development, and age-appropriate activities. Whether you're a parent, caregiver, or someone interested in childcare as a profession, this course provides the knowledge and skills needed to care for and nurture children effectively.";
        const price = 750.00;
        const duration = "6 weeks";
      
        return (
          <View style={styles.container}>
            
            <Image
              source={require('./img/image4.png')}
              style={styles.image}
            />
            <Text style={styles.title}>Child Minding Course</Text>
            <Text style={styles.text}>Description: {description}</Text>
            <Text style={styles.text}>Price: R{price}</Text>
            <Text style={styles.text}>Duration: {duration}</Text>
            <View style={styles.buttonContainer}>
              
            </View>
            <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('CoursesAndDiscounts')}>
  <Text style={styles.buttonText}>Back to courses page</Text>
  </TouchableOpacity>

          </View>
        );
      };
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
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
  title: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 18,
    padding: 10,
    margin: 5,
    textAlign: 'center',
    width: 150,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  }
});

export default ChildMinding;