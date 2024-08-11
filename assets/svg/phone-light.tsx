import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PhoneLight = ({ width, height, ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 121 113"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_b_0_1)">
      <Path
        d="M109.283 54.7139C112.303 54.7139 115.229 54.3171 118 53.5675L0 110L80.2213 5C77.4174 9.86116 75.8072 15.4884 75.8072 21.4905C75.8072 39.8438 90.7932 54.7139 109.277 54.7139H109.283Z"
        fill="url(#paint0_linear_0_1)"
        // style={{
        //   mixBlendMode: "overlay",
        // }}
      />
    </G>
    <G filter="url(#filter1_b_0_1)">
      <Path
        d="M114.52 110.486C116.613 111.638 118.79 112.468 121 113L18 107.435L113.56 65C109.734 67.2981 106.447 70.6096 104.142 74.796C97.124 87.5159 101.777 103.486 114.52 110.486Z"
        fill="url(#paint1_linear_0_1)"
        // style={{
        //   mixBlendMode: "overlay",
        // }}
      />
    </G>
    <G filter="url(#filter2_b_0_1)">
      <Path
        d="M54.3495 19.2491C56.0941 18.2351 57.6498 17.0261 59 15.65L10 88L20.8901 0C20.9068 3.7774 21.8736 7.61608 23.896 11.1149C30.0689 21.7897 43.6983 25.4334 54.3439 19.2436L54.3495 19.2491Z"
        fill="url(#paint2_linear_0_1)"
        // style={{
        //   mixBlendMode: "overlay",
        // }}
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_0_1"
        x1={3.75899}
        y1={114.161}
        x2={91.5484}
        y2={34.8501}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="#FDFDFD" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_0_1"
        x1={14.2853}
        y1={107.678}
        x2={104.443}
        y2={91.2402}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="#FDFDFD" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_0_1"
        x1={11.2279}
        y1={88.0891}
        x2={38.2615}
        y2={12.9447}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="#FDFDFD" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PhoneLight;
