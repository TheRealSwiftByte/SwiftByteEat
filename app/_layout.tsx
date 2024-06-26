import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { SB_COLOR_SCHEME } from "@/constants";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signIn" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />

        
        <Stack.Screen name="Reviews" options={{
          title: "Reviews",
          headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
          headerBackTitle: "Back",
          contentStyle: {
            backgroundColor: "white",
          },
        }}/>

        <Stack.Screen
          name="UserSavedPayments"
          options={{
            title: "Paymnent",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="editProfile"
          options={{
            title: "Edit Profile",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackVisible: true,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{ contentStyle: { backgroundColor: "white" } }}
        />

        <Stack.Screen
          name="ChangePassword"
          options={{
            title: "Change Password",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackVisible: true,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="checkout"
          options={{
            title: "Checkout",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="PaymentMethod"
          options={{
            title: "Payment",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />

        <Stack.Screen
          name="delivery"
          options={{
            title: "Delivery",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            gestureEnabled: false,
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="orderHistory"
          options={{
            title: "Order History",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="AddCard"
          options={{
            title: "Add Card",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{ presentation: "modal", headerTitle: "Notifications" }}
        />
        <Stack.Screen
          name="success"
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuItemModal"
          options={{ headerShown: false, presentation: "modal"}}
        />
        <Stack.Screen
          name="Cart"
        />
        <Stack.Screen
          name="eliteSignUp"
          options={{ 
            title: "Byte Elite",
            headerTintColor: SB_COLOR_SCHEME.SB_PRIMARY,
            headerBackTitle: "Back",
            contentStyle: {
              backgroundColor: "white",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
