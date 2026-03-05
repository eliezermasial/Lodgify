import { createShadows } from "@/constants/createShadows";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Row from "./Row";
import ThedText from "./ThedText";

export default function AccommodationBlock() {
  const themeColors = useThemeColor();
  const shaddows = createShadows({ color: themeColors.accentPrimary });
  return (
    <Row style={[styles.wrapper]}>
      <View style={styles.viewStyle}>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { backgroundColor: themeColors.backgroundTertiary },
            shaddows,
            pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
          ]}
        >
          <Image
            source={require("@/assets/images/iconHome.png")}
            style={styles.iconNotify}
          />
        </Pressable>
        <ThedText color="textSecondary" variant="caption">
          House
        </ThedText>
      </View>
      <View style={styles.viewStyle}>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { backgroundColor: themeColors.backgroundTertiary },
            shaddows,
            pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
          ]}
        >
          <Image
            source={require("@/assets/images/villa.png")}
            style={styles.iconNotify}
          />
        </Pressable>
        <ThedText color="textSecondary" variant="caption">
          villa
        </ThedText>
      </View>
      <View style={styles.viewStyle}>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { backgroundColor: themeColors.backgroundTertiary },
            shaddows,
            pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
          ]}
        >
          <Image
            source={require("@/assets/images/appart.png")}
            style={styles.iconNotify}
          />
        </Pressable>
        <ThedText color="textSecondary" variant="caption">
          appartement
        </ThedText>
      </View>
      <View style={styles.viewStyle}>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { backgroundColor: themeColors.backgroundTertiary },
            shaddows,
            pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
          ]}
        >
          <Image
            source={require("@/assets/images/cottage.png")}
            style={styles.iconNotify}
          />
        </Pressable>
        <ThedText color="textSecondary" variant="caption">
          cottage
        </ThedText>
      </View>
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    padding: 10,
  },
  viewStyle: {
    alignItems: "center",
    gap: 8,
  },
  pressableBtn: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  iconNotify: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
