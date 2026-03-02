import RootView from "@/components/RootView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useThemeStore } from "@/stores/themeStore";
import { Button, Text } from "react-native";
export default function Index() {
  const colors = useThemeColor();
  const { setTheme } = useThemeStore();
  console.log(colors);
  return (
    <RootView>
      <Text style={{ color: colors.error }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Button title="Thème clair" onPress={() => setTheme("light")} />
      <Button title="Thème sombre" onPress={() => setTheme("dark")} />
      <Button title="Suivre le système" onPress={() => setTheme("system")} />
    </RootView>
  );
}
