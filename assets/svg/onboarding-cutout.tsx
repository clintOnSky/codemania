import Svg, { SvgProps, Path } from "react-native-svg";
const OnboardingCutOut = ({ width, height }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 247 306" fill="none">
    <Path
      d="M246.373 125.131L236.785 158.558C239.904 160.396 242.123 163.654 242.457 167.53L245.856 206.628C246.411 213.009 241.676 218.627 235.288 219.181L16.2482 238.157C9.85431 238.711 4.22534 233.986 3.67053 227.61L0.271601 188.512C-0.283216 182.131 4.45158 176.513 10.8401 175.959L186.054 160.778L9.81122 110.412C3.64359 108.649 0.0722974 102.23 1.83909 96.0746L11.578 62.1372C6.41229 60.9599 2.55551 56.3528 2.55551 50.8426V11.5938C2.55551 5.19123 7.75894 -0.00180054 14.1743 -0.00180054H234.038C240.453 -0.00180054 245.657 5.19123 245.657 11.5938V50.8426C245.657 57.2452 240.453 62.4382 234.038 62.4382H69.1928L238.401 110.794C244.569 112.557 248.14 118.976 246.373 125.131ZM242.457 235.319C241.902 228.938 236.268 224.218 229.88 224.771L10.8347 243.748C4.44081 244.302 -0.288604 249.925 0.266213 256.301L3.66514 295.399C4.21996 301.78 9.85431 306.5 16.2428 305.946L235.282 286.97C241.676 286.416 246.406 280.793 245.851 274.417L242.452 235.319H242.457Z"
      fill="black"
    />
  </Svg>
);
export default OnboardingCutOut;
