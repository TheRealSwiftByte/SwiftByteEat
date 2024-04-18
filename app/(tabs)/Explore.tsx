import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import SearchIcon from "../../assets/icons/icon-search.svg";
import FilterIcon from "../../assets/icons/icon-filter.svg";
import { View, Text } from "@/components/Themed";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { categories, promoCode } from "@/mock_data";

export default function ExploreScreen() {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    console.log("search: ", search);
  });
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
                onChangeText={setSearch}
                style={styles.textInput}
                placeholder="Search menu or restaurant"
              ></TextInput>
            </View>

            <FilterIcon style={{ marginRight: 20 }} />
          </View>
          <View style={{ marginVertical: 24 }}>
            {/* CATEGORY */}
            <View style={styles.dFlex}>
              <Text style={[styles.title, { fontSize: 18 }]}>Category</Text>
            </View>
            <View style={[styles.dFlex, { marginTop: 20 }]}>
              {categories.slice(0, 4).map((item) => {
                return (
                  <View
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
                  </View>
                );
              })}
            </View>
            <View style={[styles.dFlex, { marginTop: 20 }]}>
              {categories.slice(4, 8).map((item) => {
                return (
                  <View
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
                  </View>
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
                        color: 'white',
                        fontSize: 15,
                        flex: 2,
                      }}
                    >
                      Get {item.value * 10}% off on your first order with new
                      restaurants
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: SB_COLOR_SCHEME.SB_PRIMARY,
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{fontSize: 11, color: SB_COLOR_SCHEME.SB_WARNING, fontStyle: 'italic', marginBottom: 10}}>Click to copy code</Text>
                      <Text
                        style={{
                          color: SB_COLOR_SCHEME.SB_SECONDARY,
                          fontSize: 18,
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
});
