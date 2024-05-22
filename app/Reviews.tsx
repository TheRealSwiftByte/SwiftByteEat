import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import StarIcon from  "../assets/icons/icon-star-yellow.svg";
import Author1 from "../assets/images/user1.svg";
import Author2 from "../assets/images/user2.svg";
import Author3 from "../assets/images/user3.svg";
import { Button } from "@swift-byte/switftbytecomponents";
import { Link } from "expo-router";
import { AirbnbRating } from "react-native-ratings";
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { Api } from "@/api/api";


interface ReviewsProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
}

export default function reviews({ navigation, route }: ReviewsProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={[styles.dFlex, { marginBottom: 10, flexDirection: "row", alignItems: "flex-start",  gap: 8 }]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8 },
              ]}
            >
              <View
              style={[styles.block, { marginBottom: 10, alignItems:"flex-start" }]}>
                <View style={[styles.row]}>
                  <View style={styles.rating}>
                    <View style={[styles.row1, styles.rowFlexBox]}>
                      <Text style={styles.text}>5 </Text>
                      <StarIcon/>
                      <View style={[styles.space, styles.spaceLayout]} />
                    </View>

                    <View style={[styles.row2, styles.rowSpaceBlock]}>
                      <Text style={styles.text}>4 </Text>
                      <StarIcon/>
                      <View style={[styles.space1, styles.spaceLayout]} />
                    </View>

                    <View style={[styles.row2, styles.rowSpaceBlock]}>
                      <Text style={styles.text}>3 </Text>
                      <StarIcon/>
                      <View style={[styles.space2, styles.spaceLayout]} />
                    </View>

                    <View style={[styles.row2, styles.rowSpaceBlock]}>
                      <Text style={styles.text}>2 </Text>
                      <StarIcon />
                      <View style={[styles.space3, styles.spaceLayout]} />
                    </View>

                    <View style={[styles.row2, styles.rowSpaceBlock]}>
                      <Text style={styles.text}>1 </Text>
                      <StarIcon/>
                      <View style={[styles.space4, styles.spaceLayout]} />
                    </View>
                  </View>
                  <View style={[styles.rating1]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>4.5</Text>
                      <View style={[styles.row6, styles.rowSpaceBlock]}>
                        <View style={[styles.stars1]}>
                          <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={10}
                            showRating={false}
                            isDisabled
                            selectedColor='yellow'
                          />
                        </View>
                      </View>
                    <Text style={[styles.reviews, styles.rowSpaceBlock]}>200 Reviews</Text>
                  </View>
                </View>
                <View style={styles.userRow}>
                  <View style={[styles.dFlex, 
                  { alignItems: "flex-end",
                    flexDirection: "column",
                    alignSelf: "stretch"}
                  ]}>
                    <View style={styles.div}>
                      <Author1/>
                      <View style={styles.author}>
                        <Text style={[styles.name, styles.nameFlexBox]}>{Api.getApi().getActiveCustomer().firstName} {Api.getApi().getActiveCustomer().lastName}</Text>
                        <View style={[styles.userRate, styles.rowFlexBox]}>
                          <View style={[styles.stars1]}>
                            <AirbnbRating
                              count={5}
                              defaultRating={5}
                              size={10}
                              showRating={false}
                              isDisabled
                              selectedColor='yellow'
                            />
                          </View>
                          <Text style={[styles.minute, styles.reviewsTypo]}>2 mins ago</Text>
                          </View>
                      </View>
                    </View>
                </View>
                <Text style={[styles.content, styles.authorFlexBox]}>Kinn Thai is a delightful experience for anyone who loves Thai cuisine. The Pad Thai was perfectly balanced, with just the right amount of tangy and sweet flavors. The Tom Yum soup had a wonderful depth of flavor, with a good kick of spice. The decor is vibrant and modern, making it a great spot for both casual dining and special occasions. The staff was attentive, though the wait time for the food was a bit longer than expected. Overall, a fantastic place to satisfy your Thai food cravings!</Text>
              </View>

              <View style={styles.space5}/>
              <View style={styles.userRow}>
                <View style={[styles.dFlex, 
                  { alignItems: "flex-end",
                    flexDirection: "column",
                    alignSelf: "stretch"}
                  ]}>
                    <View style={styles.div}>
                      <Author2/>
                      <View style={styles.author}>
                        <Text style={[styles.name, styles.nameFlexBox]}> {Api.getApi().getActiveCustomer().firstName} {Api.getApi().getActiveCustomer().lastName}</Text>
                        <View style={[styles.userRate, styles.rowFlexBox]}>
                          <View style={[styles.stars1]}>
                            <AirbnbRating
                              count={5}
                              defaultRating={4}
                              size={10}
                              showRating={false}
                              isDisabled
                              selectedColor='yellow'
                            />
                          </View>
                          <Text style={[styles.minute, styles.reviewsTypo]}>2 mins ago</Text>
                          </View>
                      </View>
                    </View>
                </View>
                <Text style={[styles.content, styles.authorFlexBox]}>Diggies is a hidden gem for those who love a good burger. The Classic Kiggie Burger is a must-try – juicy, flavorful, and cooked to perfection. The sweet potato fries are crispy and delicious, making a great side. The atmosphere is laid-back and cozy, perfect for a casual meal with friends or family. The service was quick and friendly, adding to the overall positive experience. Kiggies definitely knows how to make a great burger!</Text>
              </View>

              <View style={styles.space5}/>
              <View style={styles.userRow}>
                  <View style={[styles.dFlex, 
                  { alignItems: "flex-end",
                    flexDirection: "column",
                    alignSelf: "stretch"}
                  ]}>
                    <View style={styles.div}>
                      <Author3/>
                      <View style={styles.author}>
                        <Text style={[styles.name, styles.nameFlexBox]}> {Api.getApi().getActiveCustomer().firstName} {Api.getApi().getActiveCustomer().lastName}</Text>
                        <View style={[styles.userRate, styles.rowFlexBox]}>
                          <View style={[styles.stars1]}>
                            <AirbnbRating
                              count={5}
                              defaultRating={3}
                              size={10}
                              showRating={false}
                              isDisabled
                              selectedColor='yellow'
                            />
                          </View>
                          <Text style={[styles.minute, styles.reviewsTypo]}>2 mins ago</Text>
                          </View>
                      </View>
                    </View>
                </View>
                <Text style={[styles.content, styles.authorFlexBox]}>Hong Kong Chef offers an authentic taste of Hong Kong in every dish. The dim sum selection is extensive and each item is fresh and tasty. I especially loved the BBQ pork buns and the shrimp dumplings. The Peking duck was also a highlight – crispy skin and succulent meat. The restaurant has a traditional and elegant ambiance, perfect for family gatherings or special occasions. The service was generally good, though it can get a bit hectic during peak hours. A great spot for authentic Chinese cuisine!</Text>
              </View>

            </View>
          </View>    
        </View>
        <Link href="/MyReview" asChild>
            <Button
              text={"Write Review"}
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
    width: "100%",
  },
  stars1: {
    //marginLeft: 4,
    //justifyContent:'center', 
    alignItems:'stretch',
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
    //alignItems: "center",
  },
  block: {
    backgroundColor: "DDDDDD",
    marginLeft: 6,
    marginRight: 6,
    top: 10,
    width: 340,
  },
  rating: {
    justifyContent: "center",
    marginLeft: 15,
  },
  row: {
    borderRadius: 8,
    backgroundColor: "#DDDDDD",
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 19,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  rowFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rowSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  space: {
    width: 151,
  },
  row1: {
    alignSelf: "stretch",
  },
  space1: {
    width: 106,
  },
  row2: {
    alignItems: "center",
    flexDirection: "row",
  },
  space2: {
    width: 60,
  },
  space3: {
    width: 19,
  },
  space4: {
    width: 6,
  },
  spaceLayout: {
    height: 6,
    borderRadius: 50,
    marginLeft: 4,
    backgroundColor: "#1d3d30",
  },
  text: {
    textAlign: "right",
    letterSpacing: -0.1,
    fontSize: 14,
    color: SB_COLOR_SCHEME.SB_PRIMARY,
    fontWeight: "500",
  },
  rating1: {
    justifyContent: "center",
    marginLeft: 20,
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  text5: {
    fontSize: 40,
    letterSpacing: -0.4,
    fontWeight: "500",
    textAlign: "right",
    color: "#1d3d30",
    alignSelf: "stretch",
  },
  textFlexBox: {
    textAlign: "right",
    color: "#1d3d30",
  },
  row6: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  reviews: {
    textAlign: "right",
    color: "#1d3d30",
    letterSpacing: -0.1,
    fontSize: 16,
  },
  userRow: {
    marginTop: 24,
    width: 338,
    justifyContent: "flex-end",
  },
  div: {
    flexDirection: "row",
    flex: 1
  },
  author: {
    marginLeft: 6,
    flex: 1
  },
  userRate: {
    marginTop: 4,
    alignSelf: "stretch"
  },
  name: {
    fontSize: 16,
    letterSpacing: -0.2,
    fontWeight: "500",
    alignSelf: "stretch"
  },
  nameFlexBox: {
    textAlign: "left",
    color: "#1d3d30"
  },
  minute: {
    fontSize: 11,
    marginLeft: 4,
    textAlign: "right",
    color: "#1d3d30"
  },
  reviewsTypo: {
    letterSpacing: -0.1
  },
  content: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 12,
    width: 338,
    letterSpacing: -0.1
  },
  authorFlexBox: {
    textAlign: "left",
    color: "#1d3d30"
  },
  space5: {
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    height: 1,
    marginTop: 24,
    marginRight: 10,
    width: 338,
  }
});