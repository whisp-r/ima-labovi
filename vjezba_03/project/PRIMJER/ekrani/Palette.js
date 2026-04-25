import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ColorBox from '../komponente/ColorBox';

const COLORS = [
  {colorName: 'Base03', hexCode: '#002b36'},
  {colorName: 'Base02', hexCode: '#073642'},
  {colorName: 'Base01', hexCode: '#586e75'},
  {colorName: 'Base00', hexCode: '#657b83'},
  {colorName: 'Base0', hexCode: '#839496'},
  {colorName: 'Base1', hexCode: '#93a1a1'},
  {colorName: 'Base2', hexCode: '#eee8d5'},
  {colorName: 'Base3', hexCode: '#fdf6e3'},
  {colorName: 'Yellow', hexCode: '#b58900'},
  {colorName: 'Orange', hexCode: '#cb4b16'},
  {colorName: 'Red', hexCode: '#dc322f'},
  {colorName: 'Magenta', hexCode: '#d33682'},
  {colorName: 'Violet', hexCode: '#6c71c4'},
  {colorName: 'Blue', hexCode: '#268bd2'},
  {colorName: 'Cyan', hexCode: '#2aa198'},
  {colorName: 'Green', hexCode: '#859900'},
];

const Palette = () => {
  return (
    <FlatList
      data={COLORS}
      keyExtractor={item => item.colorName}
      renderItem={({item}) => (
        <ColorBox colorName={item.colorName} hexColor={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 50,
    backgroundColor: 'blue',
    paddingTop: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  pinkColor: {
    backgroundColor: '#fc03b5',
  },
  greenColor: {
    backgroundColor: '#11d95e',
  },
  blueColor: {
    backgroundColor: '#1129d9',
  },
  violetColor: {
    backgroundColor: '#9d03fc',
  },
});

export default Palette;
