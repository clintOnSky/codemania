import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowTopRight = ({ width = 30, height = 30, ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 30 30" fill="none" {...props}>
    <Path
      d="M12.7003 9.67639L20.2769 9.66712L20.2862 17.2438"
      stroke="#EE8C47"
      strokeWidth={3.08916}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.68011 20.2899L20.1709 9.77336"
      stroke="#EE8C47"
      strokeWidth={3.08916}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowTopRight;
