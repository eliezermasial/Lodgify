import AccommodationBlock from "@/components/AccommodationBlock";
import ModalFooter from "@/components/ModalFooter";
import RootView from "@/components/RootView";
import Row from "@/components/Row";
import SearchBar from "@/components/Searchbar";
import ThedText from "@/components/ThedText";
import { createShadows } from "@/constants/createShadows";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Index() {
  const themeColors = useThemeColor();
  const shaddows = createShadows({ color: themeColors.border });
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <RootView>
        <Row style={styles.header}>
          <ThedText color="textPrimary" variant="headline">
            Hello Bonibarbar
          </ThedText>
          <Pressable
            style={({ pressed }) => [
              styles.pressableBtn,
              { backgroundColor: themeColors.backgroundTertiary },
              shaddows,
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <Image
              source={require("@/assets/images/notify.png")}
              style={styles.iconNotify}
            />
          </Pressable>
        </Row>
        <Row gap={15}>
          <SearchBar />
          <Pressable
            onPress={toggleModalVisible}
            style={({ pressed }) => [
              styles.PressablaSearcBtn,
              { backgroundColor: themeColors.accentPrimary },
              shaddows,
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <Image
              source={require("@/assets/images/searchBtn.png")}
              style={styles.iconSearchBtn}
            />
          </Pressable>
        </Row>
        <AccommodationBlock />
        <ModalFooter
          modalVisible={modalVisible}
          toggleModalVisible={toggleModalVisible}
        />
      </RootView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    paddingTop: 50,
  },
  pressableBtn: {
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  iconNotify: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  PressablaSearcBtn: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  iconSearchBtn: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
