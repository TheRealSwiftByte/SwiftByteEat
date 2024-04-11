import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SuccessIcon from "../assets/icons/icon-success.svg";
import { Link, router } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";

export default function success() {
  const isPresented = router.canGoBack();
  return (
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
          <Link href="/delivery" asChild onPress={() => router.back()}>
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
