import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App1 = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Here are some different colour themes!</Text>
        <View style={styles.greenBox}>
          <Text style={[styles.boxText, styles.text]}>Green #52fc03</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={[styles.boxText, styles.text]}>Blue #52fc03</Text>
        </View>
        <View style={styles.violetBox}>
          <Text style={[styles.boxText, styles.text]}>Violet #52fc03</Text>
        </View>
        <View style={styles.pinkBox}>
          <Text style={[styles.boxText, styles.text]}>Pink #52fc03</Text>
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
  greenBox: {
    backgroundColor: '#52fc03',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  blueBox: {
    backgroundColor: '#0f42d9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  violetBox: {
    backgroundColor: '#4c0fd9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  pinkBox: {
    backgroundColor: '#d90f99',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
});

export default App1;
