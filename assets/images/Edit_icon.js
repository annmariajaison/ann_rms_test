import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Edit_icon(props) {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
      <Path
        d="M.667 9.236v1.801c0 .166.13.296.296.296h1.801c.077 0 .154-.03.207-.088l6.47-6.465L7.22 2.558.755 9.023a.29.29 0 00-.088.213zM11.16 3.062a.59.59 0 000-.835L9.773.84a.59.59 0 00-.835 0L7.854 1.924l2.222 2.222 1.084-1.084z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Edit_icon;
