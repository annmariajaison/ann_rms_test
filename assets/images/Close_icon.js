import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Close_icon(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 0C3.576 0 0 3.576 0 8c0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8zm4 10.872L10.872 12 8 9.128 5.128 12 4 10.872 6.872 8 4 5.128 5.128 4 8 6.872 10.872 4 12 5.128 9.128 8 12 10.872z"
        fill="#403C4F"
      />
    </Svg>
  );
}

export default Close_icon;
