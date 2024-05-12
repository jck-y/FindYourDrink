import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../../../config/firebase';
const auth = getAuth(app);
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onPressLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log('Logged in user:', user);
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Login failure', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Gap height={50} />
        <Text style={styles.title}>LOGIN</Text>
      </View>
      <Gap height={134} />
      <View style={styles.contentWrapper}>
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="Type your email"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          label="Password"
          placeholder="Enter your password"
          onChangeText={setPassword}
          value={password}
        />
        <View style={styles.buttonContainer}>
          <Button
            label="LOGIN"
            backgroundColor="#725D8D"
            textColor="#FFFFFF"
            onPress={onPressLogin}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  buttonContainer: {
    alignItems: 'center', // Center content horizontally
  },
  button: {
    alignSelf: 'center', // Center button within its container
    marginTop: 20,
    borderRadius: 10, // Added borderRadius to the button here
  },
});
