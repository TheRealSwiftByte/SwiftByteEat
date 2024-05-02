import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import StarIcon from  "../../assets/icons/icon-star-yellow.svg";
import Author1 from "../../assets/images/user1.svg";
import Author2 from "../../assets/images/user2.svg";
import Author3 from "../../assets/images/user3.svg";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { Link } from "expo-router";
import { AirbnbRating } from "react-native-ratings";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";

interface ReviewsProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
}

export default function reviews({ navigation, route }: ReviewsProps) {
  const [authorReview, setAuthorReview] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
        <View
            style={[styles.dFlex, { marginBottom: 10, alignItems: "flex-end" }]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8, marginBottom: 4 },
              ]}
            >
              <Text style={styles.subtitle}>Rating</Text>
              <View style={[styles.star]}>
                <AirbnbRating
                  count={5}
                  defaultRating={3}
                  size={26}
                  showRating={false}
                  isDisabled
                  selectedColor='yellow'
                />
              </View>

              <Text style={styles.subtitle}>Review</Text>
              <View
              style={[
                styles.dFlex,
                {
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#BBC5C1",
                  justifyContent: "space-between",
                  marginTop: 10,
                },
              ]}
              >
                <View style={[styles.dFlex, { backgroundColor: "transparent" }]}>
                  <TextInput
                    value={authorReview}
                    style={styles.textInput}
                    placeholder="Enter your review here"
                    onChangeText={setAuthorReview}
                  ></TextInput>
                </View>
              </View>
              <View style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", marginTop: 120, width: "100%" },
              ]}>
                <Link href="/MyReview" asChild>
                <Button
                  text={"Submit"}
                  type={"primary"}
                  onPress={function (): void {
                    console.log("pressed");
                  }}
                ></Button>
              </Link>

              </View>
            </View>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    flexDirection: 'column'
    // paddingBottom: 100,
  },
  scrollView: {
    backgroundColor: "white",
    height: '100%',
    flex: 1,
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
   //alignItems: "center",
    width: "100%",
  },
  subtitle:{
    fontSize: 14,
    fontWeight: "bold",
  },
  star:{
    alignItems:'stretch',
  },
  textInput: {
    borderRadius: 40,
    borderWidth: 20,
    marginHorizontal: 0,
    marginBottom: 60,
    borderColor: "transparent",
    paddingLeft: 10,
    paddingBottom: 60,
  }
  
})
