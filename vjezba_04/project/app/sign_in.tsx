import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import "../firebaseConfig";

const auth = getAuth();

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User created:", userCredential.user.uid);
      // navigation or redirect here
    } catch (error: any) {
      console.log(error.code, error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="password"
      />
      <TouchableOpacity onPress={handleSignUp}>
        <Text>Register</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 5,
    marginBottom: 20,
  },
});
