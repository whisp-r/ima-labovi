import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './komponente/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ColorBox colorName="green" hexColor="#52fc03" />
        <ColorBox colorName="blue" hexColor="#0f42d9" />
        <ColorBox colorName="violet" hexColor="#4c0fd9" />
        <ColorBox colorName="pink" hexColor="#d90f99" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
