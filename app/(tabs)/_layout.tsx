import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import NotificationBadge from "../../assets/icons/icon-notification-badge.svg";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={22} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerStyle: {
          height: 90,
        },
        tabBarStyle: {
          height: 90,
          paddingBottom: 32,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
          headerRight: () => (
            <Link href="/notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <NotificationBadge style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
          
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-outline" color={color} />
          ),
          headerRight: () => (
            <Link href="/notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <NotificationBadge style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="receipt-outline" color={color} />
          ),
          headerRight: () => (
            <Link href="/notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <NotificationBadge style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cart-outline" color={color} />
          ),
          headerRight: () => (
            <Link href="/notifications" asChild>
              <Pressable>
                {({ pressed }) => (
                  <NotificationBadge style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-circle-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
