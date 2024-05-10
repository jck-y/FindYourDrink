import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from '../../components'
import { Logo } from '../../assets/index';
const Splash = ({navigation}) => {
  return (
    <View >
      <Text>Splash</Text>
      <Image source={Logo} />
      <Button label="LOG IN"onPress={() => navigation.navigate('Login')}/>
      <Button label="REGISTER" onPress={() => navigation.navigate('Register')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})