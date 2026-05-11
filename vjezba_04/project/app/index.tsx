import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
        <Link href="/palette" style={styles.link}>
          Rainbow
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  link: {
    fontSize: 28,
  },
});
