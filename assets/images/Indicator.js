import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Indicator(props) {
  return (
    <Svg width={180} height={3} viewBox="0 0 180 3" fill="none" {...props}>
      <G filter="url(#filter0_i)">
        <Path fill="#FBBD05" d="M0 0H180V3H0z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Indicator;
