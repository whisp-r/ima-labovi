import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  View, 
  TouchableOpacity
} from 'react-native';

//import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
//import firebase_app from '../firebaseConfig.js'

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { cosineDistance } from 'firebase/firestore/pipelines';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDyJ5VWGnGPIyX6ipniLR5Fo5Tr6ePo_bc',
  authDomain: 'myfirebaseproject-fe314.firebaseapp.com',
  databaseURL: 'https://myfirebaseproject-fe314.firebaseio.com',
  projectId: 'myfirebaseproject-fe314',
  storageBucket: 'myfirebaseproject-fe314.firebasestorage.app',
  messagingSenderId: 'sender-id',
  appId: '1:108862498315:android:e765244ac8239ed357c90e',
  measurementId: '108862498315',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase



const Register = ({navigation}) =>{

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = (email, password) =>{
    console.log(email +" " + password)
    createUserWithEmailAndPassword(auth,email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });}

  return( <View>
    <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="password"
        />

        <TouchableOpacity
        onPress={() => {
          signIn(email, password);
          navigation.navigate('Home');
        }}>
        <Text>Register</Text>
      </TouchableOpacity>
        
        </View>)

  }

  const styles = StyleSheet.create({
  safeArea: {flex: 1},
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
export default Register;