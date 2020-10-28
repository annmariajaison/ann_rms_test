import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Contact_icon(props) {
  return (
    <Svg width={20} height={24} viewBox="0 0 20 24" fill="none" {...props}>
      <Path
        d="M17 0H3c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM3 24h14c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zM18 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S7.75 10.24 7.75 9 8.76 6.75 10 6.75zM15 17H5v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Contact_icon;
