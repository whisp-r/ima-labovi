import { Stack } from "expo-router";

const isLoggedIn = false;

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="palette" options={{ title: "Palette" }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="sign_in" options={{ title: "Sign In" }} />
      </Stack.Protected>
    </Stack>
  );
}
