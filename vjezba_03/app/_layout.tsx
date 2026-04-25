import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Palette" }} />
      <Stack.Screen name="palette" options={{ title: "Rainbow" }} />
    </Stack>
  );
}
