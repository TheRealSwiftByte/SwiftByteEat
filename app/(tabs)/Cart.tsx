import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import { Text, View } from "@/components/Themed";
import NotificationBadge from "../../assets/icons/icon-notification-badge.svg";
import MinusIcon from "../../assets/icons/icon-minus-yellow.svg";
import AddIcon from "../../assets/icons/icon-add-yellow.svg";

import { SB_COLOR_SCHEME } from "@/constants";
import { MenuItem, Cart, Customer } from "@/api/schema/SwiftByteTypes";
import { Api } from "@/api/api";
import { Button } from "@swift-byte/switftbytecomponents";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";

interface CartProps {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProp<ParamListBase>;
}

export default function CartScreen({route, navigation}: CartProps) {
  const itemIdCounts: { [itemId: string]: number } = {};
  const [activeCustomer, setActiveCustomer] = useState<Customer | undefined>(undefined);
  const [displayCart, setDisplayCart] = useState<any>(undefined);
  useFocusEffect(useCallback( () => {
    setActiveCustomer(Api.getApi().getActiveCustomer())
    console.log("Active Customer: ", activeCustomer)
  }, []))
  
  useEffect(() => {
    if (activeCustomer) {
      const cart = activeCustomer.cart;
      console.log("Cart: ", cart)
      cart.foodItems.forEach((item) => {
        itemIdCounts[item.name] = (itemIdCounts[item.name] || 0) + 1;
      });
      setDisplayCart(Object.keys(itemIdCounts).map((itemName) => ({
        item: activeCustomer.cart.foodItems.find((i) => i.name == itemName),
        count: itemIdCounts[itemName],
      })));
    }
  }, [activeCustomer]);


  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View>
            {/* <View style={styles.dFlex}>
              <Text style={styles.title}>Cart</Text>
              <NotificationBadge />
            </View> */}
            {/* Menu items */}
            <View>
              <Text
                style={[styles.subtitle, { marginBottom: 16, fontSize: 16 }]}
              >
                {/* {cart.restaurant.name} */}
              </Text>
              <View>
                {displayCart && displayCart.map((item: any) => {
                  return (
                    <View
                      key={item.id}
                      style={[styles.dFlex, { marginBottom: 16, flex: 1 }]}
                    >
                      <View
                        style={[
                          styles.dFlex,
                          { justifyContent: "flex-start", flex: 3 },
                        ]}
                      >
                        <View style={{ marginRight: 16 }}>
                          <Image
                            source={{ uri: item.imageUrl }}
                            width={64}
                            height={64}
                            style={{ borderRadius: 16 }}
                          />
                        </View>
                        <View style={{ width: "60%" }}>
                          <Text style={{ marginBottom: 8, fontSize: 15 }}>
                            {item.item?.name}
                          </Text>
                          <Text style={{ fontWeight: "500" }}>
                            $
                            {item.item?.totalPrice
                              ? item.item?.price * item.count
                              : item.item?.price}
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.dFlex, { flex: 1 }]}>
                        <MinusIcon />
                        <Text
                          style={{
                            marginHorizontal: 10,
                            fontSize: 16,
                            fontWeight: "500",
                          }}
                        >
                          {item.count}
                        </Text>
                        <AddIcon />
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          <Link href="/checkout" asChild>
            <Button
              text={"Proceed to Checkout"}
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
    minHeight: "100%",
    justifyContent: "space-between",
    paddingBottom: 100,
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
