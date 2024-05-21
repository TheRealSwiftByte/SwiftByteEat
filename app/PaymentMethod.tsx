import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Card, myCards } from "@/mock_data";
import RadioOutline from "../assets/icons/icon-radio-outline.svg";
import RadioFilled from "../assets/icons/icon-radio-filled.svg";
import AddCard from "../assets/icons/logo-add-card.svg";
import { Link, router } from "expo-router";
import { Button } from "@swift-byte/switftbytecomponents";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import VisaLogo from "../assets/icons/logo-visa.svg";
import MasterLogo from "../assets/icons/logo-master.svg";
import PaypalLogo from "../assets/icons/logo-paypal.svg";

interface PaymentProps {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationProp<ParamListBase>;
}

export default function PaymentMethod({ route, navigation }: PaymentProps) {
  const [cards, setCards] = useState<Card[]>(myCards);
  const [selectedCard, setSelectedCard] = useState<Card>(myCards[0]);

  useEffect(() => {
    setCards(myCards)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{ paddingBottom: 24 }}>
            <View>
              {cards.map((card: Card) => {
                return (
                  <View
                    key={card.id}
                    style={[styles.dFlex, { paddingBottom: 24 }]}
                  >
                    <View
                      style={[styles.dFlex, { justifyContent: "flex-start" }]}
                    >
                      <View style={{ marginRight: 16 }}>
                        {card.type == "visa" ? (
                          <VisaLogo />
                        ) : card.type == "master" ? (
                          <MasterLogo />
                        ) : (
                          <PaypalLogo />
                        )}
                      </View>
                      <Text>
                        {card.cardNumber.toString().replace(/.(?=.{3})/g, "*")}
                      </Text>
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
            <TouchableOpacity
              style={[styles.dFlex, { justifyContent: "flex-start" }]}
              onPress={() => router.navigate("/AddCard")}
            >
              <AddCard style={{ marginRight: 16 }} />
              <Text>New payment method</Text>
            </TouchableOpacity>
          </View>

          <Link href="/success" asChild>
            <Button
              text={"Pay Now"}
              type={"primary"}
              onPress={function (): void {
                // router.navigate({ pathname: '/success', params: { type: ''}})
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
