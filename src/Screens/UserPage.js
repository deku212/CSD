import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import AppointmentList from './AppointmentList';
import OldAppointment from './OldAppointment';

export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Welcome User</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.userButton} 
                onPress ={this.newAppointment} >
                    <Text style={styles.buttonText}>New Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton}
                onPress ={this.oldAppointment} >
                    <Text style={styles.buttonText}>Old Appointment</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1B1464',
    width: 200,
    height: 25,
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.7,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30,
    width: 300,
  },
  userButton: {
    backgroundColor: '#1B1464',
    padding: 15,
    paddingHorizontal: 20,
    width: 250,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
});
