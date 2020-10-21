import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Selected_icon(props) {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        d="M16.667 0H3.333A2.675 2.675 0 00.667 2.667V24L10 20l9.333 4V2.667C19.333 1.2 18.133 0 16.667 0z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Selected_icon;
