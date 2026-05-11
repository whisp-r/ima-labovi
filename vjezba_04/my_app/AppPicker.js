import React, {useState} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';

const FOODS = ['apples', 'peaches', 'bananas', 'strawberies', 'plums'];

const App = () => {
  const [value, setValue] = useState('figs');
  return (
    <View style={styles.container}>
      <Text>Selected: {value} </Text>
      <Picker
        selectedValue={value}
        onValueChange={itemValue => setValue(itemValue)}>
        {FOODS.map(food => (
          <Picker.Item label={food} value={food} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#aafff1',
    padding: 8,
  },
});

export default App;
