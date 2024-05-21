import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MenuItem, restaurants } from '@/mock_data';
import { SB_COLOR_SCHEME } from '@/constants';
import { Stepper } from '@swift-byte/switftbytecomponents/src/components/Buttons/Stepper';
import { SWIFT_BYTE_COLOURS } from '@swift-byte/switftbytecomponents/constants';
import { Button, Checkbox, TextArea } from '@swift-byte/switftbytecomponents';

interface Topping {
  id: number,
  name: string
}

export default function MenuItemModal() {

  const { menuItemId, restaurantId } = useLocalSearchParams<{ menuItemId: string, restaurantId: string }>();
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItem | undefined>(undefined);
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState("")
  const [toppings, setToppings] = useState<Topping[]>(
    [
      {
        id: 0,
        name: "Fresh Chilli",
      },
      {
        id: 1,
        name: "Extra rice",
      }
    ])

  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([])

  useEffect(() => {
    const menuItem = restaurants.find((r) => r.id.toString() === restaurantId)?.menu.find((m) => m.id.toString() === menuItemId);
    if (menuItem) {
      setSelectedMenuItem(menuItem);
    }
  }, [])

  const handlePress = () => {
    if (quantity < 1) {
      Alert.alert("Please add at least one item")
      return
    }
    router.navigate("Cart")
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMenuItem?.imageUrl }} style={styles.noImage} />
      <View style={{flex:1, justifyContent:"space-between"}}>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text style={styles.title}>{selectedMenuItem?.name}</Text>
            <Text style={styles.foodDescription}>{selectedMenuItem?.description}</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Stepper value={quantity} onPress={(e) => setQuantity(e < 0 ? 0 : e)} />
          </View>
        </View>
        <View>
          <Text style={[styles.title, { marginTop: 20 }]}>Extras</Text>
          {toppings.map((topping, i) => {
            return (
              <View key={i} style={{ flexDirection: "row", alignItems: 'center' }}>
                <Checkbox checked={selectedToppings.some((a) => a.id === topping.id)} onPress={() => {
                  if (!selectedToppings.some((a) => a.id === topping.id)) {
                    setSelectedToppings(prev => [...prev, topping])
                  }
                  else {
                    setSelectedToppings(selectedToppings.filter((a) => a.id !== topping.id))
                  }

                }} />
                <Text style={styles.toppingText}>{topping.name}</Text>
              </View>
            )
          })}
        </View>
        <TextArea style={styles.textArea} value={notes} onChangeText={setNotes} placeholder='Add notes here...'/>
        <Button text={`Add to Cart $${selectedMenuItem?.price as number * quantity}`} type={'primary'} onPress={handlePress} />
        <StatusBar style="light" />
      </View>
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
  foodDescription: {
    color: "#8E8E93",
    marginTop: 10
  },
  toppingText: {
    fontSize: 18,
    marginLeft: 10
  },
  textArea: {
    maxHeight:200
  }
});
