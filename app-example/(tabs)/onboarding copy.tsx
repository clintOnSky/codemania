import OnboardingCutOut from "@/assets/svg/onboarding-cutout";
import { Colors } from "@/constants/Colors";
import MaskedView from "@react-native-masked-view/masked-view";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PhoneLight from "@/assets/svg/phone-light";
import Sizes from "@/constants/Sizes";
import { Fonts } from "@/constants/Fonts";
import ArrowTopRight from "@/assets/svg/arrow-top-right";
import { Link } from "expo-router";
import Constants from "expo-constants";

const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

const Onboarding = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={styles.topContainer}>
        <View style={styles.maskedViewWrapper}>
          <MaskedView
            style={styles.maskedContainer}
            maskElement={<OnboardingCutOut width={wp(64)} />}
          >
            <View style={styles.maskedContent}>
              <Image
                source={require("@assets/images/onboarding.png")}
                resizeMode="contain"
              />
              <View style={styles.phoneLightWrapper}>
                <PhoneLight />
              </View>
            </View>
          </MaskedView>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.descWrapper}>
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
        <Link href="/dashboard" asChild push>
          <TouchableOpacity style={styles.dashboardBtn} activeOpacity={0.8}>
            <Text style={styles.dashboardTxt}>Go to dashboard</Text>
            <ArrowTopRight width={Sizes.large30} />
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingBottom: Sizes.extraLarge,
  },
  topContainer: {
    flex: 1,
    width: wp(100),
    alignItems: "center",
    justifyContent: "center",
    paddingTop: STATUS_BAR_HEIGHT,
  },
  maskedViewWrapper: {
    width: wp(64),
    height: hp(50), // Adjust height to a percentage of the screen
  },
  maskedContainer: {
    flex: 1,
  },
  maskedContent: {
    flex: 1,
    backgroundColor: Colors.pink,
    position: "relative",
  },
  phoneLightWrapper: {
    position: "absolute",
    right: Sizes.large,
    top: Sizes.large * 3.5,
  },
  bottomContainer: {
    flex: 1,
    width: wp(64),
    justifyContent: "flex-end",
  },
  descWrapper: {
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
    marginBottom: hp(5), // Ensure some space from the bottom
  },
  dashboardTxt: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.large - 2,
    lineHeight: Sizes.large * 1.1,
    color: Colors.dark,
  },
});
