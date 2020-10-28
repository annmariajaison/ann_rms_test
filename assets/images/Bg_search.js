import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Bg_search(props) {
  return (
    <Svg width={261} height={32} viewBox="0 0 261 32" fill="none" {...props}>
      <G filter="url(#filter0_i)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16h229c8.837 0 16-7.163 16-16s-7.163-16-16-16H16z"
          fill="#FAFAFA"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default Bg_search;
