import { StyleSheet, Text, View, TextInput as Input } from 'react-native';
import React from 'react';

const TextInput = ({ placeholder, label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF" 
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#725d8d',
  },
  input: {
    borderRadius: 6,
    fontSize: 15,
    color: '#FFFFFF',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#725d8d',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
