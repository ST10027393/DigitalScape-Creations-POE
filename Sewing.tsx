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


const Sewing = ({navigation, route }) => {
    
  const description = "Learn the art of sewing in this comprehensive course. From basics to advanced techniques, you'll master this craft which is a versatile and timeless skill that encompasses both practical and creative applications. Rooted in human history, it serves essential functions like clothing creation and repairs, home decor, and sustainability through upcycling. Beyond its practicality, sewing fosters artistic expression, offers economic benefits, and encourages problem-solving. It plays a significant role in cultural traditions, entrepreneurship, and even offers therapeutic value, making it a valuable and enduring life skill.";
  const price = 1500.00;
  const duration = "6 months";

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./img/image1.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Sewing Course</Text>
      <Text style={styles.text}> {description}</Text>
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

export default Sewing;