import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Gap } from '../../components';
import { Logo } from '../../assets/index';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIND YOUR DRINK</Text>
      <Image source={Logo} style={styles.logo} />
      <Gap height={37} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <Gap height={40} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#725d8d'
  },
  logo: {
    width: 200, 
    height: 200,
  },
  button: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#725d8d',
  },
});
