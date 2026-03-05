import { ViewStyle } from "react-native";

type props = {
  color: string;
};

export const createShadows = ({ color }: props) =>
  ({
    // Ombre iOS
    shadowColor: color,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    // Ombre Android
    elevation: 5,
  }) satisfies ViewStyle;
