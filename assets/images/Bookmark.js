import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Bookmark(props) {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M12 0H2C.9 0 0 .9 0 2v16l7-3 7 3V2c0-1.1-.9-2-2-2z"
        fill="#0D47A1"
      />
    </Svg>
  );
}

export default Bookmark;
