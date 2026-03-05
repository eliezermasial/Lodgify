import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import PropertyCard from "./PropertyCard";
import Row from "./Row";
import ThedText from "./ThedText";

export default function PopularSection() {
  return (
    <View style={styles.container}>
      <Row style={{ justifyContent: "space-between" }}>
        <ThedText color="textSecondary" variant="headline">
          Popular Apartments
        </ThedText>
        <Link href={"/"}>
          <ThedText color="accentPrimary" variant="headline">
            See more
          </ThedText>
        </Link>
      </Row>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <PropertyCard
          image={require("@/assets/images/card1.png")}
          title="Apartemen Casena"
          subtitle="Lebih lanjut"
          style={styles.bigCard}
        />

        <PropertyCard
          image={require("@/assets/images/card1.png")}
          title="Apartemen Global"
          subtitle="Lebih lanjut"
          style={styles.bigCard}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  scroll: {
    gap: 16,
    marginTop: 12,
  },

  bigCard: {
    width: 260,
  },
});
