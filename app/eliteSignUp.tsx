import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { Button } from "@swift-byte/switftbytecomponents";
import { SB_COLOR_SCHEME } from "@/constants";
import { Api } from "@/api/api";
import { UpdateCustomerInput } from "@/api/schema/Customer";
import { router } from "expo-router";

export default function eliteSignUp() {

  const [option, setOption] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false)


  const handlePress = async() =>{

    setIsLoading(true)
    const updateObject: UpdateCustomerInput = {
      membership: "ByteElite"
    }

    try{

      await Api.getApi().updateCustomer(updateObject)
      Alert.alert("Success", "Your account has been updated")
      router.back()
    }
    catch(error){
      console.log(error)
      Alert.alert("Error", "An error occured while updating your account")
    }

    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Premium</Text>
      <Text style={styles.subTitle}>
        Unlock all the power of this mobile toci ant
        enjoy digital experience like never before
      </Text>
      <Image source={require('../assets/images/premiumBox.png')}></Image>
      
      <View style={styles.pricingContainer}>
        <TouchableOpacity style={{width: '100%', alignItems: "center"}} onPress={() => setOption("annual")}>
            <View style={[{alignItems: 'center', backgroundColor: '#1D3D30', padding: 10, borderRadius: 10, width: "90%"},option === "annual" ? styles.selected : styles.notSelected]}>
                <Text style={styles.price}>Annual: %10 off</Text>
                <Text style={styles.priceDetails}>
                First 30 days free Then $25/Year
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%', alignItems: "center"}} onPress={() => setOption("monthly")}>
            <View style={[{alignItems: 'center', backgroundColor: '#EBEDF0', padding: 10, borderRadius: 10, width: "90%", marginTop: '10%', marginBottom: '10%'}, option === "monthly" ? styles.selected : styles.notSelected]}>
                <Text style={{fontSize: 20,fontWeight: 'bold',color: "#1D3D30"}}>Monthly:</Text>
                <Text style={{fontSize: 14,marginTop: 5,color: "#1D3D30"}}>First 7 days free Then $5.96/Month</Text>
            </View>
        </TouchableOpacity>
        
      </View>
      <Button type="primary" text="Join Us" onPress={() => handlePress()} />
      {isLoading && <Image source={require('../assets/images/loading.gif')} resizeMode="contain" style={{width:100, height:100}}/>}

      <View style={styles.legal}>
        <Text style={styles.legalText}>
        By placing this order, you agree to the Terms of Service and Privacy Policy. Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  pricingContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '100%'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#F1E05E"
  },
  priceDetails: {
    fontSize: 14,
    marginTop: 5,
    color: "#F1E05E"
  },
  legal: {
    marginTop: 20,
  },
  legalText: {
    fontSize: 12,
  },
  selected:{
    borderWidth:3,
    borderColor:SB_COLOR_SCHEME.SB_TERTIARY
  },
  notSelected:{
    borderWidth:0
  }
});
