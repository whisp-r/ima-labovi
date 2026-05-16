export interface Task {
  id: string;
  name: string;
  description: string;
  done: boolean;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export const ALL_CATEGORY = "All";