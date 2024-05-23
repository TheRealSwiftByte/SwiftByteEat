import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { Link, router, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MenuItem, Restaurant } from '@/api/schema/SwiftByteTypes';
import {Api} from '@/api/api';
import { SB_COLOR_SCHEME } from '@/constants';
import { Stepper } from '@swift-byte/switftbytecomponents/src/components/Buttons/Stepper';
import { SWIFT_BYTE_COLOURS } from '@swift-byte/switftbytecomponents/constants';
import { Button, Checkbox, TextArea } from '@swift-byte/switftbytecomponents';

interface Topping {
  id: number,
  name: string
}

export default function MenuItemModal() {

  const { menuItemName, restaurantId } = useLocalSearchParams<{ menuItemName: string, restaurantId: string }>();
  const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItem | undefined>(undefined);
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState("")
  console.log(quantity)
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

  useFocusEffect(useCallback(() => {
    try{
      Api.getApi().getRestaurants().then((liveRestaurants) => {
        if (liveRestaurants) {
          console.log("liveRestaurants: ", JSON.stringify(liveRestaurants));
          if (liveRestaurants) {
            setSelectedMenuItem(liveRestaurants.find((r) => r.id.toString() === restaurantId)?.menu.find((m) => m.name === menuItemName));
          }
        }
      })
    }
    catch(error){
      Alert.alert("Error", "An error occurred while fetching the menu item")
    }
}, [restaurantId]))

  const handlePress = () => {
    if (quantity < 1) {
      Alert.alert("Please add at least one item")
      return
    }

    try{

      const activeCart = Api.getApi().getActiveCustomer()?.cart
      if (!activeCart.restaurant){
        Api.getApi().getRestaurant(restaurantId).then((restaurant) => {
          Api.getApi().getActiveCustomer().cart.restaurant = restaurant as Restaurant
        })
      }
      

      console.log(Api.getApi().getActiveCustomer()?.cart)
      //please forgive me for this monstrocity. Blame typescript for being so good?
      let activeItemIndex = Api.getApi().getActiveCustomer()?.cart.foodItems.findIndex((item) => item.name === selectedMenuItem?.name);
      console.log("activeItemIndex: ", activeItemIndex)
      const prevQuantity = activeItemIndex >= 0 ? Api.getApi().getActiveCustomer().cart.foodItems[activeItemIndex].quantity : 0
      
      if (activeItemIndex === -1){
        Api.getApi().getActiveCustomer().cart.foodItems.push({
          ...selectedMenuItem as MenuItem,
          quantity: quantity,
        })
      }
      else {
        Api.getApi().getActiveCustomer().cart.foodItems[activeItemIndex].quantity = prevQuantity as number + quantity
      }
      // if (activeItemIndex >= 0){
      //   Api.getApi().getActiveCustomer().cart.foodItems[activeItemIndex]["quantity"] = quantity
        
      // } else if (Api.getApi().getActiveCustomer().cart.foodItems[activeItemIndex]?.quantity !== undefined) {
      //   Api.getApi().getActiveCustomer().cart.foodItems[activeItemIndex].quantity = prevQuantity + quantity
      // }
      
      router.navigate("Cart")
    }
    catch(error){
      console.error(error)
      Alert.alert("Error", "An error occurred while adding the item to the cart")
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMenuItem?.imagePath }} style={styles.noImage} />
      <View style={{flex:1, justifyContent:"space-between"}}>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text style={styles.title}>{selectedMenuItem?.name}</Text>
            <Text style={styles.foodDescription}>{selectedMenuItem?.description}</Text>
          </View>
          <View style={{ width: "50%" }}>
            <Stepper value={quantity} onPress={(e) => {
              console.log("e from stepper:", e)
              setQuantity(e < 0 ? 0 : e)}} />
          </View>
        </View>
        {/* <View>
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
        </View> */}
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
