import { TextInput } from "@swift-byte/switftbytecomponents";
import { useState } from "react";
import { SafeAreaView, ScrollView, View, Image } from "react-native";
import { Text } from "@/components/Themed";
import { Button } from "@swift-byte/switftbytecomponents";
import { StyleSheet } from "react-native";
import { Customer, UpdateCustomerInput } from "@/api/schema/Customer";
import { Api } from "@/api/api";

export default function editProfile({ route, navigation }: any) {

  const [customer, setCustomer] = useState<Customer | undefined>(Api.getApi().getActiveCustomer());

  const [firstName, setFirstName] = useState<string>(Api.getApi().getActiveCustomer()?.firstName || "");
  const [lastName, setLastName] = useState<string>(Api.getApi().getActiveCustomer()?.lastName || "");

  const [phone, setPhone] = useState<string>(Api.getApi().getActiveCustomer()?.phone || "");
  const [email, setEmail] = useState<string>(Api.getApi().getActiveCustomer()?.email || "");
  const [address, setAddress] = useState(Api.getApi().getActiveCustomer()?.address || "")

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {

    setIsLoading(true)

    const data: UpdateCustomerInput = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      address: address
    }

    
    await Api.getApi().updateCustomer(data)
    setCustomer(Api.getApi().getActiveCustomer())
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} >
        <View style={styles.containerProfile}>
          <Image
            source={require("../assets/images/profilePic.webp")}
            resizeMode="contain"
            style={styles.avatar}
          />
          <View style={styles.painName}>
            <Text style={styles.username}>{customer?.firstName} {customer?.lastName}</Text>
            <View>
              <Text style={styles.status}>Standard</Text>
            </View>
          </View>
        </View>
        <View style={styles.passwordCell}>
          <Text style={{ fontSize: 16, left: 0 }}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={styles.textInput}
            placeholder="First Name"
          ></TextInput>
        </View>
        <View style={styles.passwordCell}>
          <Text style={{ fontSize: 16, left: 0 }}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={styles.textInput}
            placeholder="Last Name"
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
          <Text style={{ fontSize: 16, left: 0 }}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={styles.textInput}
            placeholder="Current Password"
          ></TextInput>
        </View>
        <Button onPress={handleSubmit} type="primary" text="Save Changes" />
      </ScrollView>
    </SafeAreaView>
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
  scrollView: {
    backgroundColor: "white",
    height: "100%"
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "yellow",
  },
});
