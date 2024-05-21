import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SB_COLOR_SCHEME } from "@/constants";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";
import { Link, router } from "expo-router";
import Logo from "../assets/images/logo-green.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Api } from "@/api/api";
import { CreateCustomerInput } from "@/api/schema/Customer";


export default function signUp() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const api: Api = Api.getApi();


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
            Sign Up
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
              <Text style={styles.subtitle}>Name</Text>
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
                value={name}
                style={styles.textInput}
                placeholder="Enter name"
                onChangeText={setName}
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
              <Text style={styles.subtitle}>Phone</Text>
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
                value={phone}
                style={styles.textInput}
                placeholder="Enter phone number"
                onChangeText={setPhone}
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
                value={password}
                style={styles.textInput}
                placeholder="Enter password"
                onChangeText={setPassword}
              ></TextInput>
            </View>
          </View>
          <Link href="/onboarding" asChild>
            <Button
              text={"Sign Up"}
              type={"secondary"}
              onPress={() => {
                const nameParts = name.split(" ");
                const createCustomerInput: CreateCustomerInput = {
                  firstName: nameParts[0],
                  lastName: nameParts[1],
                  email: email,
                  phone: phone,
                  password: password,
                }
                api.createCustomer(createCustomerInput)
                  .then((isSuccess) => {
                    if (isSuccess) {
                      console.log("newactive customer: ", api.getActiveCustomer());
                      router.navigate("/(tabs)")
                    }
                  })
                  .catch((e) => console.error('Failed to sign in customer: ', e));
                }}
            ></Button>
          </Link>
          <View style={[styles.dFlex, { justifyContent: "center", gap: 4 }]}>
            <Text style={{ fontWeight: "500" }}>Already have an account?</Text>
            <Text
              style={{
                color: SB_COLOR_SCHEME.SB_TERTIARY,
                textDecorationLine: "underline",
              }}
              onPress={() => router.navigate("/signIn")}
            >
              Sign In
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
    justifyContent: "center",
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
