import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Button } from "@swift-byte/switftbytecomponents";
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

  const [rating, setRating] = useState<number>(5);

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
                    defaultRating={rating}
                    onFinishRating={(rating) => setRating(rating)}
                    size={26}
                    showRating={false}
                    selectedColor='yellow'
                  />
              </View>

              <Text style={styles.subtitle}>Review</Text>
                <TextInput
                  value={authorReview}
                  style={styles.textInput}
                  placeholder="Enter your review here"
                  onChangeText={setAuthorReview}
                  multiline={true}
                  
                ></TextInput>
              <View style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", marginTop: 120, width: "100%" },
              ]}>
                <Link href="/Reviews" asChild>
                  <Button
                    text={"Submit"}
                    type={"primary"}
                    buttonStyle={{ width: "100%" }}
                    onPress={function (): void {
                      setAuthorReview("");
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
    //paddingBottom: 100,
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
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  star: {
    alignItems: 'stretch',
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 1,
    padding:20,
    paddingTop:20,
    height:200,
    borderColor:SB_COLOR_SCHEME.SB_DISABLED,
    width:"100%",

  }

})
