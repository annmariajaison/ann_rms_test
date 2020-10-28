import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Tab_bar_bg(props) {
  return (
    <Svg width={360} height={56} viewBox="0 0 360 56" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M360 0H0v48h360V0z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Tab_bar_bg;