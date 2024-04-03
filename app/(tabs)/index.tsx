import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import NotificationBadge from "../../assets/icons/icon-notification-badge.svg";
import { SB_COLOR_SCHEME } from "@/constants";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.dFlex}>
        <Text style={styles.title}>Home</Text>
        <NotificationBadge />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
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
    alignItems: 'center'
  },
});
