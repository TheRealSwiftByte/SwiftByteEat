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
                        <Text style={[styles.name, styles.nameFlexBox]}>Courtney Henry</Text>
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
                <Text style={[styles.content, styles.authorFlexBox]}>Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua </Text>
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
                        <Text style={[styles.name, styles.nameFlexBox]}> Cameron Williamson</Text>
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
                <Text style={[styles.content, styles.authorFlexBox]}>Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco.</Text>
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
                        <Text style={[styles.name, styles.nameFlexBox]}> Jane Cooper</Text>
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
                <Text style={[styles.content, styles.authorFlexBox]}>Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex.</Text>
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