import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import NotificationBadge from "../../assets/icons/icon-notification-badge.svg";
import { SB_COLOR_SCHEME } from "@/constants";

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.dFlex}>
            <Text style={styles.title}>Cart</Text>
            <NotificationBadge />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
