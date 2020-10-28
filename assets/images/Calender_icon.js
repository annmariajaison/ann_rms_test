import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Calender_icon(props) {
  return (
    <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" {...props}>
      <Path
        d="M16.2 1.818h-.9V.91c0-.5-.405-.909-.9-.909s-.9.41-.9.91v.908h-9V.91C4.5.41 4.095 0 3.6 0s-.9.41-.9.91v.908h-.9c-.99 0-1.8.818-1.8 1.818v14.546C0 19.182.81 20 1.8 20h14.4c.99 0 1.8-.818 1.8-1.818V3.636c0-1-.81-1.818-1.8-1.818zm-.9 16.364H2.7c-.495 0-.9-.41-.9-.91V6.365h14.4v10.909c0 .5-.405.909-.9.909z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Calender_icon;
