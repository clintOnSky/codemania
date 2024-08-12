import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
const DashboardButton = (props: SvgProps) => (
  <Svg width={328} height={328} viewBox="0 0 328 328" fill="none" {...props}>
    <Circle cx={164} cy={164} r={164} fill="#4E545A" fillOpacity={0.15} />
    <Circle cx={164} cy={164} r={122} fill="#4E545A" fillOpacity={0.3} />
    <Rect x={78.5} y={78.5} width={171} height={171} rx={85.5} fill="#4E545A" />
    <Rect
      x={78.5}
      y={78.5}
      width={171}
      height={171}
      rx={85.5}
      stroke="url(#paint0_linear_1_206)"
    />
    <G clipPath="url(#clip0_1_206)">
      <Path
        d="M150.587 173.166L126.813 194.032C120.264 185.93 116.352 175.664 116.352 164.498C116.352 138.31 137.874 117.078 164.425 117.078C176.039 117.078 186.689 121.143 195.001 127.906L126.283 173.166H150.587Z"
        fill="white"
      />
      <Path
        d="M212.493 164.498C212.493 190.69 190.971 211.922 164.425 211.922C153.11 211.922 142.709 208.063 134.496 201.612L204.977 159.256H174.79L201.916 134.821C208.532 142.945 212.493 153.264 212.493 164.498Z"
        fill="white"
      />
      <Path
        d="M221 114L135.233 170.489H157.718L107 215L195.308 161.933H167.799L221 114Z"
        fill="white"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_206"
        x1={164}
        y1={78}
        x2={164}
        y2={250}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#999999" />
        <Stop offset={1} stopColor="#858585" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="clip0_1_206">
        <Rect
          width={114}
          height={101}
          fill="white"
          transform="translate(107 114)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DashboardButton;
