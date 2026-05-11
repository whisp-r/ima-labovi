import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

const App = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text>Basic text input</Text>
        <Text>Current value: {value1}</Text>
        <TextInput
          style={styles.input}
          value={value1}
          onChangeText={setValue1}
          placeholder="Plain input"
        />

        <Text>Number input</Text>
        <Text>Current value: {value2}</Text>
        <TextInput
          style={styles.input}
          value={value2}
          onChangeText={setValue2}
          keyboardType="numeric"
          placeholder="Only numbers allowed"
        />

        <Text>Password input</Text>
        <Text>Current value:</Text>
        <TextInput
          style={styles.input}
          value={value3}
          onChangeText={setValue3}
          secureTextEntry={true}
          placeholder="Something only you"
        />

        <Text>Multiline input</Text>
        <Text>Current value: {value4}</Text>
        <TextInput
          style={styles.input}
          value={value4}
          onChangeText={setValue4}
          multiline={true}
          numberOfLines={4}
          placeholder="Many many lines input!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default App;
