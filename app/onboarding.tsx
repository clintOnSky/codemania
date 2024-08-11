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

const LIGHT_ASPECT_RATIO = 1.0707964602;

const Onboarding = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <View style={styles.topContent}>
        <MaskedView
          style={styles.maskedView}
          maskElement={
            <View style={styles.maskedElementView}>
              <OnboardingCutOut />
            </View>
          }
        >
          <View style={styles.maskedContent}>
            <Image
              source={require("@assets/images/onboarding.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <View style={styles.phoneLightView}>
              <PhoneLight
                width={Sizes.large30 * 4}
                height={(Sizes.large30 * 4) / LIGHT_ASPECT_RATIO}
              />
            </View>
          </View>
        </MaskedView>
      </View>
      <View style={styles.bottomContent}></View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topContent: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "red",
  },
  maskedView: {
    flex: 1,
    backgroundColor: Colors.pink,
  },
  maskedElementView: {
    flex: 1,
    marginTop: Sizes.large30 * 3,
    justifyContent: "center",
    alignItems: "center",
  },
  maskedContent: {
    flex: 1,
    width: "100%",
    // flexDirection: "row",
    backgroundColor: Colors.pink,
  },
  image: {
    marginTop: Sizes.large30 * 3,
    width: "100%",
    flex: 1,
  },
  phoneLightView: {
    position: "absolute",
    right: wp(20),
    bottom: Sizes.large * 5.8,
  },
  bottomContent: {
    flex: 1,
    backgroundColor: "blue",
  },
});
