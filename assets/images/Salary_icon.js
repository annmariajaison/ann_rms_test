import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Salary_icon(props) {
  return (
    <Svg width={19} height={21} viewBox="0 0 19 21" fill="none" {...props}>
      <Path
        d="M2 10.5v4c0 .83.67 1.5 1.5 1.5S5 15.33 5 14.5v-4C5 9.67 4.33 9 3.5 9S2 9.67 2 10.5zm6 0v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5S8 9.67 8 10.5zM1.5 21h16c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5S.67 21 1.5 21zM14 10.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5zM8.57.49L.67 4.65c-.41.21-.67.64-.67 1.1C0 6.44.56 7 1.25 7h16.51C18.44 7 19 6.44 19 5.75c0-.46-.26-.89-.67-1.1L10.43.49C9.85.18 9.15.18 8.57.49z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Salary_icon;
