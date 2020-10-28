import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Search(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M13.146 11h-.823l-.292-.27c1.25-1.4 1.896-3.31 1.542-5.34-.49-2.78-2.906-5-5.823-5.34C3.344-.47-.365 3.09.177 7.32c.354 2.8 2.667 5.12 5.563 5.59 2.114.34 4.104-.28 5.562-1.48l.281.28v.79l4.427 4.25c.427.41 1.125.41 1.552 0 .428-.41.428-1.08 0-1.49L13.146 11zm-6.25 0c-2.594 0-4.688-2.01-4.688-4.5S4.302 2 6.896 2s4.687 2.01 4.687 4.5S9.49 11 6.896 11z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Search;
