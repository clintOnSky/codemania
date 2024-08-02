import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileView}>
          <View style={styles.orangeCircleFill} />
          <View style={styles.imageWrapper}>
            <Image
              source={require("@assets/images/dp1.png")}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: Sizes.large / 2,
    alignItems: "flex-end",
  },
  profileView: {
    borderRadius: Sizes.large,
    backgroundColor: "blue",
    alignItems: "flex-end",
  },
  orangeCircleFill: {
    ...StyleSheet.absoluteFillObject,
    left: -(Sizes.large / 4),
    width: Sizes.large32,
    borderRadius: Sizes.large32 / 2,
    aspectRatio: 1,
    backgroundColor: Colors.orange,
  },
  imageWrapper: {
    borderWidth: 1.5,
    borderColor: Colors.background,
    borderRadius: Sizes.extraLarge,
    overflow: "hidden",
  },
  image: {
    height: Sizes.large32,
    aspectRatio: 1,
  },
});
