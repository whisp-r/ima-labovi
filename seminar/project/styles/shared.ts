import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
  },

  filterContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: "#28a745",
  },
  filterText: {
    fontSize: 14,
  },
  filterTextActive: {
    color: "#fff",
  },
  category: {
    color: "#666",
    fontSize: 14,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    marginRight: 8,
    marginBottom: 8,
  },
  categoryChipActive: {
    backgroundColor: "#007bff",
  },
  categoryText: {
    color: "#333",
  },
  categoryTextActive: {
    color: "#fff",
  },
  container: { flex: 1, padding: 24 },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  description: { height: 100, textAlignVertical: "top" },
  statusButton: { padding: 14, alignItems: "center", marginBottom: 16 },
  statusText: { fontSize: 18 },
  
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  button: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 16,
    borderRadius: 8,
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  });
