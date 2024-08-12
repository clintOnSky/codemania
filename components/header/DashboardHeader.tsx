import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Sizes from "@/constants/Sizes";
import { Colors } from "@/constants/Colors";

const DashboardHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileView}>
        <View style={styles.orangeCircleFill} />
        <Image
          source={require("@assets/images/dp1.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Sizes.large,
    paddingTop: Sizes.large / 2,
    alignItems: "flex-end",
  },
  profileView: {
    alignItems: "flex-end",
  },
  orangeCircleFill: {
    position: "absolute",
    right: Sizes.large / 4,
    width: Sizes.large32,
    height: Sizes.large32,
    borderRadius: Sizes.large32 / 2,
    backgroundColor: Colors.orange,
  },
  image: {
    height: Sizes.large32,
    aspectRatio: 1,
    borderColor: Colors.background,
    borderWidth: 1.5,
    borderRadius: Sizes.extraLarge,
  },
});
