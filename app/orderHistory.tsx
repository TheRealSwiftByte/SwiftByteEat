import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { MenuItem, Order, orders } from "@/mock_data";
import { useLocalSearchParams } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";

export default function orderHistory() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [order, setOrder] = useState<Order>();
  const [items, setItems] = useState<
    {
      item: MenuItem | undefined;
      count: number;
    }[]
  >();

  useEffect(() => {
    if (id) {
      const ord = orders.find((item) => item.id == id);
      setOrder(ord);
      const itemIdCounts: { [itemId: string]: number } = {};

      ord?.items.forEach((item) => {
        const itemId = item.id.toString();
        itemIdCounts[itemId] = (itemIdCounts[itemId] || 0) + 1;
      });

      const temp: {
        item: MenuItem | undefined;
        count: number;
      }[] = Object.keys(itemIdCounts).map((itemId) => ({
        item: ord?.items.find((i) => i.id == itemId),
        count: itemIdCounts[itemId],
      }));

      setItems(temp);
      console.log(temp, order);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              marginBottom: 8,
              padding: 18,
              borderRadius: 10,
              backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
              gap: 20
            }}
          >
            <View style={{ paddingLeft: 4, flex: 2 }}>
              <Text style={{ marginBottom: 8, fontWeight: "500" }}>
                {order?.deliveryPerson.name}
              </Text>
              <Text>{order?.deliveryPerson.carName}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                padding: 10,
                borderRadius: 40,
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                height: 40,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: SB_COLOR_SCHEME.SB_SECONDARY,
                }}
              >
                Rate
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "flex-end",
              gap: 20,
            }}
          >
            <View>
              <Text style={styles.subtitle}>Restaurant</Text>
              <Text style={{ marginTop: 8 }}>{order?.restaurant.name}</Text>
              <Text style={{ lineHeight: 25 }}>
                {order?.restaurant.address.street},{" "}
                {order?.restaurant.address.city},{" "}
                {order?.restaurant.address.state},{" "}
                {order?.restaurant.address.zipCode}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                padding: 10,

                borderRadius: 40,
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                height: 40,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: SB_COLOR_SCHEME.SB_PRIMARY,
                }}
              >
                Rate
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={styles.subtitle}>Delivery Address</Text>
            <Text style={{ lineHeight: 25, marginTop: 8 }}>
              {order?.deliveryAddress}
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={styles.subtitle}>Delivery Instruction</Text>
            <Text style={{ lineHeight: 25, marginTop: 8 }}>
              {order?.deliveryInstruction}
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={styles.subtitle}>Order Summary</Text>
            <View>
              {items?.map((item) => {
                return (
                  <View key={item.item?.id} style={styles.summaryItem}>
                    <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                      {item.count}x {item.item?.name}
                    </Text>
                    <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                      $
                      {item.item?.price
                        ? item.item?.price * item.count
                        : item.item?.price}
                    </Text>
                  </View>
                );
              })}
              <View style={styles.summaryItem}>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  Delivery Fee
                </Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  ${((order?.netTotal ?? 0) * 0.05).toFixed(2)}
                </Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>VAT</Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  ${order?.tax.toFixed(2)}
                </Text>
              </View>
              <View
                style={
                  order?.promoCode ? styles.summaryItem : { display: "none" }
                }
              >
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  Coupon
                </Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  -${order?.discount}
                </Text>
              </View>
              <View style={[styles.summaryItem, { borderBottomWidth: 0 }]}>
                <Text
                  style={{
                    color: SB_COLOR_SCHEME.SB_PRIMARY,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    color: SB_COLOR_SCHEME.SB_PRIMARY,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  ${order?.netTotal}
                </Text>
              </View>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
  scrollView: {
    backgroundColor: "white",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
  summaryItem: {
    paddingVertical: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: SB_COLOR_SCHEME.SB_SEPARATOR,
    borderBottomWidth: 1,
  },
});
