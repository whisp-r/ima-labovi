import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Palette from './ekrani/Palette';
import Home from './ekrani/Home';
import Modal from './ekrani/Modal';
import Register from './ekrani/Register';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const App = () => {
  const [pallete, setPalette] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Main"
          component={MainStackScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Modal" component={Modal} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Register">
      <MainStack.Screen name="Register" component={Register} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Palette" component={Palette} />
    </MainStack.Navigator>
  );
};

export default App;
