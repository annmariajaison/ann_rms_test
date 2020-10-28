import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Academic_icon(props) {
  return (
    <Svg width={21} height={18} viewBox="0 0 21 18" fill="none" {...props}>
      <Path
        d="M3 10.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L3 10.18zM9.04.52L.61 5.12c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L19 7.09V13c0 .55.45 1 1 1s1-.45 1-1V6.59c0-.37-.2-.7-.52-.88L10.96.52a2.04 2.04 0 00-1.92 0z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Academic_icon;
