import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MenuItem, restaurants } from '@/mock_data';
import { SB_COLOR_SCHEME } from '@/constants';
import { Button, Checkbox, TextArea } from '@swift-byte/switftbytecomponents';

export default function MenuItemModal() {

  const { menuItemId, restaurantId } = useLocalSearchParams<{ menuItemId: string, restaurantId: string }>();
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItem | undefined>(undefined);
  const [toppings, setToppings] = React.useState<string[]>([]);
  const [notes, setNotes] = React.useState<string>('');

  useEffect(() => {
    const menuItem = restaurants.find((r) => r.id.toString() === restaurantId)?.menu.find((m) => m.id.toString() === menuItemId);
    if (menuItem) {
      setSelectedMenuItem(menuItem);
    }
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMenuItem?.imageUrl }} style={styles.noImage} />
      <Text style={styles.title}>{selectedMenuItem?.name}</Text>
      <Text style={{color:"grey"}}>{selectedMenuItem?.description}</Text>
      <StatusBar style="light" />
      <View style={[styles.section, { alignItems: "flex-start" }]}>
        <Text style={styles.subtitle}>Toppings (optional)</Text>
        <Checkbox label="Extra Chilli" checked={toppings.some((t) => t === "chilli")} onChange={(e) => setToppings(prev => [...prev, "chilli"])} />
        <Checkbox label="More pizazz" checked={toppings.some((t) => t === "pizazz")} onChange={(e) => setToppings(prev => [...prev, "pizazz"])} />
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Notes</Text>
        <TextArea placeholder="Your notes here" value={notes} onChangeText={setNotes} style={styles.textArea} />
      </View>
      <Button text={`Add to card $${selectedMenuItem?.price}`} onPress={() => { }} type={'primary'} />
    </View>
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
    marginTop:20,
    fontWeight: "bold",
  },
  dFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  categoryImage: {
    borderRadius: 60,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: SB_COLOR_SCHEME.SB_PRIMARY,
  },
  noImage: {
    width: "100%",
    height: 200,
    backgroundColor: "grey",
    borderRadius: 25,
  },
  textArea: {
    borderRadius: 20,
  },
  section: {
    marginTop:20,
    width: "100%",
    flex: 1
  }
});
