import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import CategoryPicker from "../components/CategoryPicker";
import { styles } from "../styles/shared";

export default function AddTask() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleAdd = async () => {
    if (!name.trim()) {
      Alert.alert("Error", "Task name is required");
      return;
    }

    await addDoc(collection(db, "users", auth.currentUser!.uid, "tasks"), {
      name: name.trim(),
      description: description.trim(),
      done: false,
      category,
    });

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter task name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.description]}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
        multiline
      />
      <Text style={styles.label}>Category</Text>
      <CategoryPicker selected={category} onSelect={setCategory} />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
