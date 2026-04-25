import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';

const ColorBox = props => {
  const colorStyle = {backgroundColor: props.hexCode};
  console.log(colorStyle);
  const textStyle = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 2
        ? 'black'
        : 'white',
  };
  return (
    <SafeAreaView>
      <View style={[styles.box, colorStyle]}>
        <Text style={textStyle}>{props.colorName}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  greenColor: {
    backgroundColor: '#52fc03',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  blueColor: {
    backgroundColor: '#0f42d9',
  },
  violetColor: {
    backgroundColor: '#4c0fd9',
  },
  pinkColor: {
    backgroundColor: '#d90f99',
  },
});

export default ColorBox;
