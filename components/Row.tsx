import { View, ViewProps } from "react-native";

type props = {
  gap?: number;
};
type RowProps = props & ViewProps;
export default function Row({ gap, style, ...rest }: RowProps) {
  return (
    <View style={[styles, gap ? { gap } : undefined, , style]} {...rest} />
  );
}

const styles = {
  flex: 0,
  flexDirection: "row",
  alignItems: "center",
} satisfies ViewProps["style"];
