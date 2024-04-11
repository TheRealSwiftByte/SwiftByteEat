import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import IconPromo from "../assets/icons/icon-promo.svg";
import IconSuccess from "../assets/icons/icon-success-green.svg";
import IconEdit from "../assets/icons/icon-edit.svg";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { MenuItem, cart, promoCode } from "@/mock_data";
import { Link } from "expo-router";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

interface CartProps {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProp<ParamListBase>;
}

export default function Checkout({ route, navigation }: CartProps) {
  const [promo, setPromo] = useState<string>("");
  const [deliveryInstruction, setDeliveryInstruction] = useState<string>("");
  const [validPromo, setValidPromo] = useState<boolean>(false);

  const itemIdCounts: { [itemId: string]: number } = {};

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

  const validatePromo = () => {
    const valid = promoCode.find(
      (item) => item.code.toLowerCase() == promo.toLowerCase()
    );
    if (valid) {
      setValidPromo(true);
    } else {
      setValidPromo(false);
    }
  };

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

    const coupon = promoCode.find((item) => item.code == promo)?.value?? 0;
    if(validPromo){
      total -= coupon
    }
    
    return total;
  };

  useEffect(() => {
    validatePromo();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* delivery address */}
          <View
            style={[styles.dFlex, { marginBottom: 8, alignItems: "flex-end" }]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8 },
              ]}
            >
              <Text style={styles.subtitle}>Delivery Address</Text>
              <Text>3 Crown Street, Wollongong</Text>
            </View>
            <IconEdit />
          </View>
          {/* delivery instruction */}
          <View
            style={[
              styles.dFlex,
              { marginVertical: 16, alignItems: "flex-end" },
            ]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8 },
              ]}
            >
              <Text style={styles.subtitle}>Delivery Instruction</Text>
              <Text style={{ color: SB_COLOR_SCHEME.SB_DISABLED }}>
                Let us know if you have specific things in mind
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.dFlex,
              {
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#BBC5C1",
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={[styles.dFlex, { backgroundColor: "transparent" }]}>
              <TextInput
                value={deliveryInstruction}
                style={styles.textInput}
                placeholder="e.g. Leave at the door"
                onChangeText={setDeliveryInstruction}
              ></TextInput>
            </View>
          </View>
          {/* promo */}
          <View style={{ marginBottom: 20 }}>
            <View
              style={[
                styles.dFlex,
                { marginVertical: 16, alignItems: "flex-end" },
              ]}
            >
              <View
                style={[
                  styles.dFlex,
                  { flexDirection: "column", alignItems: "flex-start", gap: 8 },
                ]}
              >
                <Text style={styles.subtitle}>Promo</Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_DISABLED }}>
                  Use your promo code and enjoy the benefits!
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.dFlex,
                {
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#BBC5C1",
                  justifyContent: "space-between",
                  paddingRight: 10,
                  flex: 1,
                },
              ]}
            >
              <View
                style={[
                  styles.dFlex,
                  {
                    backgroundColor: "transparent",
                    paddingLeft: 10,
                    flex: 1,
                    justifyContent: "flex-start",
                  },
                ]}
              >
                <IconPromo />
                <TextInput
                  value={promo}
                  style={[styles.textInput]}
                  placeholder="e.g. SPRING20"
                  onChangeText={setPromo}
                ></TextInput>
              </View>
              <IconSuccess
                style={validPromo ? { flex: 1 } : { display: "none" }}
              />
            </View>
          </View>
          {/* order summary */}
          <View>
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
              <View
                style={validPromo ? styles.summaryItem : { display: "none" }}
              >
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  Coupon
                </Text>
                <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY }}>
                  -${promoCode.find((item) => item.code == promo)?.value}
                </Text>
              </View>
              <View
                style={[
                  styles.summaryItem,
                  { borderBottomWidth: 0, marginBottom: 10 },
                ]}
              >
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
          <Link href="/PaymentMethod" asChild>
            <Button
              text={"Proceed to Pay"}
              type={"primary"}
              onPress={function (): void {
                console.log("pressed");
              }}
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
  textInput: {
    borderRadius: 40,
    borderWidth: 2,
    marginHorizontal: 0,
    borderColor: "transparent",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
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
