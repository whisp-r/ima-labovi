import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

export default function AboutScreen() {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://demo7168568.mockable.io/colors")
    // fetch("http://192.168.1.36:3000/data.json/colors")
    fetch("http://demo4770426.mockable.io/colors")
      .then((res) => res.json())
      .then((data) => {
        setColors(data.colors);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={colors}
      keyExtractor={(item: any) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexColor={item.hexCode} />
      )}
    />
  );
}
