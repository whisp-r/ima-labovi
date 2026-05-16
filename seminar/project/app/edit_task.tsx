import { useLocalSearchParams, useRouter } from "expo-router";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { styles } from "@/styles/shared";

import TaskForm from "@/components/TaskForm";
import { auth, db } from "@/firebaseConfig";

export default function EditTask() {
  const { id, name, description, done, category } = useLocalSearchParams();

  const userId = auth.currentUser!.uid;
  const router = useRouter();

  // const [categories, setCategories] = useState<Category[]>([])

  const [taskName, setTaskName] = useState(name as string);
  const [taskDescription, setTaskDescription] = useState(description as string);
  const [isDone, setIsDone] = useState(done === "true");
  const [taskCategory, setTaskCategory] = useState(category as string);

  const handleUpdate = () => {
    if (!taskName.trim()) {
      Alert.alert("Error", "Task name is required");
      return;
    }
    updateDoc(doc(db, "users", userId, "tasks", id as string), {
      name: taskName,
      description: taskDescription,
      done: isDone,
      category: taskCategory,
    });
    router.back();
  };

  const handleDelete = () => {
    deleteDoc(doc(db, "users", userId, "tasks", id as string));
    router.back();
  };

  return (
    <View style={styles.container}>
      <TaskForm
        name={taskName}
        description={taskDescription}
        category={taskCategory}
        onNameChange={setTaskName}
        onDescriptionChange={setTaskDescription}
        onCategoryChange={setTaskCategory}
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
        <Text style={styles.buttonText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
}
