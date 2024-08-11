import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    regular: require("@assets/fonts/articulatcf-regular.otf"),
    medium: require("@assets/fonts/articulatcf-medium.otf"),
    semiBold: require("@assets/fonts/articulatcf-demibold.otf"),
    bold: require("@assets/fonts/articulatcf-bold.otf"),
    extraBold: require("@assets/fonts/articulatcf-extrabold.otf"),
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

  const segments = useSegments();

  useEffect(() => {
    console.log(segments);
  }, [segments]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#020912" translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(home)/dashboard" />
      </Stack>
    </SafeAreaView>
  );
}
