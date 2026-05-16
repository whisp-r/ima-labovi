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
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "../firebaseConfig";
import { getAuth } from "firebase/auth";
import CategoryPicker from "../components/CategoryPicker";
import { styles } from "../styles/shared";

const db = getFirestore();
const auth = getAuth();

export default function AddTask() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const CATEGORIES = ["Work", "School", "Personal", "Other"];
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 16,
//   },
//   description: {
//     height: 100,
//     textAlignVertical: "top",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   categoryContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginBottom: 16,
//   },
//   categoryChip: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     backgroundColor: "#f0f0f0",
//     marginRight: 8,
//     marginBottom: 8,
//   },
//   categoryChipActive: {
//     backgroundColor: "#007bff",
//   },
//   categoryText: {
//     color: "#333",
//   },
//   categoryTextActive: {
//     color: "#fff",
//   },
// });
