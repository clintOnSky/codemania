import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { router } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Index() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Navigating to onboarding screen");
      router.replace("/onboarding");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Fonts.bold, color: Colors.white }}>
        SplashScreen Here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
});
