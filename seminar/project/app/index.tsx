import { useFocusEffect, useRouter } from "expo-router";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
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

import AppButton from "@/components/AppButton";
import { auth, db } from "@/firebaseConfig";

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
  const toggleDone = async (task: Task) => {
    await updateDoc(doc(db, "users", userId, "tasks", task.id), {
      done: !task.done,
    });
    fetchTasks();
  };

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
          <View style={styles.taskRow}>
            <TouchableOpacity
              onPress={() => toggleDone(item)}
              style={styles.checkbox}
            >
              <Text style={styles.checkboxText}>{item.done ? "☑" : "☐"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
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
              <Text style={[styles.taskName, item.done && styles.taskDone]}>
                {item.name}
              </Text>
              <Text style={styles.category}>{item.category}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
