import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('CoursesAndDiscounts')}>
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Bookings')}>
          <Text style={styles.buttonText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('ContactUs')}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./img/logo.jpg')} style={styles.logo} />

      <Text style={styles.mainHeading}>Welcome to Empowering the Nation</Text>

      <View style={styles.textBox}>
        <Text style={styles.text}>
          Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and can provide more marketable skills. The six-month programmes take place over 12 weeks and the short courses take six weeks.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
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
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
  },
  mainHeading: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  textBox: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
});

export default Home;
