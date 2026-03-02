import { colors } from "@/constants/theme";
import { useThemeStore } from "@/stores/themeStore";
import { useColorScheme } from "react-native";

export function useThemeColor() {
  const systemTheme = useColorScheme() ?? "light";
  const { theme: userTheme } = useThemeStore();
  const theme = userTheme === "system" ? systemTheme : userTheme;
  return colors[theme];
}
