import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Onboarding1 from "../assets/images/onboarding-1.svg";
import Onboarding2 from "../assets/images/onboarding-2.svg";

import { Link } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";

export default function onboarding() {
  const [currentStage, setStage] = useState<number>(1);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.container}>
        {currentStage == 1 ? <Onboarding1 /> : <Onboarding2 />}

        <Text style={{ fontSize: 24, fontWeight: "500", textAlign: "center" }}>
          {currentStage == 1
            ? "All your favourites"
            : "Fast delivery straight to your doorstep"}
        </Text>
        <Text style={{ fontSize: 16 }}>
          {currentStage == 1
            ? "We might have all of the food you want"
            : "Speed is our superpower"}
        </Text>
        {currentStage == 1 ? (
          <Button
            text={"Next"}
            type={"primary"}
            onPress={function (): void {
              setStage(2);
            }}
          ></Button>
        ) : (
          <Link href="/(tabs)" asChild>
            <Button
              text={"Start"}
              type={"primary"}
              onPress={function (): void {}}
            ></Button>
          </Link>
        )}
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
  },
  scrollView: {
    backgroundColor: "white",
  },
});
