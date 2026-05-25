import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Category } from "@/components/Types";
import { styles } from "@/styles/shared";
import { auth, db } from "@/firebaseConfig";
import AppButton from "@/components/AppButton";

export default function Categories() {
  const userId = auth.currentUser!.uid;

  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
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
    
    const exists = categories.some(
      (cat) => cat.name.toLowerCase() === newCategory.trim().toLowerCase(),
    );
    if (exists) {
      Alert.alert("Error", "Category already exists");
      return;
    }

    await addDoc(collection(db, "users", userId, "categories"), {
      name: newCategory.trim(),
    });
    setNewCategory("");
  };

  const removeCategory = async (id: string) => {
    await deleteDoc(doc(db, "users", userId, "categories", id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, styles.inputFlex, { marginBottom: 0 }]}
          value={newCategory}
          onChangeText={setNewCategory}
          placeholder="New category"
        />
        <TouchableOpacity
          style={[styles.circleButton, styles.blue]}
          onPress={addCategory}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryRow}>
            <Text style={styles.categoryTextLarge}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeCategory(item.id)}>
              <Text style={styles.deleteIcon}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
