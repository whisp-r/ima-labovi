import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { doc, updateDoc, deleteDoc, getFirestore } from "firebase/firestore";

import "../firebaseConfig";
const db = getFirestore();

export default function EditTask() {
  const router = useRouter();
  const { id, name, description, done } = useLocalSearchParams();

  const [taskName, setTaskName] = useState(name as string);
  const [taskDescription, setTaskDescription] = useState(description as string);
  const [isDone, setIsDone] = useState(done === "true");

  const handleUpdate = () => {
    updateDoc(doc(db, "tasks", id as string), {
      name: taskName,
      description: taskDescription,
      done: isDone,
    });
  };

const handleDelete = () => {
  console.log("1. handleDelete called");
  console.log("2. task id:", id);

  // Try without cancel button first
//   Alert.alert(
//     "Delete Task",
//     "Are you sure?",
//     [
//       {
//         text: "Delete",
//         onPress: () => {
//           console.log("Delete confirmed");
//           deleteDoc(doc(db, "tasks", id as string));
//         },
//       },
//     ],
//     { cancelable: true }
//   );
    Alert.alert("test");
};

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={taskName}
        onChangeText={setTaskName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.description]}
        value={taskDescription}
        onChangeText={setTaskDescription}
        multiline
      />

      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => setIsDone(!isDone)}
      >
        <Text style={styles.statusText}>
          {isDone ? "✅ Done" : "❌ Not done"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  description: { height: 100, textAlignVertical: "top" },
  statusButton: { padding: 14, alignItems: "center", marginBottom: 16 },
  statusText: { fontSize: 18 },
  button: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
