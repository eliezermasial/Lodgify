import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import PropertyCard from "./PropertyCard";
import Row from "./Row";
import ThedText from "./ThedText";

export default function ReadyHouseSection() {
  return (
    <View style={styles.container}>
      <Row style={{ justifyContent: "space-between" }}>
        <ThedText color="textSecondary" variant="headline">
          Ready to Move Houses
        </ThedText>
        <Link href={"/"}>
          <ThedText color="accentPrimary" variant="headline">
            See All
          </ThedText>
        </Link>
      </Row>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <Row gap={20}>
          <PropertyCard
            image={require("@/assets/images/card2.png")}
            title="Royal Pride"
            subtitle="Lebih lanjut"
            style={styles.smallCard}
          />
          <PropertyCard
            image={require("@/assets/images/card2.png")}
            title="Ampeldentown"
            subtitle="Lebih lanjut"
            style={styles.smallCard}
          />
          <PropertyCard
            image={require("@/assets/images/card2.png")}
            title="Presiden"
            subtitle="Lebih lanjut"
            style={styles.smallCard}
          />
        </Row>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  smallCard: {
    width: 143,
    height: 202,
  },
  scroll: {
    gap: 16,
    marginTop: 12,
  },
});
