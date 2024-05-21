import { StyleSheet } from "react-native";
import SearchIcon from "../assets/icons/icon-search.svg";
import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";

export default function OrdersScreen() {
  const [current, currentPassword] = useState<string>("");
  const [password, newPassword] = useState<string>("");
  const [confirmed, confirmPassword] = useState<string>("");
  const [bool, isSame] = useState<boolean>(false);

  useEffect(() => {
    //Currently just checks the passwords are the same
    if (password === confirmed && password.length != 0) {
      isSame(true);
      console.log("Passwords match");
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.passwordCell}>
        <Text style={{ fontSize: 16, left: 0 }}>Current Password</Text>
        <TextInput
          value={current}
          onChangeText={currentPassword}
          style={styles.textInput}
          placeholder="Current Password"
        ></TextInput>
      </View>
      <View style={styles.passwordCell}>
        <Text style={{ fontSize: 16, left: 0 }}>New Password</Text>
        <TextInput
          value={password}
          onChangeText={newPassword}
          style={styles.textInput}
          placeholder="Current Password"
        ></TextInput>
      </View>
      <View style={[styles.passwordCell, { paddingBottom: 50 }]}>
        <Text style={{ fontSize: 16, left: 0 }}>Confirm New Password</Text>
        <TextInput
          value={confirmed}
          onChangeText={confirmPassword}
          style={styles.textInput}
          placeholder="Current Password"
        ></TextInput>
      </View>
      <View
        style={{
          position: "relative",
          bottom: "-15%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onPress={() => console.log("Saved Changes")}
          buttonStyle={{}}
          type="primary"
          text="Save Changes"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 0,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    height: 50,
  },
  passwordCell: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
});
