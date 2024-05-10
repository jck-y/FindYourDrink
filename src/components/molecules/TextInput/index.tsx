import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({ placeholder, label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#020202',
  },
  input: {
    borderColor: 'white',
    borderRadius: 6,
    fontSize: 14,
    padding: 10,
  },
});
