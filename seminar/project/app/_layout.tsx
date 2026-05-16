import { Stack } from "expo-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import "../firebaseConfig";

const auth = getAuth();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user ? true : false);
    });
    return unsubscribe;
  }, []);

  if (isLoggedIn === null) return null;
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="add_task" options={{ title: "Add Task" }} />
        <Stack.Screen name="edit_task" options={{ title: "Edit Task" }} />
        <Stack.Screen name="categories" options={{ title: "Categories" }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
