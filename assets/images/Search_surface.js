import * as React from "react";
import Svg, { G, Circle, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Search_surface(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <G filter="url(#filter0_d)">
        <Circle cx={24} cy={20} r={20} fill="#FBBD05" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Search_surface;
