import { Link, useFocusEffect, useRouter } from "expo-router";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import CategoryPicker from "@/components/CategoryPicker";
import { ALL_CATEGORY, Task } from "@/components/Types";
import { styles } from "@/styles/shared";

import { auth, db } from "@/firebaseConfig";
import AppButton from "@/components/AppButton";

export default function Home() {
  const userId = auth.currentUser!.uid;
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks.filter((t) => {
    const matchesCategory =
      filterCategory === ALL_CATEGORY || t.category === filterCategory;
    const matchesSearch = t.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <View style={styles.container}>
      <AppButton
        label="+ Add Task"
        href="/add_task"
        buttonStyle={styles.green}
      />
      <AppButton
        label="Categories"
        href="/categories"
        buttonStyle={styles.blue}
      />
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search tasks..."
      />
      <CategoryPicker selected={filterCategory} onSelect={setFilterCategory} />
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
