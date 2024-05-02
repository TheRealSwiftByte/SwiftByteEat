import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { router } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AddCardDetails from "@/components/AddCardDetails";

export default function AddCard() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{ paddingBottom: 24 }}>
            <AddCardDetails />
          </View>

          <Button
            text={"Add"}
            type={"primary"}
            onPress={() => router.navigate("/PaymentMethod")}
          ></Button>
        </View>
      </KeyboardAwareScrollView>
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
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
});
