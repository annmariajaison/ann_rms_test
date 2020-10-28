import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function Notification_dot(props) {
  return (
    <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
      <Circle cx={4} cy={4} r={4} fill="#FBBD05" />
    </Svg>
  );
}

export default Notification_dot;
