import React, {useState, useEffect, useCallback} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
const paletteNamesList = ['Rainbow', 'Solar', 'Rose'];

const Home = ({navigation, route}) => {
  const newPalette = route.params ? route.params.paletteName : undefined;
  const newColors = route.params ? route.params.colors : undefined;
  console.log('***');

  console.log(route.params);

  console.log('***');
  const [paletteNames, setPaletteNames] = useState(paletteNamesList);

  /* const getAllPalettes = useCallback(async () => {
    const result = await fetch('https://demo0945922.mockable.io/colors');
    console.log(result);
    const resultJson = await result.json();
    console.log(resultJson);
    const data = await resultJson.data;

    const names = data.map(({paletteName}) => paletteName);
    console.log(names);
  }, []);*/

  useEffect(() => {
    if (newPalette) {
      setPaletteNames(paletteNames => [newPalette, ...paletteNames]);
    }
  }, [newPalette]);

  return (
    <View>
      <FlatList
        data={paletteNames}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Palette', newColors);
            }}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Modal');
        }}>
        <Text>Add new palette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
