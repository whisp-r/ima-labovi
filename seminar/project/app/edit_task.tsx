import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  doc,
  updateDoc,
  deleteDoc,
  getFirestore,
  onSnapshot,
  collection,
} from "firebase/firestore";

import "../firebaseConfig";
import { getAuth } from "firebase/auth";
import CategoryPicker from "../components/CategoryPicker";
import { styles } from "../styles/shared";

const db = getFirestore();
const auth = getAuth();

const userId = auth.currentUser?.uid;

interface Category {
  id: string;
  name: string;
}

export default function EditTask() {
  const router = useRouter();
  const { id, name, description, done, category } = useLocalSearchParams();

  const [categories, setCategories] = useState<Category[]>([]);

  const [taskName, setTaskName] = useState(name as string);
  const [taskDescription, setTaskDescription] = useState(description as string);
  const [isDone, setIsDone] = useState(done === "true");
  const [taskCategory, setTaskCategory] = useState(category as string);

  useEffect(() => {
    if (!userId) return;
    const unsubscribe = onSnapshot(
      collection(db, "users", userId, "categories"),
      (snapshot) => {
        const cats: Category[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setCategories(cats);
        if (cats.length > 0 && !category) {
          setTaskCategory(cats[0].name); // default to first category
        }
      },
    );
    return unsubscribe;
  }, [userId]);

  const handleUpdate = () => {
    if (!taskName.trim()) {
      Alert.alert("Error", "Task name is required");
      return;
    }
    updateDoc(doc(db, "users", userId!, "tasks", id as string), {
      name: taskName,
      description: taskDescription,
      done: isDone,
      category: taskCategory,
    });
    router.back();
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Task",
      "Are you sure?",
      [
        {
          text: "Delete",
          onPress: () => {
            deleteDoc(doc(db, "users", userId!, "tasks", id as string));
            router.back();
          },
        },
      ],
      { cancelable: true },
    );
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
      <Text style={styles.label}>Category</Text>
      <View style={styles.filterContainer}>
        <CategoryPicker selected={taskCategory} onSelect={setTaskCategory} />
      </View>
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
