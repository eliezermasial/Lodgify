import GroupIcon from "@/assets/images/Group.svg";
import HeartIcon from "@/assets/images/heart.svg";
import HomeIcon from "@/assets/images/modalHome.svg";
import UserIcon from "@/assets/images/user.svg";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Modal, Pressable, StyleSheet } from "react-native";
import Row from "./Row";
type props = {
  toggleModalVisible: () => void;
  modalVisible: boolean;
};

export default function ModalFooter({
  modalVisible,
  toggleModalVisible,
}: props) {
  const themeColors = useThemeColor();
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={toggleModalVisible}
    >
      {/* Overlay plein écran, fermeture de modal */}
      <Pressable
        onPress={toggleModalVisible}
        style={[
          styles.overlay,
          { backgroundColor: themeColors.backgroundModal },
        ]}
      >
        {/* Box du modal */}
        <Row gap={10} style={styles.modalView}>
          <Pressable
            style={({ pressed }) => [
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <HomeIcon width={24} height={24} color="red" />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <HeartIcon width={24} height={24} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <GroupIcon width={24} height={24} />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              pressed && { opacity: 0.7, transform: [{ scale: 0.95 }] },
            ]}
          >
            <UserIcon width={24} height={24} />
          </Pressable>
        </Row>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    justifyContent: "space-between",
    height: "13%",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
  },
});
