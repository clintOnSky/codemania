import { Stack, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    regular: require("@assets/fonts/articulat_cf_regular.otf"),
    medium: require("@assets/fonts/articulat_cf_medium.otf"),
    semiBold: require("@assets/fonts/articulat_cf_demi_bold.otf"),
    bold: require("@assets/fonts/articulat_cf_bold.otf"),
    extraBold: require("@assets/fonts/articulat_cf_extra_bold.otf"),
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
      <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
        <Stack.Screen
          name="index"
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="(home)/dashboard"
          options={{
            animation: "slide_from_right",
            animationTypeForReplace: "push",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
