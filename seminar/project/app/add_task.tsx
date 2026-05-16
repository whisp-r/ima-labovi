import { useRouter } from "expo-router";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/shared";

import { ALL_CATEGORY } from "@/components/Types";
import TaskForm from "@/components/TaskForm";
import { auth, db } from "@/firebaseConfig";

export default function AddTask() {
  const userId = auth.currentUser!.uid;
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORY);

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
      <TaskForm
        name={name}
        description={description}
        category={category}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onCategoryChange={setCategory}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
