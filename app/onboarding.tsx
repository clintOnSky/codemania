import { Colors } from "@/constants/Colors";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  NativeSyntheticEvent,
  ImageLoadEventData,
} from "react-native";
import Sizes from "@/constants/Sizes";
import { Fonts } from "@/constants/Fonts";
import ArrowTopRight from "@/assets/svg/arrow-top-right";
import { Link } from "expo-router";

const Onboarding = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={styles.topContent}>
        <Image
          source={require("@assets/images/onboarding-cutout.png")}
          style={styles.image}
          resizeMode="contain"
          onLoad={(event: NativeSyntheticEvent<ImageLoadEventData>) => {
            const { height, width } = event.nativeEvent.source;
            console.log(width, height);
          }}
        />
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.descriptionView}>
          <View style={styles.sendView}>
            <Text style={styles.descText}>Send</Text>
          </View>
          <View>
            <Text style={styles.descText}>Receive</Text>
          </View>
          <View>
            <Text style={styles.descText}>Connect</Text>
          </View>
        </View>
        <Link href="/(home)/dashboard" asChild>
          <TouchableOpacity style={styles.dashboardBtn} activeOpacity={0.8}>
            <Text>Go to dashboard</Text>
            <ArrowTopRight />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Sizes.mediumLarge * 3,
  },
  topContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
  },
  bottomContent: {
    flex: 1,
    justifyContent: "center",
    // backgroundColor: "red",
  },
  descriptionView: {
    marginBottom: Sizes.extraLarge2,
    gap: Sizes.large,
  },
  sendView: {
    backgroundColor: Colors.orange,
    paddingVertical: Sizes.small / 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.small,
  },
  descText: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.extraLarge2,
    lineHeight: Sizes.extraLarge2 * 1.2,
    textAlign: "center",
    color: Colors.white,
  },
  dashboardBtn: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Sizes.large30 / 2,
    paddingVertical: Sizes.smaller / 2,
    backgroundColor: Colors.white,
    borderRadius: Sizes.medium / 2,
  },
  dashboardTxt: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.large - 2,
    lineHeight: Sizes.large * 1.1,
    color: Colors.dark,
  },
});
