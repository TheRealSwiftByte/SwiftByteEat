import {
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import { Text, View } from "@/components/Themed";
import LocationIcon from "../../assets/icons/icon-location.svg";
import StarYellowIcon from "../../assets/icons/icon-star-yellow.svg";
import SearchIcon from "../../assets/icons/icon-search.svg";
import GoSearchIcon from "../../assets/icons/icon-arrow-right.svg";
import { SB_COLOR_SCHEME } from "@/constants";
import { categories } from "@/mock_data";
import { TextInput } from "@swift-byte/switftbytecomponents";
import { useCallback, useEffect, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import { Api } from "@/api/api";

export default function HomeScreen() {
  const [search, setSearch] = useState<string>("");
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true)


  useFocusEffect(useCallback(() => {
    Api.getApi().getRestaurants().then((liveRestaurants) => {
      if (liveRestaurants) {
        console.log("liveRestaurants: ", liveRestaurants);
        setRestaurants(liveRestaurants);
        setIsLoading(false);
      }
      else{
        console.error("Failed to get restaurants")
        setIsLoading(false)
      }
    });
  }, []))

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* <View style={styles.dFlex}>
            <Text style={styles.title}>Home</Text>
            <NotificationBadge />
          </View> */}
          <View
            style={[
              styles.dFlex,
              {
                justifyContent: "flex-start",
                gap: 8,

                marginBottom: 20,
              },
            ]}
          >
            <LocationIcon />
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start" },
              ]}
            >
              <Text
                style={{ color: SB_COLOR_SCHEME.SB_PRIMARY, marginBottom: 4 }}
              >
                Current location
              </Text>

              <Text style={styles.subtitle}>3 Crown Street, Wollongong</Text>
            </View>
          </View>
          <View>
            {/* SEARCH BAR */}
            <View
              style={[
                styles.dFlex,
                {
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: "#BBC5C1",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={[styles.dFlex, { backgroundColor: "transparent" }]}>
                <SearchIcon style={{ marginLeft: 20 }} />
                <TextInput
                  value={search}
                  onChangeText={setSearch}
                  style={styles.textInput}
                  placeholder="Search menu or restaurant"
                ></TextInput>
              </View>

              {search ? (
                <TouchableOpacity
                  onPress={() => {
                    router.navigate({
                      pathname: "/Explore",
                      params: { searchValue: search },
                    });
                    setSearch("");
                  }}
                >
                  <GoSearchIcon
                    style={{ marginRight: 20 }}
                    width={13}
                    height={13}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          <View style={styles.banner}>
            {/* BANNER */}
            <Image
              source={require("../../assets/images/banner.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            {/* CATEGORY */}
            <View style={styles.dFlex}>
              <Text style={[styles.title, { fontSize: 18 }]}>
                Top Categories
              </Text>
            </View>
            <View style={[styles.dFlex, { marginTop: 20, marginBottom: 10 }]}>
              {categories.slice(0, 4).map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      router.navigate({
                        pathname: "/Explore",
                        params: { searchValue: item.name.toLowerCase() },
                      });
                    }}
                    key={item.id}
                    style={[
                      styles.dFlex,
                      {
                        flexDirection: "column",
                        gap: 10,
                        justifyContent: "center",
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.imageUrl }}
                      width={60}
                      height={60}
                      style={styles.categoryImage}
                    />
                    <Text
                      style={{
                        color: SB_COLOR_SCHEME.SB_PRIMARY,
                        fontWeight: "600",
                      }}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            {/* RESTAURANT */}
            <View style={styles.dFlex}>
              <Text style={[styles.title, { fontSize: 18 }]}>
                Popular Restaurants Nearby
              </Text>
            </View>
            {isLoading && (
              <View style={{width:'100%', justifyContent:"center", alignItems:'center'}}>
                <Image source={require("../../assets/images/loading.gif")} resizeMode="contain" style={{height:100}}/>
              </View>
            )}
            <ScrollView horizontal={true} style={styles.scrollContainer}>
              <View style={[styles.dFlex, { marginTop: 16 }]}>
                {restaurants.map((item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        router.navigate({
                          pathname: "/RestaurantScreen",
                          params: { restaurantId: item.id},
                        });
                      }}
                      key={item.id}
                      style={[
                        styles.card,
                        styles.shadow,
                        { width: 200, marginRight: 20, borderRadius: 10 },
                      ]}
                    >
                      <Image
                        source={{ uri: item.imageURI }}
                        width={200}
                        height={120}
                        style={[
                          {
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          },
                        ]}
                      />
                      <View
                        style={{
                          padding: 10,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      >
                        <View style={styles.dFlex}>
                          <Text style={styles.subtitle} numberOfLines={1}>
                            {item.name}
                          </Text>
                          <View
                            style={[
                              styles.dFlex,
                              { justifyContent: "flex-end" },
                            ]}
                          >
                            <StarYellowIcon
                              width={16}
                              height={16}
                              style={{ marginRight: 4 }}
                            />
                            <Text>{item.averageRating}</Text>
                          </View>
                        </View>

                        <View style={{ marginTop: 4 }}>
                          <Text style={{ lineHeight: 20 }} numberOfLines={2}>
                            {"1.0km"} | {item.description}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
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
  },
  banner: {
    height: 142,
    backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY_LIGHT,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryImage: {
    borderRadius: 60,
  },
  scrollView: {
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  scrollContainer: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    overflow: "visible",
    paddingBottom: 20,
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
});
