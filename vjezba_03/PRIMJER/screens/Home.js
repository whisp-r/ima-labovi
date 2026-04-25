import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  const [palletes, setPalletes] = useState([]);

  const getPalettes = useCallback(async () => {
    const response = await fetch('https://demo0945922.mockable.io/colors');
    if (response.ok) {
      const data = await response.json();
      setPalletes(data.data);
    }
  }, []);

  useEffect(() => {
    getPalettes();
  }, []);

  console.log(palletes[0].colors);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('ColorPalette')}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
