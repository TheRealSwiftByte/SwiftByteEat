import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PrepareFood from "../assets/images/prepare-food.svg";
import FindDriver from "../assets/images/find-driver.svg";
import OrderDelivery from "../assets/images/order-delivery.svg";
import OrderArrive from "../assets/images/order-arrive.svg";
import { SB_COLOR_SCHEME } from "@/constants";
import { MenuItem, cart, promoCode, restaurants } from "@/mock_data";
import { Link, router } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";
import ChatIcon from "../assets/icons/icon-chat.svg";

enum Status {
  PREPARE = "Preparing",
  FIND_DRIVER = "Finding Driver",
  DELIVERY = "Delivering",
  RECEIVE = "Received",
}

interface Driver {
  id: string;
  name: string;
  carName: string;
}

export default function delivery() {
  const headings = [
    "Sit back and relax!\nYour food is being prepared",
    "Just one more step!",
    "Your order is on its way!",
    "Your driver has arrived!",
  ];
  const driver_tmp = {
    id: "SB-234KT",
    name: "Henry Earls",
    carName: "Red Mazda 3 (64SEAT)",
  };
  const [heading, setHeading] = useState<string>(headings[0]);
  const [description, setDescription] = useState<string>("");
  const [currentProcess, setCurrentProcess] = useState<Status>(Status.PREPARE);
  const [driver, setDriver] = useState<Driver>();

  const itemIdCounts: { [itemId: string]: number } = {};

  useEffect(() => {
    setTimeout(() => {
      setCurrentProcess(Status.PREPARE);
      setHeading(headings[0]);
      setDescription("");
    }, 500);

    setTimeout(() => {
      setCurrentProcess(Status.FIND_DRIVER);
      setHeading(headings[1]);
      setDescription("Looking for your driver");
    }, 10000);

    setTimeout(() => {
      setCurrentProcess(Status.DELIVERY);
      setHeading(headings[2]);
      setDescription("");
      setDriver(driver_tmp);
    }, 20000);

    setTimeout(() => {
      setCurrentProcess(Status.RECEIVE);
      setHeading(headings[3]);
      setDescription("");
    }, 30000);

    setTimeout(() => {
      router.navigate({ pathname: "/success", params: { type: "delivery" } });
    }, 40000);
  }, []);

  cart.items.forEach((item) => {
    const itemId = item.id.toString();
    itemIdCounts[itemId] = (itemIdCounts[itemId] || 0) + 1;
  });

  const myItems: {
    item: MenuItem | undefined;
    count: number;
  }[] = Object.keys(itemIdCounts).map((itemId) => ({
    item: cart.items.find((i) => i.id == itemId),
    count: itemIdCounts[itemId],
  }));

  const getDeliveryFee = () => {
    let total = 0;
    myItems.forEach((food) => {
      if (food.item?.price) {
        total += food.count * food.item?.price;
      }
    });
    return total * 0.04;
  };

  const getVAT = () => {
    let total = 0;
    myItems.forEach((food) => {
      if (food.item?.price) {
        total += food.count * food.item?.price;
      }
    });
    return total * 0.05;
  };

  const getTotal = () => {
    let total = 0;

    total += getVAT();
    total += getDeliveryFee();

    myItems.forEach((food) => {
      if (food.item?.price) {
        total += food.count * food.item?.price;
      }
    });

    return total;
  };

  return (
    <SafeAreaView>
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
          <Text
            style={
              description
                ? { textAlign: "center", fontSize: 16 }
                : { display: "none" }
            }
          >
            {description}
          </Text>
          <View style={{ marginTop: 4 }}>
            {currentProcess == Status.PREPARE ? (
              <PrepareFood />
            ) : currentProcess == Status.FIND_DRIVER ? (
              <FindDriver />
            ) : currentProcess == Status.DELIVERY ? (
              <OrderDelivery />
            ) : (
              <OrderArrive />
            )}
          </View>

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
                style={
                  currentProcess == Status.PREPARE
                    ? {
                        backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                        height: 4,
                      }
                    : {
                        backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                        height: 4,
                      }
                }
              ></View>
              <Text style={{ textAlign: "center", lineHeight: 20 }}>
                {Status.FIND_DRIVER}
              </Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={
                  currentProcess == Status.DELIVERY ||
                  currentProcess == Status.RECEIVE
                    ? {
                        backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                        height: 4,
                      }
                    : {
                        backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                        height: 4,
                      }
                }
              ></View>
              <Text style={{ textAlign: "center" }}>{Status.DELIVERY}</Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
              <View
                style={
                  currentProcess == Status.RECEIVE
                    ? {
                        backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                        height: 4,
                      }
                    : {
                        backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                        height: 4,
                      }
                }
              ></View>
              <Text style={{ textAlign: "center" }}>{Status.RECEIVE}</Text>
            </View>
          </View>
          <View
            style={
              currentProcess == Status.DELIVERY ||
              currentProcess == Status.RECEIVE
                ? {
                    width: "100%",
                    marginBottom: 8,
                    padding: 18,
                    borderRadius: 10,
                    backgroundColor: SB_COLOR_SCHEME.SB_SECONDARY,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }
                : { display: "none" }
            }
          >
            <View style={{ paddingLeft: 4 }}>
              <Text style={{ marginBottom: 8, fontWeight: "500" }}>
                {driver?.name}
              </Text>
              <Text>{driver?.carName}</Text>
            </View>
            <ChatIcon />
          </View>
          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={styles.subtitle}>Restaurant</Text>
            <Text style={{ marginTop: 8 }}>{restaurants[0].name}</Text>
            <Text style={{ lineHeight: 25 }}>
              {restaurants[0].address.street}, {restaurants[0].address.city},{" "}
              {restaurants[0].address.state}, {restaurants[0].address.zipCode}
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={styles.subtitle}>Delivery Address</Text>
            <Text style={{ lineHeight: 25, marginTop: 8 }}>
              3 Crown Street, Wollongong
            </Text>
          </View>
          <View style={{ width: "100%", marginBottom: 8 }}>
            <Text style={styles.subtitle}>Delivery Instruction</Text>
            <Text style={{ lineHeight: 25, marginTop: 8 }}>
              Leave at the door
            </Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={styles.subtitle}>Order Summary</Text>
            <View>
              {myItems.map((item) => {
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
                  ${getDeliveryFee().toFixed(2)}
                </Text>
              </View>
              <View style={styles.summaryItem}>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>VAT</Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  ${getVAT().toFixed(2)}
                </Text>
              </View>
              {/* <View
                style={validPromo ? styles.summaryItem : { display: "none" }}
              >
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  Coupon
                </Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  -${promoCode.find((item) => item.code == promo)?.value}
                </Text>
              </View> */}
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
                  ${getTotal().toFixed(2)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={
              currentProcess == Status.PREPARE
                ? [
                    styles.container,
                    { borderBottomWidth: 0, padding: 0, gap: 0 },
                  ]
                : { display: "none" }
            }
          >
            <Link href="/checkout" asChild onPress={() => router.back()}>
              <Button
                text={"Cancel order"}
                type={"primary"}
                onPress={function (): void {}}
                textStyle={{ color: SB_COLOR_SCHEME.SB_ERROR }}
                buttonStyle={{
                  width: "100%",
                  backgroundColor: "transparent",
                  borderColor: SB_COLOR_SCHEME.SB_ERROR,
                  borderWidth: 1,
                  marginTop: -8,
                  marginBottom: -8,
                }}
              ></Button>
            </Link>
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
