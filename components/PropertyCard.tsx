import {
    ImageBackground,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import ThedText from "./ThedText";

type Props = {
  image: any;
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
};

export default function PropertyCard({ image, title, subtitle, style }: Props) {
  return (
    <ImageBackground
      source={image}
      style={[styles.card, style]}
      imageStyle={styles.image}
    >
      <View style={styles.overlay}>
        <ThedText color="textLight" variant="headline">
          {title}
        </ThedText>

        <ThedText color="textLight" variant="caption">
          {subtitle}
        </ThedText>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 160,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 18,
  },
  overlay: {
    padding: 12,
  },
});
