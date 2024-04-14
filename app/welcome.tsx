import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import Welcome from "../assets/images/welcome.svg";
import Logo from "../assets/images/logo-green.svg";
import { Link, router } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";

export default function welcome() {
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY }}
    >
      <View style={styles.container}>
        <Logo width={200} height={50} />
        <Welcome />
        <View>
          <Link href="/(tabs)" asChild onPress={() => router.back()}>
            <Button
              text={"Sign In"}
              type={"secondary"}
              onPress={function (): void {}}
            ></Button>
          </Link>
          <Link href="/(tabs)" asChild onPress={() => router.back()}>
            <Button
              text={"Sign Up"}
              type={"primary"}
              onPress={function (): void {}}
            ></Button>
          </Link>
        </View>
      </View>
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
    gap: 25,
    backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
  },
  scrollView: {
    backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
  },
});
