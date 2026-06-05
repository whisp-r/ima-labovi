export interface Task {
  id: string;
  name: string;
  description: string;
  done: boolean;
  category: string;
  priority: "Low" | "Medium" | "High";
}

export interface Category {
  id: string;
  name: string;
}

export const ALL_CATEGORY = "All";