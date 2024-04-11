import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrepareFood from "../assets/images/prepare-food.svg";
import FindDriver from "../assets/images/find-driver.svg";
import OrderDelivery from "../assets/images/order-delivery.svg";
import OrderArrive from "../assets/images/order-arrive.svg";

enum Status {
  PREPARE = "Preparing",
  FIND_DRIVER = "Finding Driver",
  DELIVERY = "Delivering",
  RECEIVE = "Received",
}

interface Driver {
  id: string;
  name: string;
  imageUrl: string;
  carName: string;
}

export default function delivery() {
  const [heading, setHeading] = useState<string>(
    "Sit back and relax!\nYour food is being prepared"
  );
  const [description, setDescription] = useState<string>("");
  const [currentProcess, setCurrentProcess] = useState<Status>(Status.PREPARE);
  const [driver, setDriver] = useState<Driver>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}
          >
            {heading}
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            {description}
          </Text>
          {currentProcess == Status.PREPARE ? (
            <PrepareFood />
          ) : currentProcess == Status.FIND_DRIVER ? (
            <FindDriver />
          ) : currentProcess == Status.DELIVERY ? (
            <OrderDelivery />
          ) : (
            <OrderArrive />
          )}
          <View>
            <View>
              <View></View>
              <Text>{Status.PREPARE}</Text>
            </View>
            <View>
              <View></View>
              <Text>{Status.FIND_DRIVER}</Text>
            </View>
            <View>
              <View></View>
              <Text>{Status.DELIVERY}</Text>
            </View>
            <View>
              <View></View>
              <Text>{Status.RECEIVE}</Text>
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
});
