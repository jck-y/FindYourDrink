import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, TextInput } from '../../components';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Gap height={50} />
        <Text style={styles.title}>REGISTER</Text>
      </View>
      <View style={styles.contentWrapper}>
        <TextInput style={styles.input} label="Email" placeholder="Type your email address" />
        <TextInput style={styles.input} label="Username" placeholder="Type your username" />
        <TextInput style={styles.input} label="Password" placeholder="Enter your password" />
        <View style={styles.buttonContainer}>
          <Button
            label="REGISTER"
            backgroundColor="#725D8D"
            textColor="#FFFFFF"
            style={styles.buttonContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6c9e6',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#725D8D',
    marginTop: 100,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  buttonContainer: {
    alignItems: 'center', 
    borderRadius: 100,
  },
});
