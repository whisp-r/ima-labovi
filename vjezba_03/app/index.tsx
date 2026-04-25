import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.main}>
      <Link href="/palette" style={styles.link}>
        Rainbow
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  link: {
    fontSize: 32,
  },
});
