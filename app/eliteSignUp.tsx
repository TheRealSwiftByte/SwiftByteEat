import { Image, StyleSheet } from "react-native";
import SearchIcon from "../assets/icons/icon-search.svg";
import { Text, View } from "@/components/Themed";
import React, { useEffect, useState } from "react";
import { Button, TextInput } from "@swift-byte/switftbytecomponents";

export default function eliteSignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Go Premium</Text>
      <Text style={styles.subTitle}>
        Unlock all the power of this mobile toci ant
        enjoy digital experience like never before
      </Text>
      <Image source={require('../assets/images/premiumBox.png')}></Image>
      <View style={styles.pricingContainer}>
        <View style={{alignItems: 'center', backgroundColor: '#1D3D30', padding: 10, borderRadius: 10, width: "90%"}}>
            <Text style={styles.price}>Annual: %10 off</Text>
            <Text style={styles.priceDetails}>
            First 30 days free Then $25/Year
            </Text>
        </View>
        <View style={{alignItems: 'center', backgroundColor: '#EBEDF0', padding: 10, borderRadius: 10, width: "90%", marginTop: '10%', marginBottom: '10%'}}>
            <Text style={{fontSize: 20,fontWeight: 'bold',color: "#1D3D30"}}>Monthly:</Text>
            <Text style={{fontSize: 14,marginTop: 5,color: "#1D3D30"}}>First 7 days free Then $5.96/Month</Text>
        </View>
        
      </View>
      <Button type="primary" text="Join Us" onPress={() => console.log('Join Us button pressed')} />
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
});
