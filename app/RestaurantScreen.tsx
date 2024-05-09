import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SB_COLOR_SCHEME } from '@/constants';
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native';
import { router, useLocalSearchParams } from 'expo-router';
import { MenuItem, Restaurant, restaurants } from '@/mock_data';

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

    useEffect(() => {
        const restaurant = restaurants.find((r) => r.id.toString() === restaurantId);
        if (restaurant) {
            setSelectedRestaurant(restaurant);
        }
    }, [])

    if (!selectedRestaurant) {
        return (<></>)
    }

    const renderItem = (item: MenuItem) => {
        return (
            <TouchableOpacity 
                key={item.id} 
                style={[styles.dFlex, { marginBottom: 16 }]}
                onPress={() => router.navigate({
                    pathname: "MenuItemModal",
                    params: { 
                        menuItemId: item.id.toString(),
                        restaurantId: selectedRestaurant.id.toString()
                    },
                })}
                >
                <View style={{ flex: 2 }}>
                    <Image source={{ uri: item.imageUrl }} style={{ width: 70, height: 70, backgroundColor: "grey", borderRadius: 25 }} />
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
            <ImageBackground source={{ uri: selectedRestaurant?.imageUrl }} style={styles.header}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, color: "white" }}>{selectedRestaurant.name}</Text>
                    <Text style={{ color: "white", fontSize: 12 }}>{selectedRestaurant.address.street}, {selectedRestaurant.address.city}</Text>
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
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: "#d1d1d1", marginBottom: 16, marginLeft:50 }}></View>}
                />
            </View>
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
