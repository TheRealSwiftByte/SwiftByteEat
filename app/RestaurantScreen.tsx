import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SB_COLOR_SCHEME } from '@/constants';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { MenuItem, Restaurant } from '@/api/schema/SwiftByteTypes';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Api } from '@/api/api';

interface RestaurantProps {
    route: RouteProp<ParamListBase, string>;
    navigation: NavigationProp<ParamListBase>;
}

const RatingsCard = ({ restaurant }: { restaurant: Restaurant }) => {
    console.log(restaurant)
    return (
        <View style={{ marginBottom: 20, marginTop:20, borderWidth: 1, borderRadius: 10, padding: 20, borderColor: "grey" }}>
            <Text>Rating: {restaurant.averageRating}</Text>
            <Text>Delivery: Deliveries in 20-25 mins</Text>
            <Text>Distance: 1km</Text>
        </View>
    );
}

export default function RestaurantScreen({ route, navigation }: RestaurantProps) {

    const { restaurantId } = useLocalSearchParams<{ restaurantId: string }>();
    const [selectedRestaurant, setSelectedRestaurant] = React.useState<Restaurant | undefined>(undefined);

    const safeareaInset = useSafeAreaInsets()

    useFocusEffect(useCallback(() => {
        Api.getApi().getRestaurants().then((liveRestaurants) => {
            if (liveRestaurants) {
                console.log("liveRestaurants: ", JSON.stringify(liveRestaurants));
                if (liveRestaurants) {
                    setSelectedRestaurant(liveRestaurants.find((r) => r.id.toString() === restaurantId));
                }
            }
        })
    }, [restaurantId]))

    if (!selectedRestaurant) {
        return (<></>)
    }

    const renderItem = (item: MenuItem) => {
        return (
            <TouchableOpacity 
                key={item.name} 
                style={[styles.dFlex, { marginBottom: 16 }]}
                onPress={() => router.navigate({
                    pathname: "MenuItemModal",
                    params: { 
                        menuItemName: item.name,
                        restaurantId: selectedRestaurant.id
                    },
                })}
                >
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: item.imagePath }} style={{ width: 70, height: 70, backgroundColor: "grey", borderRadius: 25 }} />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={{ color: SB_COLOR_SCHEME.SB_PRIMARY, fontSize: 14, fontWeight: "bold" }}>${item.price}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View>
            <ImageBackground source={{ uri: selectedRestaurant?.imageURI }} style={styles.header}>
                <AntDesign onPress={() => router.dismiss()} name='arrowleft' color={"white"} size={40} style={{position:"absolute", top:safeareaInset.top}}/>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>{selectedRestaurant.name}</Text>
                    <Text style={{ color: "white", fontSize: 12 }}>{selectedRestaurant.address}</Text>
                </View>
            </ImageBackground>
            <View style={styles.container}>
                <RatingsCard restaurant={selectedRestaurant} />

                <Text style={styles.title}>Menu</Text>
            {/* seperator line */}
                <View style={{ borderBottomWidth: 1, borderBottomColor: "grey", marginBottom: 16, marginTop:16 }}></View>
                <FlatList
                    data={selectedRestaurant.menu}
                    renderItem={({ item }) => renderItem(item)}
                    keyExtractor={(item) => item.name}
                    ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: "#d1d1d1", marginBottom: 16, marginLeft:50 }}></View>}
                />
            </View>
            <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 32,
        paddingRight: 32,
        flex: 1,
        minHeight: "100%",
        justifyContent: "space-between",
        paddingBottom: 100,
    },
    scrollView: {
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: SB_COLOR_SCHEME.SB_PRIMARY,
    },
    dFlex: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: SB_COLOR_SCHEME.SB_PRIMARY,
    },
    header: {
        height: 200,
        width: "100%",
        justifyContent: "flex-end",
        marginBottom: 20,
    },
});
