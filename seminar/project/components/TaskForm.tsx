// components/TaskForm.tsx
import { View, Text, TextInput } from "react-native";
import CategoryPicker from "./CategoryPicker";
import { styles } from "../styles/shared";

interface Props {
  name: string;
  description: string;
  category: string;
  onNameChange: (text: string) => void;
  onDescriptionChange: (text: string) => void;
  onCategoryChange: (text: string) => void;
}

export default function TaskForm({
  name,
  description,
  category,
  onNameChange,
  onDescriptionChange,
  onCategoryChange,
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
    </View>
  );
}