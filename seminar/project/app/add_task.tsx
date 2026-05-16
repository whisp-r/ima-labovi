import { useRouter } from "expo-router";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import CategoryPicker from "../components/CategoryPicker";
import { styles } from "../styles/shared";

import { auth, db } from "../firebaseConfig";
const userId = auth.currentUser!.uid;

export default function AddTask() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Personal");

  const handleAdd = () => {
    if (!name.trim()) {
      Alert.alert("Error", "Task name is required");
      return;
    }

    addDoc(collection(db, "users", userId, "tasks"), {
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
