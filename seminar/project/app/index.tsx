import { Link, useFocusEffect, useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import CategoryPicker from "../components/CategoryPicker";
import { styles } from "../styles/shared";
import { auth, db } from "../firebaseConfig";

import { Task, Category } from "../components/Types";

const userId = auth.currentUser?.uid;

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterCategory, setFilterCategory] = useState("All");

  const [categories, setCategories] = useState<Category[]>([]);

  const filteredTasks =
    filterCategory === "All"
      ? tasks
      : tasks.filter((t) => t.category === filterCategory);

  const router = useRouter();

  const fetchTasks = () => {
    const userId = String(auth.currentUser?.uid);

    getDocs(collection(db, "users", userId, "tasks")).then((snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Task[];
      setTasks(taskList);
    });
  };

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
      },
    );
    return unsubscribe;
  }, [userId]);

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
      <TouchableOpacity style={styles.addButton}>
        <Link href="/categories" style={styles.addButtonText}>
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

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 24,
//   },
//   task: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   taskName: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   addButton: {
//     backgroundColor: "#28a745",
//     padding: 14,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   filterContainer: {
//     flexDirection: "row",
//     marginBottom: 16,
//   },
//   filterChip: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: "#f0f0f0",
//     marginRight: 8,
//   },
//   filterChipActive: {
//     backgroundColor: "#28a745",
//   },
//   filterText: {
//     fontSize: 14,
//   },
//   filterTextActive: {
//     color: "#fff",
//   },
//   category: {
//     color: "#666",
//     fontSize: 14,
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
