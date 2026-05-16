import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";
import { Category } from "../components/Types";

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryPicker({ selected, onSelect }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (!userId) return;
    const unsubscribe = onSnapshot(
      collection(db, "users", userId, "categories"),
      (snapshot) => {
        const cats = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }));
        setCategories(cats);
      },
    );
    return unsubscribe;
  }, [userId]);

  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={[styles.chip, selected === cat.name && styles.chipActive]}
          onPress={() => onSelect(cat.name)}
        >
          <Text
            style={[styles.text, selected === cat.name && styles.textActive]}
          >
            {cat.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", marginBottom: 16 },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: { backgroundColor: "#007bff" },
  text: { color: "#333" },
  textActive: { color: "#fff" },
});
