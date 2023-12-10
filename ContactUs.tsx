import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ContactUs = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('CoursesAndDiscounts')}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Bookings')}>
          <Text style={styles.buttonText}>Bookings</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./img/logo.jpg')} style={styles.logo} />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.greenBoldText}>Address</Text>
        <Text style={styles.greenText}>1 Link Road</Text>
        <Text style={styles.greenText}>Dawncliffe</Text>
        <Text style={styles.greenText}>Westville</Text>
        <Text style={styles.greenText}>3629</Text>

        <Text style={styles.greenBoldText}>Contact</Text>
        <Text style={styles.greenText}>empoweringthenations@gmail.com</Text>
        <Text style={styles.greenText}>(+27)83 254 3871</Text>

        <Text style={styles.greenBoldText}>Opening Hours</Text>
        <Text style={styles.greenText}>Mon-Sat</Text>
        <Text style={styles.greenText}>9am-7pm</Text>
        <Text style={styles.greenText}>Sunday</Text>
        <Text style={styles.greenText}>9am-4pm</Text>
        {/* Add Google Map here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  greenBoldText: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 24,
    marginTop: 10, 
  },
  
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  
  customButton: {
    backgroundColor: '#2E8B57',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    marginRight: 8,
    color: 'white',
    color: 'white',
  },
  greenText: {
    color: 'black',
    fontSize: 20,
    marginTop: 7, 
  },
});

export default ContactUs;
