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


const Landscaping = ({navigation, route }) => {

        const description = "Learn the art of landscaping in this comprehensive course. From designing beautiful gardens to hardscaping and plant care, you'll master the skills needed to transform outdoor spaces. Landscaping is a creative and practical field that combines design, architecture, and environmental sustainability. This course covers everything from plant selection to landscape planning, offering valuable knowledge for both homeowners and aspiring professionals.";
        const price = 1500.00;
        const duration = "Approximately six months";
      
        return (
          <View style={styles.container}>
            
            <Image
              source={require('./img/image2.png')}
              style={styles.image}
            />
            <Text style={styles.title}>Landscaping Course</Text>
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

export default Landscaping;