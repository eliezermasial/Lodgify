import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, View, ViewProps } from "react-native";

type props = ViewProps;

export default function RootView({ style, ...rest }: props) {
  const colors = useThemeColor();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgroundPrimary },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
