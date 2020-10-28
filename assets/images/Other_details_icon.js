import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Other_details_icon(props) {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        d="M17 11H1c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zm0-5H1c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm0-6H1C.45 0 0 .45 0 1v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zm.5 15H.5c-.28 0-.5.22-.5.5s.22.5.5.5h17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Other_details_icon;
