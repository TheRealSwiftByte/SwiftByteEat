import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { SB_COLOR_SCHEME } from "@/constants";
import { orders } from "@/mock_data";
import { router } from "expo-router";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* current order */}
          <View>
            <View
              style={{
                backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                padding: 10,
                width: "30%",
                borderRadius: 40,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: SB_COLOR_SCHEME.SB_PRIMARY,
                }}
              >
                Current
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {orders
                .filter((order) => order.status == "accepted")
                .map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.item}
                      onPress={() => router.navigate("/delivery")}
                    >
                      <Text>{item.restaurant.name}</Text>
                      <Text>
                        {item.eta.toLocaleTimeString()} |{"  "}
                        {item.deliveryPerson.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          </View>
          {/* completed order */}
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                padding: 10,
                width: "35%",
                borderRadius: 40,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: SB_COLOR_SCHEME.SB_SECONDARY,
                }}
              >
                Completed
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {orders
                .filter((order) => order.status == "completed")
                .map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.item}
                      onPress={() =>
                        router.navigate({
                          pathname: "/orderHistory",
                          params: { id: item.id },
                        })
                      }
                    >
                      <Text>{item.restaurant.name}</Text>
                      <Text>
                        {item.eta.toLocaleDateString()}{" "}
                        {item.eta.toLocaleTimeString()} |{"  "}
                        {item.deliveryPerson.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
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
  item: {
    backgroundColor: "#F2F2F7",
    borderRadius: 6,
    padding: 15,
    flex: 1,
    flexDirection: "column",
    gap: 8,
    marginBottom: 8,
  },
});
