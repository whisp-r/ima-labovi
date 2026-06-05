// components/TaskForm.tsx
import CategoryPicker from "@/components/CategoryPicker";
import { styles } from "@/styles/shared";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  description: string;
  category: string;
  priority: string;
  onNameChange: (text: string) => void;
  onDescriptionChange: (text: string) => void;
  onCategoryChange: (text: string) => void;
  onPriorityChange: (text: string) => void;
}

export default function TaskForm({
  name,
  description,
  category,
  priority,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
  onPriorityChange,
}: Props) {
  return (
    <View>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={onNameChange}
        placeholder="Task name"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.description]}
        value={description}
        onChangeText={onDescriptionChange}
        placeholder="Description"
        multiline
      />

      <Text style={styles.label}>Category</Text>
      <CategoryPicker selected={category} onSelect={onCategoryChange} />
      <Text style={styles.label}>Priority</Text>
      <View style={styles.row}>
        {["Low", "Medium", "High"].map((p) => (
          <TouchableOpacity
            key={p}
            style={[styles.chip, priority === p && styles.chipActive]}
            onPress={() => onPriorityChange(p)}
          >
            <Text
              style={[styles.chipText, priority === p && styles.chipTextActive]}
            >
              {p}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
