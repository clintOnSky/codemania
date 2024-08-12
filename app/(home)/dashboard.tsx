import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Sizes from "@/constants/Sizes";
import DashboardHeader from "@/components/header/DashboardHeader";
import { Fonts } from "@/constants/Fonts";
import DashboardButton from "@/assets/svg/dashboard-button";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <View style={styles.content}>
        <Text style={styles.actionText}>Tap to Send</Text>
        <Text style={[styles.actionText, { color: Colors.gray, opacity: 0.4 }]}>
          Long tap to Receive
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Sending")}
          onLongPress={() => alert("Receiving")}
          activeOpacity={0.8}
        >
          <DashboardButton />
        </TouchableOpacity>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    fontFamily: Fonts.extraBold,
    fontSize: Sizes.large,
    lineHeight: Sizes.mediumLarge * 1.5,
    color: Colors.white,
  },
  button: {
    borderRadius: Sizes.large32 * 10,
  },
});
