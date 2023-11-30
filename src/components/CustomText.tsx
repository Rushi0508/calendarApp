import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const CustomText = ({ children, style, ...props }:any) => {
  return (
    <RNText style={[styles.defaultText, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Poppins-Regular' // Set your desired font family
  },
});

export default CustomText;
