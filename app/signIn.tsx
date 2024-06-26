import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { Link, router } from "expo-router";
import Logo from "../assets/images/logo-green.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Api } from "@/api/api";
import success from "./success";

export default function signIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignin = async () => {

    if (!email || !password) {
      Alert.alert("Empty fields", "Please fill in all fields")
      return
    }

    Api.getApi().signInCustomer(email, password)
      .then((response) => {
        if (!Object.keys(response).includes("message")) {
          router.navigate("/(tabs)")
        }
        else {
          throw Error("Incorrect email or password")
        }
      })
      .catch((e) => {
        Alert.alert("Incorrect email or password", "There was an error singing in, please ensure your email and password are correct")
        console.error('Failed to sign in customer: ', e)
      });
  }

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Logo width={150} height={40} />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: SB_COLOR_SCHEME.SB_PRIMARY,
            }}
          >
            Sign In
          </Text>
          <View
            style={[
              styles.dFlex,
              { alignItems: "flex-end", marginBottom: -10 },
            ]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start" },
              ]}
            >
              <Text style={styles.subtitle}>Email address</Text>
            </View>
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
                value={email}
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="test@swiftbyte.com"
                onChangeText={setEmail}
              ></TextInput>
            </View>
          </View>
          <View
            style={[
              styles.dFlex,
              { alignItems: "flex-end", marginBottom: -10 },
            ]}
          >
            <View
              style={[
                styles.dFlex,
                { flexDirection: "column", alignItems: "flex-start" },
              ]}
            >
              <Text style={styles.subtitle}>Password</Text>
            </View>
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
                autoCapitalize="none"
                secureTextEntry={true}
                value={password}
                style={styles.textInput}
                placeholder="Enter password"
                onChangeText={setPassword}
              ></TextInput>
            </View>
          </View>
          <Button
            text={"Sign In"}
            type={"secondary"}
            onPress={handleSignin}
          ></Button>

          <View style={[styles.dFlex, { justifyContent: "center", gap: 4 }]}>
            <Text style={{ fontWeight: "500" }}>Don't have an account?</Text>
            <Text
              style={{
                color: SB_COLOR_SCHEME.SB_TERTIARY,
                textDecorationLine: "underline",
              }}
              onPress={() => router.navigate("/signUp")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    width: "100%",
    gap: 25,
  },
  scrollView: {
    backgroundColor: "white",
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
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
