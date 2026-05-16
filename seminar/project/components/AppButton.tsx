import { useRouter } from "expo-router";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "../styles/shared";

interface Props {
  label: string;
  onPress?: () => void;
  href?: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

export default function AppButton({
  label,
  onPress,
  href,
  buttonStyle,
}: Props) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) onPress();
    if (href) router.push(href);
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
