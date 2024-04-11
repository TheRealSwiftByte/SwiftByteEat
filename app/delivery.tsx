import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrepareFood from "../assets/images/prepare-food.svg";
import FindDriver from "../assets/images/find-driver.svg";
import OrderDelivery from "../assets/images/order-delivery.svg";
import OrderArrive from "../assets/images/order-arrive.svg";
import { SB_COLOR_SCHEME } from "@/constants";
import { restaurants } from "@/mock_data";

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
  const headings = [
    "Sit back and relax!\nYour food is being prepared",
    "Just one more step!",
    "Your order is on its way!",
    "Your driver has arrived!",
  ];
  const [heading, setHeading] = useState<string>(headings[0]);
  const [description, setDescription] = useState<string>("");
  const [currentProcess, setCurrentProcess] = useState<Status>(Status.PREPARE);
  const [driver, setDriver] = useState<Driver>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "500",
              color: SB_COLOR_SCHEME.SB_PRIMARY,
            }}
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 10,
              paddingVertical: 16,
            }}
          >
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={{
                  backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                  height: 4,
                }}
              ></View>
              <Text style={{ textAlign: "center" }}>{Status.PREPARE}</Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={{
                  backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                  height: 4,
                }}
              ></View>
              <Text style={{ textAlign: "center", lineHeight: 20 }}>
                {Status.FIND_DRIVER}
              </Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={{
                  backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                  height: 4,
                }}
              ></View>
              <Text style={{ textAlign: "center" }}>{Status.DELIVERY}</Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={{
                  backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                  height: 4,
                }}
              ></View>
              <Text style={{ textAlign: "center" }}>{Status.RECEIVE}</Text>
            </View>
          </View>
          <View style={{ width: '100%'}}>
            <Text style={{ fontWeight: 'bold' }}>Restaurant</Text>
            <Text>{restaurants[0].name}</Text>
            <Text>
              {restaurants[0].address.street}, {restaurants[0].address.city},{" "}
              {restaurants[0].address.state}, {restaurants[0].address.zipCode}
            </Text>
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
