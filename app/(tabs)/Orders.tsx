import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { Text, View } from "@/components/Themed";
import { SB_COLOR_SCHEME } from "@/constants";
import { Link, router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Api } from "@/api/api";
import { Order } from "@/api/schema/SwiftByteTypes";

export default function OrdersScreen() {
  const [orders, setOrders]: [Order[], any] = useState([]);
  const api: Api = Api.getApi();

  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(useCallback(() => {
    console.log('triggered focus effect')
    setIsLoading(true)
    const customerId = api.getActiveCustomer()?.id;
    if (!customerId) return;
    api.getOrders(customerId).then((orders):any => {
      setIsLoading(false)
      console.log("WIthin screen orders = ", orders);
      setOrders(orders);
    });
  }, []))

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/images/loading.gif")} resizeMode="contain" style={{width:"100%", height:"100%"}}/>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} >
        <View style={styles.container}>
        <View>
            <View
              style={{
                backgroundColor: SB_COLOR_SCHEME.SB_TERTIARY,
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
                Pending
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              {orders?.filter((order) => order.orderStatus == "pending")
                .map((item) => {
                  return (
                    <Link href={{ pathname: "/delivery/[id]", params: { id: item.id } }} key={item.id} asChild>
                      <TouchableOpacity
                        style={styles.item}
                      >
                        <Text>{item.restaurant.name}</Text>
                      </TouchableOpacity>
                    </Link>
                  );
                })}
            </View>
          </View>
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
              {orders?.filter((order) => order.orderStatus == "accepted")
                .map((item) => {
                  return (
                    <Link href={{ pathname: "/delivery/[id]", params: { id: item.id } }} key={item.id} asChild>
                      <TouchableOpacity
                        style={styles.item}
                      >
                        <Text>{item.restaurant.name}</Text>
                      </TouchableOpacity>
                    </Link>
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
              {orders?.filter((order) => order.orderStatus == "completed")
                .map((item) => {
                  return (
                    <Link href={"/orderHistory"} key={item.id} asChild>
                      <TouchableOpacity
                        style={styles.item}
                      >
                        <Text>{item.restaurant.name}</Text>
                        <Text>
                          {item.orderDate && (new Date(item.orderDate).toLocaleDateString()) + " - " + (new Date(item.orderDate).toLocaleTimeString()) + "\n"}

                          {item.deliveryAddress}
                        </Text>
                      </TouchableOpacity>
                    </Link>
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
