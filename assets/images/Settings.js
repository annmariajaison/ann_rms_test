import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Settings(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M17.43 10.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.503.503 0 00-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98L12.49.42A.488.488 0 0012 0H8c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98L.46 12.63c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM10 13.5c-1.93 0-3.5-1.57-3.5-3.5S8.07 6.5 10 6.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
        fill="#AEB5C6"
      />
    </Svg>
  );
}

export default Settings;
