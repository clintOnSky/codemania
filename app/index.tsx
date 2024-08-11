import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Index() {
  useLayoutEffect(() => {
    setTimeout(() => {
      router.replace("/onboarding");
    }),
      5000;
  }, []);
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: Colors.background,
  },
});
