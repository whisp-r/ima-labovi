import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

const ColorBox = ({colorName, hexColor}) => {
  console.log(hexColor);
  const textStyle = {
    color:
      parseInt(hexColor.replace('#', ''), 16) > 0xffffff / 2
        ? 'black'
        : 'white',
  };
  return (
    <SafeAreaView>
      <View style={[styles.container, {backgroundColor: hexColor}]}>
        <Text style={textStyle}>{colorName}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 50,
    backgroundColor: 'blue',
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  pinkColor: {
    backgroundColor: '#fc03b5',
  },
  greenColor: {
    backgroundColor: '#11d95e',
  },
  blueColor: {
    backgroundColor: '#1129d9',
  },
  violetColor: {
    backgroundColor: '#9d03fc',
  },
});

export default ColorBox;
