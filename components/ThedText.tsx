import { colors } from "@/constants/theme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type props = TextProps & {
  color: keyof typeof colors.light | keyof typeof colors.dark;
  variant?: keyof typeof styles;
};

type typographyStyles = {
  caption: TextStyle;
  body: TextStyle;
  subheading: TextStyle;
  headline: TextStyle;
  secondaryHeadline: TextStyle;
  display: TextStyle;
};

export default function ThedText({ color, variant, style, ...rest }: props) {
  const themecolors = useThemeColor();
  return (
    <Text
      style={[
        { color: themecolors[color ?? "textPrimary"] },
        styles[variant ?? "body"],
        style,
      ]}
      {...rest}
    />
  );
}

const styles: typographyStyles = StyleSheet.create({
  caption: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20, // 14 * 1.4
    letterSpacing: 0.2,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 26, // 16 * 1.6
    letterSpacing: 0,
  },
  subheading: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27, // 18 * 1.5
    letterSpacing: 0,
  },
  headline: {
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 29, // 22 * 1.3
    letterSpacing: -0.2,
  },
  secondaryHeadline: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 35, // 28 * 1.25
    letterSpacing: -0.3,
  },
  display: {
    fontSize: 36,
    fontWeight: "700",
    lineHeight: 43, // 36 * 1.2
    letterSpacing: -0.5,
  },
});
