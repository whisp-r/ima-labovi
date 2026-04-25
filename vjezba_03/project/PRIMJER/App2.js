import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some different colour themes!</Text>
        <View style={[styles.box, styles.greenColor]}>
          <Text style={[styles.boxText, styles.text]}>Green #52fc03</Text>
        </View>
        <View style={[styles.box, styles.blueColor]}>
          <Text style={[styles.boxText, styles.text]}>Green #52fc03</Text>
        </View>
        <View style={[styles.box, styles.violetColor]}>
          <Text style={[styles.boxText, styles.text]}>Green #52fc03</Text>
        </View>
        <View style={[styles.box, styles.pinkColor]}>
          <Text style={[styles.boxText, styles.text]}>Green #52fc03</Text>
        </View>
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

export default App;
