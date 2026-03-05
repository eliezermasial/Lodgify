import { createShadows } from "@/constants/createShadows";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { Image, StyleSheet, TextInput } from "react-native";
import Row from "./Row";

export default function SearchBar() {
  const [text, onChangeValue] = useState("");
  const themeColors = useThemeColor();
  const shaddows = createShadows({ color: themeColors.border });
  return (
    <Row
      gap={6}
      style={[
        styles.wrapper,
        {
          backgroundColor: themeColors.backgroundTertiary,
          borderBlockColor: themeColors.border,
        },
        shaddows,
      ]}
    >
      <Image
        source={require("@/assets/images/search.png")}
        style={styles.iconSearch}
      />
      <TextInput
        value={text}
        onChangeText={onChangeValue}
        placeholder="Search apartemen Populer"
        placeholderTextColor={themeColors.textSecondary}
        style={[styles.input, { color: themeColors.textSecondary }]}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 1,
    width: 280,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    lineHeight: 16,
    fontSize: 16,
    paddingVertical: 15,
    paddingLeft: 15,
    height: "100%",
  },
});
