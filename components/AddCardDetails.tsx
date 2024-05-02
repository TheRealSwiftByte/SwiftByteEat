import { SB_COLOR_SCHEME } from "@/constants";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const AddCardDetails = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John Smith"
        // value={name}
        // onChangeText={setName}
      />
      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        placeholder="XXXX XXXX XXXX XXXX"
        // value={cardNumber.toString()}
        keyboardType="numeric"
        maxLength={16}
        // onChangeText={(input) => setCardNumber(parseInt(input))}
      />
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>CVV</Text>
          <TextInput style={styles.smallInput} placeholder="XXX" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput style={styles.smallInput} placeholder="dd/mm/yyyy" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: "#BBC5C1",
    borderWidth: 1,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
  },
  smallInput: {
    fontSize: 16,
    padding: 15,
    borderRadius: 10,
    borderColor: "#BBC5C1",
    borderWidth: 1,
  },
});

export default AddCardDetails;
