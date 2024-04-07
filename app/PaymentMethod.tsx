import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Card, myCards } from "@/mock_data";
import RadioOutline from "../assets/icons/icon-radio-outline.svg";
import RadioFilled from "../assets/icons/icon-radio-filled.svg";
import AddCard from "../assets/icons/logo-add-card.svg";
import { Link } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

interface PaymentProps {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProp<ParamListBase>;
}

export default function PaymentMethod({ route, navigation }: PaymentProps) {
  const [selectedCard, setSelectedCard] = useState<Card>(myCards[0]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{ paddingBottom: 24 }}>
            <View>
              {myCards.map((card) => {
                return (
                  <View
                    key={card.id}
                    style={[styles.dFlex, { paddingBottom: 24 }]}
                  >
                    <View
                      style={[styles.dFlex, { justifyContent: "flex-start" }]}
                    >
                      <Image
                        source={
                          card.type == "visa"
                            ? require("../assets/icons/logo-visa.png")
                            : card.type == "master"
                            ? require("../assets/icons/logo-master.png")
                            : require("../assets/icons/logo-paypal.png")
                        }
                        width={44}
                        height={30}
                        style={{ marginRight: 16 }}
                      />
                      <Text>**** {card.last3Digits}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setSelectedCard(card)}>
                      <RadioOutline
                        style={
                          selectedCard?.id === card.id
                            ? { display: "none" }
                            : {}
                        }
                      />
                    </TouchableOpacity>

                    <RadioFilled
                      style={
                        selectedCard?.id === card.id ? {} : { display: "none" }
                      }
                    />
                  </View>
                );
              })}
            </View>
            <View style={[styles.dFlex, { justifyContent: "flex-start" }]}>
              <AddCard style={{ marginRight: 16 }} />
              <Text>New payment method</Text>
            </View>
          </View>

          <Link href="/success" asChild>
            <Button
              text={"Pay Now"}
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
});
