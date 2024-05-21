import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import SearchIcon from "../../assets/icons/icon-search.svg";
import CloseIcon from "../../assets/icons/icon-close.svg";
import { View, Text } from "@/components/Themed";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Restaurant, categories, promoCode, restaurants } from "@/mock_data";
import StarYellowIcon from "../../assets/icons/icon-star-yellow.svg";
import { router, useLocalSearchParams } from "expo-router";

export default function ExploreScreen() {
  const { searchValue } = useLocalSearchParams<{ searchValue: string }>();
  const [search, setSearch] = useState<string>("");
  const [filteredResults, setFilteredResults] =
    useState<Restaurant[]>(restaurants);

  useEffect(() => {
    console.log("search: ", search, searchValue);
    if (searchValue) {
      handleSearch(searchValue.toLowerCase());
    }
  }, [searchValue]);

  const handleSearch = (val: string) => {
    setSearch(val.toLowerCase());
    const result = restaurants.filter((restaurant) => {
      const matchRestaurantName = restaurant.name
        .toLowerCase()
        .includes(val.toLowerCase());
      const matchCategoryName =
        restaurant.categories.filter((cat) =>
          cat.name.toLowerCase().includes(val.toLowerCase())
        ).length > 0
          ? true
          : false;
      const matchLocation = restaurant.address.street
        .toLowerCase()
        .includes(val.toLowerCase());
      const matchMenuName =
        restaurant.menu.filter((item) =>
          item.name.toLowerCase().includes(val.toLowerCase())
        ).length > 0
          ? true
          : false;

      console.log(
        restaurant.name,
        matchCategoryName ||
        matchLocation ||
        matchMenuName ||
        matchRestaurantName
      );
      return (
        matchCategoryName ||
        matchLocation ||
        matchMenuName ||
        matchRestaurantName
      );
    });

    console.log("res", search, result);
    setFilteredResults(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
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
                onChangeText={handleSearch}
                style={styles.textInput}
                placeholder="Search menu or restaurant"
              ></TextInput>
            </View>

            {search ? (
              <TouchableOpacity onPress={() => handleSearch("")}>
                <CloseIcon style={{ marginRight: 20 }} width={13} height={13} />
              </TouchableOpacity>
            ) : null}
          </View>
          {/* search results */}
          {search ? (
            // results here
            <View style={{ marginTop: 20 }}>
              {filteredResults.length == 0 ? (
                <View>
                  <Text style={{ textAlign: "center" }}>No results found</Text>
                </View>
              ) : null}
              {
                // listing the restaurants
                filteredResults?.map((item) => (
                  <Pressable onPress={() => router.navigate({
                    pathname: "/RestaurantScreen",
                    params: { restaurantId: item.id },
                  })}
                    key={item.id}
                    style={{ marginBottom: 20 }}
                  >
                    <View
                      style={[
                        styles.dFlex,
                        { justifyContent: "flex-start", flex: 1 },
                      ]}
                    >
                      <Image
                        source={{ uri: item.imageUrl }}
                        width={64}
                        height={64}
                        style={[
                          {
                            borderRadius: 10,
                          },
                        ]}
                      />
                      <View style={{ marginLeft: 16, flex: 1 }}>
                        <View
                          style={[
                            styles.dFlex,
                            {
                              marginBottom: 4,
                              justifyContent: "flex-start",
                              gap: 8,
                            },
                          ]}
                        >
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

                        <Text numberOfLines={1}>{item.description}</Text>
                      </View>
                    </View>
                  </Pressable>
                ))
              }
            </View>
          ) : (
            <View>
              <View style={{ marginVertical: 24 }}>
                {/* CATEGORY */}
                <View style={styles.dFlex}>
                  <Text style={[styles.title, { fontSize: 18 }]}>Category</Text>
                </View>
                <View style={[styles.dFlex, { marginTop: 20 }]}>
                  {categories.slice(0, 4).map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          handleSearch(item.name.toLowerCase());
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
                <View style={[styles.dFlex, { marginTop: 20 }]}>
                  {categories.slice(4, 8).map((item) => {
                    return (
                      <TouchableOpacity
                        onPress={() => handleSearch(item.name.toLowerCase())}
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
              <View style={{ marginTop: 10 }}>
                {/* CATEGORY */}
                <View style={styles.dFlex}>
                  <Text style={[styles.title, { fontSize: 18 }]}>
                    Don't miss out our offers for you
                  </Text>
                </View>
                <View style={[{ marginTop: 20 }]}>
                  {promoCode.map((item) => {
                    return (
                      <View
                        key={item.code}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: 10,
                          backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                          padding: 16,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 15,
                            flex: 2,
                          }}
                        >
                          Get {item.value * 10}% off on your first order with
                          new restaurants
                        </Text>
                        <View
                          style={{
                            flex: 1,
                            backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                            alignItems: "flex-end",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: SB_COLOR_SCHEME.SB_SECONDARY,
                              fontSize: 18,
                              fontStyle: 'italic'
                            }}
                          >
                            {item.code}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          )}
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
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  categoryImage: {
    borderRadius: 60,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
});
