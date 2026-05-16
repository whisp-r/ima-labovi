import { Link, useFocusEffect, useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import CategoryPicker from "../components/CategoryPicker";
import { ALL_CATEGORY, Task } from "../components/Types";
import { styles } from "../styles/shared";

import { auth, db } from "../firebaseConfig";

export default function Home() {
  const userId = auth.currentUser!.uid;
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredTasks =
    filterCategory === ALL_CATEGORY
      ? tasks
      : tasks.filter((t) => t.category === filterCategory);

  const fetchTasks = () => {
    getDocs(collection(db, "users", userId, "tasks")).then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(taskList);
    });
  };

  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, []),
  );

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.button}>
        <Link href="/add_task" style={styles.buttonText}>
          + Add Task
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/categories" style={styles.buttonText}>
          Categories
        </Link>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <CategoryPicker
          selected={filterCategory}
          onSelect={setFilterCategory}
        />
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.task}
            onPress={() =>
              router.push({
                pathname: "/edit_task",
                params: {
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  done: String(item.done),
                  category: item.category,
                },
              })
            }
          >
            <Text style={styles.taskName}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text>{item.done ? "✅ Done" : "❌ Not done"}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
