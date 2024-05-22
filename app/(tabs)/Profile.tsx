import { Pressable, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Api } from "@/api/api";
import { Customer } from "@/api/schema/SwiftByteTypes";
import NotificationBadge from "../../assets/icons/icon-notification-badge.svg";

export default function ProfileScreen() {
  const [activeCustomer, setActiveCustomer] = useState<Customer | undefined>(undefined);

  console.log(Api.getApi().getActiveCustomer().id)
  
  useFocusEffect(useCallback(() => {
    setActiveCustomer(Api.getApi().getActiveCustomer())
    console.log("Active Customer: ", activeCustomer)
  }, []))

  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <Image 
          source={require("../../assets/images/profilePic.webp")} 
          resizeMode="contain" 
          style={styles.avatar}
        />
        <View style={styles.painName}>
          <Text style={styles.username}>{activeCustomer?.firstName} {activeCustomer?.lastName}</Text>
          <View>
            <Text style={styles.status}>{activeCustomer?.membership}</Text>
          </View>
        </View>

        <Link href="/notifications" asChild style={styles.notificationButton}>
          <TouchableOpacity>
            <NotificationBadge />
          </TouchableOpacity>
        </Link>
      </View>
      <View>
        {/* Edit Account Section */}
        <Link href="/editProfile" asChild>
          <TouchableOpacity>
            <View style={styles.setting}>
              <Text style={styles.settingText}>Edit Account</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </Link>

        <Link href="/ChangePassword" asChild>
          <TouchableOpacity>
            <View style={styles.setting}>
              <Text style={styles.settingText}>Change Password</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </Link>

        {/* My Locations Section */}
        {/* <TouchableOpacity>
          <View style={styles.setting}>
            <Text style={styles.settingText}>My Locations</Text>
            <Text style={styles.chevron}>›</Text>
          </View>
        </TouchableOpacity> */}

        {/* Payment Methods Section */}
        <Link href="/PaymentMethod" asChild>
          <TouchableOpacity>
            <View style={styles.setting}>
              <Text style={styles.settingText}>Payment Methods</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </Link>

        {/* My Reviews Section */}
        <Link href="/Reviews" asChild>
          <TouchableOpacity>
            <View style={styles.setting}>
              <Text style={styles.settingText}>My Reviews</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </Link>

        {/* SwiftByte Elite */}
        <Link href="/eliteSignUp" asChild>
          <TouchableOpacity>
            <View style={styles.setting}>
              <Text style={styles.settingText}>ByteElite</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  profilePic: {
    backgroundColor: "#F1E05E",
    width: 93,
    height: 93,
    borderRadius: 93,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "95%",
    alignSelf: "center",
  },
  settingText: {
    fontSize: 16,
  },
  chevron: {
    fontSize: 18,
  },
  containerProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    width: "90%",
    alignSelf: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "yellow",
  },
  username: {
    fontSize: 18,
    marginLeft: 16,
  },
  notificationButton: {
    flex: 1,
    alignItems: "flex-end",
  },
  notificationIcon: {
    width: 24,
    height: 24,
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
});
