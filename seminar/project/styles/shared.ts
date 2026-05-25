import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Layout
  container: { flex: 1, padding: 24 },
  row: { flexDirection: "row", alignItems: "center" },
  center: { justifyContent: "center", alignItems: "center" },

  // Inputs
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    width: "100%",
  },
  inputRow: { flexDirection: "row", marginBottom: 24, gap: 8 },
  inputFlex: { flex: 1 },
  description: { height: 100, textAlignVertical: "top" },

  // Buttons
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  blue: { backgroundColor: "#007bff" },
  green: { backgroundColor: "#28a745" },
  red: { backgroundColor: "#dc3545" },
  grey: { backgroundColor: "#6c757d" },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  deleteIcon: {
    fontSize: 18,
    color: "#dc3545",
    fontWeight: "bold",
    padding: 8,
  },

  // Chips
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  chipActive: { backgroundColor: "#28a745" },
  chipText: { fontSize: 14 },
  chipTextActive: { color: "#fff" },

  // Category picker
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  categoryChipActive: { backgroundColor: "#007bff" },
  categoryText: { color: "#333" },
  categoryTextActive: { color: "#fff" },

  // Task list
  task: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  taskName: { fontSize: 18, fontWeight: "bold" },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  category: { color: "#666", fontSize: 14 },
  statusButton: { padding: 14, alignItems: "center", marginBottom: 16 },
  statusText: { fontSize: 18 },
  checkbox: {
    marginRight: 12,
    padding: 4,
  },
  checkboxText: {
    fontSize: 35,
  },

  // Category list
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  categoryTextLarge: { fontSize: 16 },

  // Labels
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
});
