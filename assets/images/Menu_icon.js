import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Menu_icon(props) {
  return (
    <Svg width={18} height={12} viewBox="0 0 18 12" fill="none" {...props}>
      <Path
        d="M1 12h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1z"
        fill="#403C4F"
      />
    </Svg>
  );
}

export default Menu_icon;
