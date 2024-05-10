import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../'
const PageHeader = ({ label,onPress,back }) => {
    return (
      <View style={styles.container}>
      <Button type='icon-only' icon='icon-back' onPress={onPress}/>
      <Gap height={30}/>
      <Text style={styles.title}>{label}</Text>
      </View>
    );
};

export default PageHeader;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingVertical: 15,
  },
  title:{
    color:"#222222",
    fontWeight:"700",
    fontSize:34,
  }

})