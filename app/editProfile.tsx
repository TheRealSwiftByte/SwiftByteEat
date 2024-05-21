import { TextInput } from "@swift-byte/switftbytecomponents";
import { useState } from "react";
import { View } from "react-native";
import { Text } from "@/components/Themed";
import { Button } from "@swift-byte/switftbytecomponents";
import { StyleSheet } from "react-native";

export default function editProfile({ route, navigation }: any) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("0431969312");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("ILovePasswords<3");

  const handleSubmit = () => {
    console.log("User signing up...", name, phone, email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.profilePic} />
        <View style={styles.painName}>
          <Text style={styles.username}>John Smith</Text>
          <View>
            <Text style={styles.status}>Standard</Text>
          </View>
        </View>
      </View>
      <View style={styles.passwordCell}>
        <Text style={{ fontSize: 16, left: 0 }}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.textInput}
          placeholder="Current Password"
        ></TextInput>
      </View>
      <View style={styles.passwordCell}>
        <Text style={{ fontSize: 16, left: 0 }}>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.textInput}
          placeholder={phone}
        ></TextInput>
      </View>
      <View style={[styles.passwordCell, {}]}>
        <Text style={{ fontSize: 16, left: 0 }}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
          placeholder="Current Password"
        ></TextInput>
      </View>
      <View style={[styles.passwordCell, {}]}>
        <Text style={{ fontSize: 16, left: 0 }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
          placeholder={password}
        ></TextInput>
      </View>
      <Button onPress={handleSubmit} type="primary" text="Save Changes" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profilePic: {
    backgroundColor: "#F1E05E",
    width: 93,
    height: 93,
    borderRadius: 93,
  },
  containerProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    width: "90%",
    alignSelf: "center",
  },
  username: {
    fontSize: 18,
    marginLeft: 16,
  },
  painName: {
    flexDirection: "column",
    justifyContent: "center",
  },
  status: {
    backgroundColor: "#F1E05E",
    marginLeft: 16,
    justifyContent: "center",
    textAlign: "center",
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
    width: 320,
  },
  passwordCell: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
  },
});
