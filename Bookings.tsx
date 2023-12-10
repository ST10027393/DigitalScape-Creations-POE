import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Bookings = ({ navigation }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const coursePrices = {
    'First Aid': 1500,
    'Landscaping': 1500,
    'Sewing': 1500,
    'Life Skills': 1500,
    'Child Minding': 750,
    'Cooking': 750,
    'Garden Maintenance': 750,
  };

  const updateSelectedCourses = (courseTitle) => {
    const isSelected = selectedCourses.includes(courseTitle);
    const price = coursePrices[courseTitle];

    if (isSelected) {
      setSelectedCourses(selectedCourses.filter((course) => course !== courseTitle));
      setTotalPrice(totalPrice - price);
    } else {
      setSelectedCourses([...selectedCourses, courseTitle]);
      setTotalPrice(totalPrice + price);
    }
  };

  const handleBookNow = () => {
    if (selectedCourses.length === 0) {
      
      return;
    }

    setBookingConfirmed(true);

    setTimeout(() => {
      
    }, 1000); 
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate('CoursesAndDiscounts')}
        >
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('ContactUs')}>
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('./img/logo.jpg')} style={styles.logo} />

      {bookingConfirmed ? (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>
            Thank you for making a booking. We will get back to you within 3-5 business days.
          </Text>
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.boldBlackText}>Please select the courses you would like to book for</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.customButton} onPress={() => updateSelectedCourses('First Aid')}>
              <Text style={styles.buttonText}>First Aid</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => updateSelectedCourses('Landscaping')}
            >
              <Text style={styles.buttonText}>Landscaping</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.customButton} onPress={() => updateSelectedCourses('Sewing')}>
              <Text style={styles.buttonText}>Sewing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => updateSelectedCourses('Child Minding')}
            >
              <Text style={styles.buttonText}>Child Minding</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => updateSelectedCourses('Life Skills')}
            >
              <Text style={styles.buttonText}>Life Skills</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => updateSelectedCourses('Cooking')}
            >
              <Text style={styles.buttonText}>Cooking</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.customButton}
              onPress={() => updateSelectedCourses('Garden Maintenance')}
            >
              <Text style={styles.buttonText}>Garden Maintenance</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.boldBlackText}>Selected Courses: {selectedCourses.join(', ')}</Text>
            <Text style={styles.boldBlackText}>Total Price: R{totalPrice}</Text>

            <TouchableOpacity style={styles.customButton} onPress={handleBookNow}>
              <Text style={styles.buttonText}>BOOK NOW</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  confirmationText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
  },
  boldBlackText: {
    color: 'black',
    fontSize: 20,
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
    textAlign: 'center',
  },
  largeText: {
    fontSize: 50,
    color: 'green',
  },
  content: {
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Bookings;
