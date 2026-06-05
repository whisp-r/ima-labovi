import { useLocalSearchParams, useRouter } from "expo-router";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { styles } from "@/styles/shared";

import TaskForm from "@/components/TaskForm";
import { auth, db } from "@/firebaseConfig";
import AppButton from "@/components/AppButton";

export default function EditTask() {
  const { id, name, description, done, category, priority } = useLocalSearchParams();

  const userId = auth.currentUser!.uid;
  const router = useRouter();

  // const [categories, setCategories] = useState<Category[]>([])

  const [taskName, setTaskName] = useState(name as string);
  const [taskDescription, setTaskDescription] = useState(description as string);
  const [isDone, setIsDone] = useState(done === "true");
  const [taskCategory, setTaskCategory] = useState(category as string);
  const [taskPriority, setTaskPriority] = useState((priority as string) || "Medium");

  const handleUpdate = async () => {
    if (!taskName.trim()) {
      Alert.alert("Error", "Task name is required");
      return;
    }
    await updateDoc(doc(db, "users", userId, "tasks", id as string), {
      name: taskName,
      description: taskDescription,
      done: isDone,
      category: taskCategory,
      priority: taskPriority
    });
    router.back();
  };

  const handleDelete = () => {
    Alert.alert("Delete Task", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          await deleteDoc(doc(db, "users", userId, "tasks", id as string));
          router.back();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TaskForm
        name={taskName}
        description={taskDescription}
        category={taskCategory}
        priority={taskPriority}
        onNameChange={setTaskName}
        onDescriptionChange={setTaskDescription}
        onCategoryChange={setTaskCategory}
        onPriorityChange={setTaskPriority}
      />

      <AppButton
        label={isDone ? "Mark as Incomplete" : "Mark as Complete"}
        onPress={() => {
          setIsDone(!isDone);
        }}
        buttonStyle={isDone ? styles.grey : styles.green}
      />

      <AppButton
        label="Save Changes"
        onPress={handleUpdate}
        buttonStyle={styles.blue}
      />
      <AppButton
        label="Delete Task"
        onPress={handleDelete}
        buttonStyle={styles.red}
      />
    </View>
  );
}
