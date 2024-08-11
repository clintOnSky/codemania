import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import DashboardHeader from "@/components/header/DashboardHeader";
import { router } from "expo-router";
import { Fonts } from "@/constants/Fonts";

const Dashboard = () => {
  console.log(router.canGoBack());
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <View style={styles.content}>
        <Text style={styles.actionText}>Tap to Send</Text>
        <Text style={styles.actionText}>Long tap to Receive</Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Sizes.large,
  },
  content: {
    flex: 1,
  },
  actionText: {
    fontFamily: Fonts.extraBold,
    fontSize: Sizes.large,
    color: Colors.white,
  },
});
