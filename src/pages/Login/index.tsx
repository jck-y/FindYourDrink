import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, TextInput} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
          label="Email"
          placeholder="Type your email address"
        />
      <TextInput
          label="Password"
          placeholder="Type your password address"
        />
      <Button
        label="LOG IN"
        backgroundColor="#725D8D"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate('HomeDrink')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#d6c9e6",
    paddingHorizontal: 30,
  },
});
