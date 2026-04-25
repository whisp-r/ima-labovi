import { StyleSheet, Text, View } from "react-native";

const ColorBox = ({ colorName, hexColor }) => {
  const textStyle = {
    color:
      parseInt(hexColor.replace("#", ""), 16) > 0xffffff / 1.2
        ? "black"
        : "white",
  };
  return (
    <View style={[styles.color_box, { backgroundColor: hexColor }]}>
      <Text style={textStyle}>{colorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  color_box: {
    alignSelf: "stretch",
    paddingTop: 50,
    marginTop: 20,
    alignSelf: "stretch",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
  },
});

export default ColorBox;
