import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { BackButton } from '../../../assets/icon';
const index = ({
  label,
  backgroundColor = '#d9d9d9',
  textColor = '#725D8D',
  onPress,
  type,
  icon, 
  size = 166,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor, size)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: (backgroundColor, size) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    width:size,
    height: 50,
    marginTop: 20,
    borderRadius: 10, 
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
    buttonContainer: {
      alignItems: 'center',
    },
  }),
});
