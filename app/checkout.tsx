import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import IconBack from "../assets/icons/icon-back.svg";
import IconEdit from "../assets/icons/icon-edit.svg";
import { TextInput } from "@swift-byte/switftbytecomponents";

export default function Checkout() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* header */}
          <View style={[styles.dFlex, { marginBottom: 32 }]}>
            <IconBack />
            <View
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Text
                style={[styles.subtitle, { fontSize: 18, textAlign: "center" }]}
              >
                Checkout
              </Text>
            </View>
          </View>
          {/* delivery address */}
          <View
            style={[
              styles.dFlex,
              { marginVertical: 16, alignItems: "flex-end" },
            ]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8 },
              ]}
            >
              <Text style={styles.subtitle}>Delivery Address</Text>
              <Text>3 Crown Street, Wollongong</Text>
            </View>
            <IconEdit />
          </View>
          {/* delivery instruction */}
          <View
            style={[
              styles.dFlex,
              { marginVertical: 16, alignItems: "flex-end" },
            ]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start", gap: 8 },
              ]}
            >
              <Text style={styles.subtitle}>Delivery Instruction</Text>
              <Text style={{ color: SB_COLOR_SCHEME.SB_DISABLED }}>
                Let us know if you have specific things in mind
              </Text>
            </View>
          </View>
          <TextInput
            value={""}
            onChangeText={function (text: string): void {
              throw new Error("Function not implemented.");
            }}
            style={{ margin: 0, borderRadius: 10, marginBottom: 16 }}
            placeholder="e.g. Leave at the door"
          ></TextInput>
          {/* promo */}
          <View style={{ marginBottom: 16 }}>
            <View
              style={[
                styles.dFlex,
                { marginVertical: 16, alignItems: "flex-end" },
              ]}
            >
              <Text style={styles.subtitle}>Promo</Text>
            </View>
            <View
              style={[
                styles.dFlex,
                {
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#BBC5C1",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View style={[styles.dFlex, { backgroundColor: "transparent" }]}>
                <TextInput
                  value={""}
                  style={styles.textInput}
                  placeholder="Search menu or restaurant"
                  onChangeText={function (text: string): void {
                    throw new Error("Function not implemented.");
                  }}
                ></TextInput>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.dFlex,
              { marginVertical: 16, alignItems: "flex-end" },
            ]}
          >
            <Text style={styles.subtitle}>Order Summary</Text>
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
