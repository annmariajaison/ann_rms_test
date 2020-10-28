import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Notification_selected(props) {
  return (
    <Svg width={16} height={20} viewBox="0 0 16 20" fill="none" {...props}>
      <Path
        d="M8 20c1.1 0 2-.9 2-2H6a2 2 0 002 2zm6-6V9c0-3.07-1.64-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.63 3.36 2 5.92 2 9v5L.71 15.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L14 14z"
        fill="#0D47A1"
      />
    </Svg>
  );
}

export default Notification_selected;
