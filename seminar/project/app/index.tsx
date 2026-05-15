import { Link, useFocusEffect } from "expo-router";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";

import "../firebaseConfig";

const db = getFirestore();

interface Task {
  id: string;
  name: string;
  description: string;
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    getDocs(collection(db, "tasks")).then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(taskList);
    });
  };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, []),
  );

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.addButton}>
        <Link href="/add_task" style={styles.addButtonText}>
          + Add Task
        </Link>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text>{item.done ? "✅ Done" : "❌ Not done"}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
