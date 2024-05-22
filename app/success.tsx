import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import SuccessIcon from "../assets/icons/icon-success.svg";
import { Link, router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";
import { SB_COLOR_SCHEME } from "@/constants";
import ChatIcon from "../assets/icons/icon-chat.svg";
import { Rating } from "react-native-ratings";
import { Api } from "@/api/api";
import { Order } from "@/api/schema/SwiftByteTypes";

export default function success() {
  const { type } = useLocalSearchParams<{ type: string }>();
  const [activeOrder, setActiveOrder] = useState<Order | undefined>(undefined);

  useFocusEffect(useCallback(()=>{
    //create order on server
    Api.getApi().createOrder().then((order) => {
      setActiveOrder(order);
    });
  }, []))

  function ratingCompleted(rating: any) {
    console.log("Rating is: " + rating);
  }

  return type == "delivery" ? (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SuccessIcon />
          <Text style={{ fontSize: 20 }}>Order done!</Text>
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>
            How was your order today?
          </Text>
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
            }}
          >
            <View style={{ paddingLeft: 4 }}>
              <Text style={{ marginBottom: 8, fontWeight: "500" }}>
                Henry Earls
              </Text>
              <Text>Red Mazda 3 (64SEAT)</Text>
            </View>
            <ChatIcon />
          </View>
          <View style={styles.row}>
            <Text>My Rating</Text>
            <Rating
              onFinishRating={ratingCompleted}
              startingValue={0}
              imageSize={20}
              ratingColor={SB_COLOR_SCHEME.SB_SECONDARY}
              ratingBackgroundColor={SB_COLOR_SCHEME.SB_SECONDARY}
              style={{ paddingVertical: 10 }}
            />
          </View>
          <View style={styles.row}>
            <Text>Delivery Time</Text>
            <Text style={{ fontWeight: "600" }}>25-02-2023, 13:22:16</Text>
          </View>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Link href="/(tabs)" asChild onPress={() => router.back()}>
            <Button
              text={"OK"}
              type={"primary"}
              onPress={function (): void {}}
              buttonStyle={{ width: "100%" }}
            ></Button>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SuccessIcon />
          <Text style={{ fontSize: 20 }}>Payment Success!</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>$45.49</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text>Ref Number</Text>
            <Text style={{ fontWeight: "600" }}>000085752257</Text>
          </View>
          <View style={styles.row}>
            <Text>Payment Time</Text>
            <Text style={{ fontWeight: "600" }}>25-02-2023, 13:22:16</Text>
          </View>
          <View style={styles.row}>
            <Text>Payment Method</Text>
            <Text style={{ fontWeight: "600" }}>Credit Card</Text>
          </View>
        </View>
        <View style={[styles.container, { borderBottomWidth: 0 }]}>
          <Link href={{ pathname: "/delivery/[id]", params: { id: activeOrder?.id || "-1"} }} asChild onPress={() => router.back()}>
            <Button
              text={"OK"}
              type={"primary"}
              onPress={function (): void {}}
              buttonStyle={{ width: "100%" }}
            ></Button>
          </Link>
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
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 1,
  },
  scrollView: {
    backgroundColor: "white",
    width: "100%",
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
