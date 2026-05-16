import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import "../firebaseConfig";

const auth = getAuth();
const db = getFirestore();
interface Category {
  id: string;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const userId = auth.currentUser?.uid;

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

  const addCategory = async () => {
    if (!newCategory.trim()) return;
    await addDoc(collection(db, "users", userId!, "categories"), {
      name: newCategory.trim(),
    });
    setNewCategory("");
  };

  const removeCategory = async (id: string) => {
    await deleteDoc(doc(db, "users", userId!, "categories", id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={newCategory}
          onChangeText={setNewCategory}
          placeholder="New category"
        />
        <TouchableOpacity style={styles.addButton} onPress={addCategory}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryRow}>
            <Text style={styles.categoryText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeCategory(item.id)}>
              <Text style={styles.deleteIcon}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 24,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#007bff",
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoryText: {
    fontSize: 16,
  },
  deleteIcon: {
    fontSize: 18,
    color: "#dc3545",
    fontWeight: "bold",
    padding: 8,
  },
});
