import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Palette from './ekrani/Palette';
import Home from './ekrani/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  const [pallete, setPalette] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Palette" component={Palette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
