import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { notifications } from "@/mock_data";
import IconBadge from "../assets/icons/icon-badge.svg";

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {notifications.sort().map((item) => {
            return (
              <View key={item.id} style={styles.item}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                  {item.isNew ? <IconBadge /> : null}
                </View>

                <Text style={{ fontSize: 12 }}>{item.createdAt}</Text>
                <Text style={{ paddingBottom: 8 }}>{item.description}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20,
    width: "100%",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 4,
  },
  item: {
    borderRadius: 6,
    padding: 15,
    flex: 1,
    flexDirection: "column",
    gap: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F7",
  },
  scrollView: {
    backgroundColor: "white",
  },
});
