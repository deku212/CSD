import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, 
  Image, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import DatePick from './DatePick';

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
                <TextInput 
                placeholder="Select Date"
                placeholderTextColor='rgba(255,255,255,0.7)'
                onTouchStart={() => this.props.navigation.navigate('Date')}
                onChangeText={(Value)=>this.setState({date:Value})}
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                />
                <TextInput 
                placeholder="Nature of illness"
                placeholderTextColor='rgba(255,255,255,0.7)'
                onChangeText={(Value)=>this.setState({problem:Value})}
                returnKeyType="next"
                style={styles.input}
                />
                <TextInput 
                placeholder="Last visited on"
                placeholderTextColor='rgba(255,255,255,0.7)'
                onChangeText={(Value)=>this.setState({lastvisit:Value})}
                returnKeyType="next"
                style={styles.input}
                />
                 <TextInput 
                placeholder="Describe the illness"
                placeholderTextColor='rgba(255,255,255,0.7)'
                onChangeText={(Value)=>this.setState({illness:Value})}
                returnKeyType="go"
                style={styles.input1}
                ref={(input) => this.passwordInput = input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.userButton} 
                    onPress ={this.login} >
                        <Text style={styles.buttonText}>Schedule</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
  input: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 20,
  },
  input1: {
    height: 120,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    width: 200,
  },
  userButton: {
    backgroundColor: '#1B1464',
    padding: 15,
    paddingHorizontal: 20,
    width: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
});
