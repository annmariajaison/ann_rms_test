import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Domestic_card(props) {
  return (
    <Svg width={338} height={131} viewBox="0 0 338 131" fill="none" {...props}>
      <G filter="url(#filter0_ddd)">
        <Rect
          x={5}
          y={4}
          width={328}
          height={120}
          rx={4}
          fill="url(#paint0_linear)"
        />
      </G>
      <Path
        d="M154.32 43V31.625h3.211c.99 0 1.865.219 2.625.656a4.408 4.408 0 011.758 1.867c.417.808.628 1.735.633 2.782v.726c0 1.073-.208 2.013-.625 2.82a4.342 4.342 0 01-1.774 1.86c-.765.432-1.658.654-2.679.664h-3.149zm1.5-10.14v8.913h1.578c1.157 0 2.055-.359 2.696-1.078.646-.718.968-1.742.968-3.07v-.664c0-1.292-.304-2.294-.914-3.008-.604-.719-1.463-1.083-2.578-1.094h-1.75zm8.415 5.835c0-.828.161-1.573.484-2.234.328-.661.782-1.172 1.36-1.531.583-.36 1.247-.54 1.992-.54 1.151 0 2.081.4 2.789 1.196.713.797 1.07 1.857 1.07 3.18v.101c0 .823-.159 1.563-.476 2.219a3.561 3.561 0 01-1.352 1.523c-.583.365-1.255.547-2.015.547-1.146 0-2.076-.398-2.79-1.195-.708-.797-1.062-1.852-1.062-3.164v-.102zm1.453.172c0 .938.216 1.69.649 2.258.437.568 1.02.852 1.75.852.734 0 1.317-.287 1.75-.86.432-.578.648-1.385.648-2.422 0-.927-.221-1.677-.664-2.25-.438-.578-1.021-.867-1.75-.867-.714 0-1.289.284-1.727.852-.437.567-.656 1.38-.656 2.437zm9.438-4.32l.039.937c.62-.729 1.456-1.093 2.508-1.093 1.182 0 1.987.453 2.414 1.359a3.211 3.211 0 011.094-.984c.453-.25.987-.375 1.601-.375 1.855 0 2.797.981 2.829 2.945V43h-1.446v-5.578c0-.604-.138-1.055-.414-1.352-.276-.302-.739-.453-1.39-.453-.537 0-.982.162-1.336.485-.355.317-.56.747-.618 1.289V43h-1.453v-5.54c0-1.228-.601-1.843-1.804-1.843-.948 0-1.597.404-1.946 1.211V43h-1.445v-8.453h1.367zm16.204 8.61c-1.146 0-2.078-.376-2.797-1.126-.719-.755-1.078-1.763-1.078-3.023v-.266c0-.838.159-1.586.476-2.242.323-.661.771-1.177 1.344-1.547a3.38 3.38 0 011.875-.562c1.099 0 1.953.362 2.563 1.086.609.724.914 1.76.914 3.109v.602H188.9c.021.833.263 1.507.727 2.023.468.51 1.062.766 1.781.766.51 0 .943-.105 1.297-.313a3.25 3.25 0 00.929-.828l.883.687c-.708 1.089-1.771 1.633-3.187 1.633zm-.18-7.579c-.583 0-1.073.214-1.469.64-.395.423-.64 1.016-.734 1.782h4.234v-.11c-.041-.734-.239-1.301-.593-1.703-.355-.406-.834-.609-1.438-.609zm10.102 5.18c0-.39-.148-.693-.445-.906-.292-.22-.805-.407-1.539-.563-.729-.156-1.31-.344-1.742-.562-.427-.22-.745-.48-.953-.782-.204-.302-.305-.661-.305-1.078 0-.692.292-1.278.875-1.758.588-.479 1.338-.718 2.25-.718.958 0 1.734.247 2.328.742.599.495.898 1.127.898 1.898h-1.453c0-.396-.169-.737-.507-1.023-.334-.287-.756-.43-1.266-.43-.526 0-.938.115-1.234.344-.297.229-.446.529-.446.898 0 .35.138.612.414.79.276.176.774.346 1.492.507.724.162 1.31.354 1.758.578.448.224.779.495.992.813.219.312.329.695.329 1.148 0 .755-.303 1.362-.907 1.82-.604.454-1.388.68-2.351.68-.677 0-1.276-.12-1.797-.36a2.963 2.963 0 01-1.227-1 2.457 2.457 0 01-.437-1.398h1.445c.026.485.219.87.578 1.157.365.28.844.422 1.438.422.547 0 .984-.11 1.312-.329.334-.224.5-.52.5-.89zm5.313-8.258v2.047h1.578v1.117h-1.578v5.242c0 .339.071.594.211.766.141.167.38.25.719.25.167 0 .396-.031.687-.094V43c-.38.104-.75.156-1.109.156-.646 0-1.133-.195-1.461-.586-.328-.39-.492-.945-.492-1.664v-5.242h-1.539v-1.117h1.539V32.5h1.445zm4.868 10.5h-1.445v-8.453h1.445V43zm-1.562-10.695a.87.87 0 01.211-.594c.145-.162.359-.242.64-.242s.495.08.641.242c.146.161.219.36.219.594 0 .234-.073.43-.219.586-.146.156-.36.234-.641.234s-.495-.078-.64-.234a.841.841 0 01-.211-.586zm7.297 9.672c.516 0 .966-.157 1.352-.47.385-.312.599-.702.64-1.171h1.367a2.615 2.615 0 01-.5 1.383 3.28 3.28 0 01-1.234 1.047c-.51.26-1.052.39-1.625.39-1.151 0-2.068-.383-2.75-1.148-.677-.771-1.016-1.823-1.016-3.156v-.243c0-.823.151-1.554.453-2.195a3.468 3.468 0 011.297-1.492c.568-.354 1.237-.531 2.008-.531.948 0 1.735.284 2.36.851.63.568.966 1.305 1.007 2.211h-1.367c-.041-.547-.25-.995-.625-1.344-.37-.354-.828-.53-1.375-.53-.734 0-1.305.265-1.711.796-.401.526-.601 1.29-.601 2.29v.273c0 .973.2 1.723.601 2.25.401.526.974.789 1.719.789zm10.493-7.43v9.43c0 1.625-.737 2.437-2.211 2.437-.317 0-.612-.047-.882-.14v-1.157c.166.042.385.063.656.063.323 0 .568-.089.734-.266.172-.172.258-.474.258-.906v-9.461h1.445zm-1.593-2.242c0-.23.07-.425.211-.586.145-.167.356-.25.632-.25.282 0 .495.08.641.242.146.161.219.36.219.594 0 .234-.073.43-.219.586-.146.156-.359.234-.641.234-.281 0-.492-.078-.632-.234a.841.841 0 01-.211-.586zm3.57 6.39c0-.828.162-1.573.485-2.234.328-.661.781-1.172 1.359-1.531.584-.36 1.248-.54 1.992-.54 1.151 0 2.081.4 2.789 1.196.714.797 1.071 1.857 1.071 3.18v.101c0 .823-.159 1.563-.477 2.219a3.559 3.559 0 01-1.351 1.523c-.584.365-1.256.547-2.016.547-1.146 0-2.076-.398-2.789-1.195-.708-.797-1.063-1.852-1.063-3.164v-.102zm1.454.172c0 .938.216 1.69.648 2.258.437.568 1.021.852 1.75.852.734 0 1.318-.287 1.75-.86.432-.578.648-1.385.648-2.422 0-.927-.221-1.677-.664-2.25-.437-.578-1.02-.867-1.75-.867-.713 0-1.289.284-1.726.852-.438.567-.656 1.38-.656 2.437zm15.234 0c0 1.292-.296 2.33-.89 3.117-.594.782-1.391 1.172-2.391 1.172-1.067 0-1.893-.377-2.476-1.133l-.071.977h-1.328V31h1.446v4.477c.583-.724 1.388-1.086 2.414-1.086 1.026 0 1.83.388 2.414 1.164.588.776.882 1.838.882 3.187v.125zm-1.445-.164c0-.984-.19-1.745-.57-2.281-.38-.537-.927-.805-1.641-.805-.953 0-1.638.443-2.054 1.328v3.657c.442.885 1.132 1.328 2.07 1.328.693 0 1.232-.269 1.617-.805s.578-1.344.578-2.422zm8.22 2.055c0-.39-.149-.693-.446-.906-.291-.22-.804-.407-1.539-.563-.729-.156-1.31-.344-1.742-.562-.427-.22-.745-.48-.953-.782-.203-.302-.305-.661-.305-1.078 0-.692.292-1.278.875-1.758.589-.479 1.339-.718 2.25-.718.958 0 1.735.247 2.328.742.599.495.899 1.127.899 1.898h-1.453c0-.396-.17-.737-.508-1.023-.334-.287-.755-.43-1.266-.43-.526 0-.937.115-1.234.344-.297.229-.446.529-.446.898 0 .35.138.612.415.79.276.176.773.346 1.492.507.724.162 1.31.354 1.758.578.447.224.778.495.992.813.218.312.328.695.328 1.148 0 .755-.302 1.362-.906 1.82-.605.454-1.388.68-2.352.68-.677 0-1.276-.12-1.797-.36-.521-.239-.93-.572-1.226-1a2.45 2.45 0 01-.438-1.398h1.445c.026.485.219.87.579 1.157.364.28.843.422 1.437.422.547 0 .984-.11 1.313-.329.333-.224.5-.52.5-.89zM159.645 64.605h-4.177V69h-1.313v-9.953h6.166v1.08h-4.853v3.404h4.177v1.074zM163.083 69h-1.264v-7.397h1.264V69zm-1.367-9.358c0-.206.062-.379.185-.52.127-.141.314-.212.56-.212.246 0 .433.07.561.212a.75.75 0 01.191.52.725.725 0 01-.191.512c-.128.137-.315.205-.561.205-.246 0-.433-.068-.56-.205a.738.738 0 01-.185-.512zm4.608 1.961l.041.93c.565-.71 1.303-1.066 2.215-1.066 1.563 0 2.351.882 2.365 2.645V69h-1.265v-4.894c-.004-.534-.127-.928-.369-1.183-.237-.255-.608-.383-1.114-.383-.41 0-.77.11-1.08.328-.31.219-.552.506-.725.861V69h-1.264v-7.397h1.196zm6.235 3.637c0-1.134.268-2.046.806-2.734.538-.693 1.242-1.04 2.113-1.04.865 0 1.551.297 2.057.89V58.5h1.265V69h-1.162l-.062-.793c-.506.62-1.21.93-2.112.93-.857 0-1.556-.351-2.099-1.053-.538-.702-.806-1.618-.806-2.748v-.096zm1.264.144c0 .838.173 1.495.52 1.969.346.474.825.71 1.435.71.802 0 1.388-.36 1.757-1.08v-3.397c-.378-.697-.959-1.046-1.743-1.046-.62 0-1.103.24-1.449.718-.347.478-.52 1.187-.52 2.126zm10.111-.15c0-.725.142-1.377.424-1.956a3.217 3.217 0 011.19-1.34c.51-.314 1.091-.471 1.743-.471 1.007 0 1.82.348 2.44 1.046.624.697.937 1.624.937 2.782v.089c0 .72-.139 1.367-.417 1.941a3.119 3.119 0 01-1.183 1.333c-.51.32-1.098.479-1.764.479-1.002 0-1.816-.349-2.44-1.046-.62-.697-.93-1.62-.93-2.769v-.089zm1.272.15c0 .82.189 1.479.567 1.975.383.497.893.746 1.531.746.643 0 1.153-.251 1.532-.752.378-.506.567-1.213.567-2.12 0-.81-.194-1.467-.581-1.968-.383-.506-.893-.76-1.531-.76-.625 0-1.128.25-1.511.746-.383.497-.574 1.208-.574 2.133zm11.628 2.885c-.492.578-1.215.868-2.167.868-.788 0-1.39-.228-1.805-.684-.41-.46-.617-1.14-.622-2.037v-4.813h1.265v4.779c0 1.12.456 1.681 1.367 1.681.966 0 1.609-.36 1.928-1.08v-5.38h1.264V69h-1.203l-.027-.731zm6.747-5.53a3.78 3.78 0 00-.622-.049c-.829 0-1.392.354-1.688 1.06V69h-1.265v-7.397h1.231l.02.855c.415-.66 1.003-.991 1.764-.991.246 0 .433.032.56.096v1.175zm4.362 2.501c0-1.134.269-2.046.807-2.734.538-.693 1.242-1.04 2.112-1.04.866 0 1.552.297 2.058.89V58.5h1.265V69h-1.163l-.061-.793c-.506.62-1.21.93-2.112.93-.857 0-1.557-.351-2.099-1.053-.538-.702-.807-1.618-.807-2.748v-.096zm1.265.144c0 .838.173 1.495.52 1.969.346.474.824.71 1.435.71.802 0 1.388-.36 1.757-1.08v-3.397c-.378-.697-.959-1.046-1.743-1.046-.62 0-1.103.24-1.449.718-.347.478-.52 1.187-.52 2.126zm10.535-2.646a3.8 3.8 0 00-.623-.048c-.829 0-1.392.354-1.688 1.06V69h-1.265v-7.397h1.231l.02.855c.415-.66 1.003-.991 1.764-.991.246 0 .433.032.561.096v1.175zm4.115 6.399c-1.003 0-1.818-.328-2.447-.985-.629-.66-.944-1.542-.944-2.645v-.233c0-.733.139-1.387.417-1.962a3.29 3.29 0 011.176-1.353 2.96 2.96 0 011.641-.492c.961 0 1.709.316 2.242.95.533.633.8 1.54.8 2.72v.527h-5.011c.018.73.23 1.32.636 1.77.41.447.93.67 1.558.67.447 0 .825-.09 1.135-.273a2.86 2.86 0 00.814-.725l.772.602c-.62.953-1.549 1.429-2.789 1.429zm-.157-6.631a1.68 1.68 0 00-1.285.56c-.347.37-.561.89-.643 1.559h3.705v-.096c-.036-.642-.209-1.139-.519-1.49-.31-.355-.729-.533-1.258-.533zM232.793 69c-.073-.146-.132-.406-.178-.78-.588.611-1.289.917-2.105.917-.729 0-1.329-.205-1.798-.615a2.015 2.015 0 01-.697-1.573c0-.77.291-1.367.875-1.79.588-.43 1.412-.643 2.474-.643h1.231v-.581c0-.443-.132-.793-.397-1.053-.264-.264-.654-.397-1.169-.397-.451 0-.829.114-1.134.342-.306.228-.458.504-.458.827h-1.272c0-.369.13-.724.39-1.066.264-.346.62-.62 1.066-.82.451-.2.946-.301 1.484-.301.852 0 1.519.214 2.002.642.484.424.734 1.01.752 1.757v3.404c0 .68.087 1.22.26 1.62V69h-1.326zm-2.099-.964a2.22 2.22 0 001.128-.308c.356-.205.613-.471.773-.8v-1.517h-.991c-1.55 0-2.325.454-2.325 1.36 0 .397.132.707.397.93.264.224.604.335 1.018.335zm6.351-6.433l.034.82c.543-.637 1.274-.956 2.195-.956 1.034 0 1.738.396 2.112 1.19a2.81 2.81 0 01.957-.862c.397-.219.864-.328 1.401-.328 1.623 0 2.448.859 2.475 2.577V69h-1.265v-4.88c0-.53-.12-.924-.362-1.184-.241-.264-.647-.396-1.217-.396-.469 0-.859.141-1.169.424-.309.278-.489.654-.54 1.128V69h-1.271v-4.847c0-1.075-.526-1.613-1.579-1.613-.83 0-1.397.353-1.702 1.06V69h-1.265v-7.397h1.196zm15.894 0v8.252c0 1.421-.644 2.132-1.934 2.132a2.35 2.35 0 01-.773-.123v-1.011c.146.036.338.054.575.054.282 0 .496-.077.642-.232.151-.15.226-.415.226-.793v-8.279h1.264zm-1.394-1.961c0-.2.061-.372.185-.513.127-.146.312-.219.553-.219.246 0 .433.07.561.212a.75.75 0 01.191.52.725.725 0 01-.191.512c-.128.137-.315.205-.561.205-.246 0-.43-.068-.553-.205a.734.734 0 01-.185-.512zm3.117 5.591c0-.724.142-1.376.424-1.955a3.217 3.217 0 011.19-1.34c.51-.314 1.091-.471 1.743-.471 1.007 0 1.821.348 2.44 1.046.625.697.937 1.624.937 2.782v.089c0 .72-.139 1.367-.417 1.941a3.119 3.119 0 01-1.183 1.333c-.51.32-1.098.479-1.763.479-1.003 0-1.816-.349-2.441-1.046-.62-.697-.93-1.62-.93-2.769v-.089zm1.272.15c0 .821.189 1.48.567 1.976.383.497.894.746 1.532.746.642 0 1.153-.251 1.531-.752.378-.506.567-1.213.567-2.12 0-.81-.193-1.467-.581-1.968-.383-.506-.893-.76-1.531-.76-.624 0-1.128.25-1.511.746-.383.497-.574 1.208-.574 2.133zm13.324 0c0 1.131-.26 2.04-.78 2.728-.519.684-1.217 1.026-2.092 1.026-.934 0-1.656-.33-2.167-.992l-.061.855h-1.162V58.5h1.264v3.917c.511-.634 1.215-.95 2.113-.95.898 0 1.602.34 2.112 1.018.515.68.773 1.61.773 2.79v.109zm-1.265-.143c0-.861-.166-1.526-.499-1.996-.333-.47-.811-.704-1.436-.704-.834 0-1.433.387-1.798 1.162v3.2c.388.774.992 1.162 1.812 1.162.606 0 1.078-.235 1.415-.705.337-.469.506-1.175.506-2.119zm2.837 5.742l-.718-.492c.429-.597.652-1.212.67-1.846v-1.141h1.238v.991c0 .46-.114.92-.342 1.381-.224.46-.506.83-.848 1.107zM278.494 69h-1.265v-7.397h1.265V69zm-1.367-9.358c0-.206.061-.379.184-.52.128-.141.315-.212.561-.212.246 0 .433.07.56.212a.745.745 0 01.192.52.721.721 0 01-.192.512c-.127.137-.314.205-.56.205-.246 0-.433-.068-.561-.205a.738.738 0 01-.184-.512zm4.607 1.961l.041.93c.566-.71 1.304-1.066 2.215-1.066 1.563 0 2.352.882 2.366 2.645V69h-1.265v-4.894c-.005-.534-.128-.928-.369-1.183-.237-.255-.609-.383-1.115-.383-.41 0-.77.11-1.08.328a2.232 2.232 0 00-.724.861V69h-1.265v-7.397h1.196zM296.33 69c-.073-.146-.132-.406-.178-.78-.588.611-1.29.917-2.105.917-.73 0-1.329-.205-1.798-.615a2.016 2.016 0 01-.698-1.573c0-.77.292-1.367.875-1.79.588-.43 1.413-.643 2.475-.643h1.231v-.581c0-.443-.133-.793-.397-1.053-.264-.264-.654-.397-1.169-.397-.451 0-.829.114-1.135.342-.305.228-.458.504-.458.827h-1.271c0-.369.13-.724.39-1.066.264-.346.619-.62 1.066-.82.451-.2.946-.301 1.483-.301.853 0 1.52.214 2.003.642.483.424.734 1.01.752 1.757v3.404c0 .68.087 1.22.26 1.62V69h-1.326zm-2.099-.964a2.22 2.22 0 001.128-.308c.356-.205.613-.471.773-.8v-1.517h-.992c-1.549 0-2.324.454-2.324 1.36 0 .397.132.707.397.93.264.224.603.335 1.018.335zm6.358-6.433l.041.93c.565-.71 1.303-1.066 2.215-1.066 1.563 0 2.351.882 2.365 2.645V69h-1.265v-4.894c-.004-.534-.127-.928-.369-1.183-.237-.255-.608-.383-1.114-.383-.41 0-.77.11-1.08.328-.31.219-.552.506-.725.861V69h-1.264v-7.397h1.196zm6.235 3.637c0-1.134.269-2.046.806-2.734.538-.693 1.242-1.04 2.113-1.04.865 0 1.551.297 2.057.89V58.5h1.265V69h-1.162l-.062-.793c-.506.62-1.21.93-2.112.93-.857 0-1.556-.351-2.099-1.053-.537-.702-.806-1.618-.806-2.748v-.096zm1.264.144c0 .838.173 1.495.52 1.969.346.474.825.71 1.435.71.802 0 1.388-.36 1.757-1.08v-3.397c-.378-.697-.959-1.046-1.743-1.046-.62 0-1.103.24-1.449.718-.347.478-.52 1.187-.52 2.126zM158.523 85c-.072-.146-.132-.406-.177-.78-.588.611-1.29.917-2.106.917-.729 0-1.328-.205-1.798-.615a2.019 2.019 0 01-.697-1.573c0-.77.292-1.367.875-1.79.588-.43 1.413-.643 2.475-.643h1.23v-.581c0-.442-.132-.793-.396-1.053-.265-.264-.654-.397-1.169-.397-.451 0-.83.114-1.135.342-.305.228-.458.504-.458.827h-1.271c0-.369.129-.724.389-1.066.264-.346.62-.62 1.067-.82.451-.2.945-.301 1.483-.301.852 0 1.52.214 2.003.642.483.424.734 1.01.752 1.757v3.404c0 .68.086 1.22.26 1.62V85h-1.327zm-2.098-.964c.396 0 .772-.102 1.128-.308a1.86 1.86 0 00.772-.8v-1.517h-.991c-1.549 0-2.324.454-2.324 1.36 0 .397.132.707.396.93.265.224.604.335 1.019.335zm8.736-5.298a3.78 3.78 0 00-.622-.048c-.829 0-1.392.354-1.688 1.06V85h-1.265v-7.397h1.231l.02.855c.415-.66 1.003-.991 1.764-.991.246 0 .433.032.56.096v1.175zm.712 2.495c0-.724.141-1.376.424-1.955.287-.579.683-1.025 1.189-1.34.51-.314 1.091-.471 1.743-.471 1.007 0 1.821.348 2.441 1.046.624.697.936 1.624.936 2.782v.089c0 .72-.139 1.367-.417 1.941a3.117 3.117 0 01-1.182 1.333c-.511.32-1.099.479-1.764.479-1.003 0-1.816-.349-2.441-1.046-.619-.697-.929-1.62-.929-2.769v-.089zm1.271.15c0 .821.189 1.48.568 1.976.382.497.893.746 1.531.746.642 0 1.153-.251 1.531-.752.378-.506.567-1.213.567-2.12 0-.81-.193-1.467-.581-1.968-.382-.506-.893-.76-1.531-.76-.624 0-1.128.25-1.511.746-.382.497-.574 1.208-.574 2.133zm11.628 2.886c-.492.578-1.214.868-2.167.868-.788 0-1.389-.228-1.804-.684-.41-.46-.618-1.14-.622-2.037v-4.813h1.264v4.779c0 1.12.456 1.681 1.368 1.681.966 0 1.608-.36 1.927-1.08v-5.38h1.265V85H178.8l-.028-.731zm4.369-6.666l.041.93c.565-.71 1.303-1.066 2.215-1.066 1.563 0 2.351.882 2.365 2.645V85h-1.265v-4.894c-.004-.534-.127-.928-.369-1.183-.237-.255-.608-.383-1.114-.383-.41 0-.77.11-1.08.328-.31.219-.552.506-.725.862V85h-1.264v-7.397h1.196zm6.235 3.637c0-1.134.269-2.046.806-2.734.538-.693 1.242-1.04 2.113-1.04.865 0 1.551.297 2.057.89V74.5h1.265V85h-1.162l-.062-.793c-.506.62-1.21.93-2.112.93-.857 0-1.556-.351-2.099-1.053-.537-.702-.806-1.618-.806-2.748v-.096zm1.264.144c0 .838.173 1.495.52 1.969.346.474.825.71 1.435.71.802 0 1.388-.36 1.757-1.08v-3.397c-.378-.697-.959-1.046-1.743-1.046-.62 0-1.103.24-1.449.718-.347.478-.52 1.187-.52 2.126zm12.866 1.763l1.723-5.544h1.353l-2.973 8.539c-.461 1.23-1.192 1.845-2.195 1.845l-.239-.02-.472-.09v-1.024l.342.027c.429 0 .761-.087.998-.26.242-.173.44-.49.595-.95l.28-.752-2.638-7.315h1.38l1.846 5.544zm3.781-1.914c0-.724.141-1.376.424-1.955.287-.579.683-1.025 1.189-1.34.511-.314 1.092-.471 1.743-.471 1.007 0 1.821.348 2.441 1.046.624.697.936 1.624.936 2.782v.089c0 .72-.139 1.367-.417 1.941a3.11 3.11 0 01-1.182 1.333c-.511.32-1.099.479-1.764.479-1.003 0-1.816-.349-2.441-1.046-.619-.697-.929-1.62-.929-2.769v-.089zm1.271.15c0 .821.189 1.48.568 1.976.382.497.893.746 1.531.746.642 0 1.153-.251 1.531-.752.378-.506.568-1.213.568-2.12 0-.81-.194-1.467-.582-1.968-.382-.506-.893-.76-1.531-.76-.624 0-1.128.25-1.51.746-.383.497-.575 1.208-.575 2.133zm11.629 2.886c-.493.578-1.215.868-2.167.868-.789 0-1.39-.228-1.805-.684-.41-.46-.618-1.14-.622-2.037v-4.813h1.264v4.779c0 1.12.456 1.681 1.368 1.681.966 0 1.608-.36 1.927-1.08v-5.38h1.265V85h-1.203l-.027-.731zm6.747-5.53a3.788 3.788 0 00-.622-.049c-.83 0-1.392.354-1.689 1.06V85h-1.264v-7.397h1.23l.021.855c.414-.66 1.002-.991 1.763-.991.246 0 .433.032.561.096v1.175zm7.636 5.365a1.82 1.82 0 001.183-.41c.337-.273.524-.615.561-1.025h1.196a2.295 2.295 0 01-.438 1.21 2.876 2.876 0 01-1.08.916c-.446.228-.92.342-1.422.342-1.007 0-1.809-.335-2.406-1.005-.592-.675-.889-1.595-.889-2.762v-.212c0-.72.133-1.36.397-1.92a3.02 3.02 0 011.135-1.306c.496-.31 1.082-.465 1.757-.465.829 0 1.517.248 2.064.745.551.497.845 1.141.882 1.934h-1.196c-.037-.478-.219-.87-.547-1.175-.324-.31-.725-.465-1.203-.465-.643 0-1.142.232-1.498.697-.35.46-.526 1.128-.526 2.003v.24c0 .852.176 1.508.526 1.968.351.46.853.69 1.504.69zm8.942.165c-.492.578-1.214.868-2.167.868-.788 0-1.39-.228-1.805-.684-.41-.46-.617-1.14-.622-2.037v-4.813h1.265v4.779c0 1.12.456 1.681 1.367 1.681.966 0 1.609-.36 1.928-1.08v-5.38h1.265V85h-1.204l-.027-.731zm6.747-5.53a3.78 3.78 0 00-.622-.049c-.829 0-1.392.354-1.688 1.06V85h-1.265v-7.397h1.231l.02.855c.415-.66 1.003-.991 1.764-.991.246 0 .433.032.56.096v1.175zm4.759 0a3.797 3.797 0 00-.622-.049c-.83 0-1.393.354-1.689 1.06V85h-1.265v-7.397h1.231l.02.855c.415-.66 1.003-.991 1.764-.991.246 0 .433.032.561.096v1.175zm4.115 6.398c-1.002 0-1.818-.328-2.447-.985-.629-.66-.943-1.542-.943-2.645v-.233c0-.733.139-1.387.417-1.962a3.28 3.28 0 011.175-1.353 2.96 2.96 0 011.641-.492c.962 0 1.709.317 2.242.95.533.633.8 1.54.8 2.72v.527h-5.011c.018.73.23 1.32.636 1.77.41.447.93.67 1.559.67.446 0 .824-.09 1.134-.273a2.86 2.86 0 00.814-.725l.772.602c-.62.953-1.549 1.429-2.789 1.429zm-.157-6.631c-.51 0-.939.187-1.285.56-.347.37-.561.89-.643 1.559h3.705v-.096c-.036-.642-.209-1.139-.519-1.49-.31-.355-.729-.533-1.258-.533zm5.722-.903l.041.93c.565-.71 1.303-1.066 2.215-1.066 1.563 0 2.351.882 2.365 2.645V85h-1.265v-4.894c-.004-.534-.127-.928-.369-1.183-.237-.255-.608-.383-1.114-.383-.41 0-.77.11-1.08.328-.31.219-.552.506-.725.862V85h-1.264v-7.397h1.196zm8.258-1.79v1.79h1.381v.978h-1.381v4.587c0 .296.062.52.185.67.123.146.332.219.629.219.145 0 .346-.028.601-.082V85a3.669 3.669 0 01-.971.137c-.565 0-.991-.171-1.278-.513-.287-.342-.431-.827-.431-1.456v-4.587h-1.346v-.978h1.346v-1.79h1.265zM155.331 101h-1.265V90.5h1.265V101zm1.709-3.767c0-.724.142-1.376.424-1.955a3.217 3.217 0 011.19-1.34c.51-.314 1.091-.471 1.743-.471 1.007 0 1.82.348 2.44 1.046.625.697.937 1.624.937 2.782v.089c0 .72-.139 1.367-.417 1.941a3.118 3.118 0 01-1.183 1.333c-.51.319-1.098.479-1.764.479-1.002 0-1.816-.349-2.44-1.046-.62-.697-.93-1.62-.93-2.769v-.089zm1.272.15c0 .821.189 1.48.567 1.976.383.497.893.745 1.531.745.643 0 1.153-.25 1.532-.751.378-.506.567-1.213.567-2.12 0-.81-.194-1.467-.581-1.968-.383-.506-.893-.76-1.531-.76-.625 0-1.128.25-1.511.746-.383.497-.574 1.208-.574 2.133zm10.028 2.721a1.82 1.82 0 001.183-.41c.337-.273.524-.615.561-1.025h1.196a2.295 2.295 0 01-.438 1.21 2.86 2.86 0 01-1.08.916c-.446.228-.92.342-1.422.342-1.007 0-1.809-.335-2.406-1.005-.592-.675-.888-1.595-.888-2.762v-.212c0-.72.132-1.36.396-1.92.264-.561.643-.996 1.135-1.306.497-.31 1.082-.465 1.757-.465.829 0 1.517.248 2.064.745.552.497.845 1.141.882 1.934h-1.196c-.037-.478-.219-.87-.547-1.175-.324-.31-.725-.465-1.203-.465-.643 0-1.142.232-1.497.697-.351.46-.527 1.128-.527 2.003v.24c0 .852.176 1.508.527 1.968.351.46.852.69 1.503.69zm8.942.896c-.073-.146-.132-.406-.178-.779-.587.61-1.289.916-2.105.916-.729 0-1.328-.205-1.798-.616-.465-.414-.697-.938-.697-1.572 0-.77.292-1.367.875-1.79.588-.43 1.413-.643 2.475-.643h1.23v-.581c0-.442-.132-.793-.396-1.053-.265-.264-.654-.397-1.169-.397-.452 0-.83.114-1.135.342-.306.228-.458.504-.458.827h-1.272c0-.369.13-.724.39-1.066.264-.346.62-.62 1.066-.82.452-.2.946-.301 1.484-.301.852 0 1.52.214 2.003.642.483.424.733 1.01.752 1.757v3.404c0 .68.086 1.22.259 1.621V101h-1.326zm-2.098-.964c.396 0 .772-.102 1.128-.308.355-.205.612-.471.772-.8v-1.517h-.991c-1.55 0-2.324.454-2.324 1.36 0 .397.132.707.396.93.264.224.604.335 1.019.335zm6.877-8.224v1.791h1.381v.978h-1.381v4.587c0 .296.061.52.184.67.123.146.333.219.629.219.146 0 .347-.028.602-.082V101a3.674 3.674 0 01-.971.137c-.565 0-.991-.171-1.278-.513-.287-.342-.431-.827-.431-1.456v-4.587h-1.346v-.978h1.346v-1.79h1.265zm4.252 9.188h-1.264v-7.397h1.264V101zm-1.367-9.358c0-.206.061-.379.185-.52.127-.141.314-.212.56-.212.246 0 .433.07.561.212a.75.75 0 01.191.52.725.725 0 01-.191.512c-.128.137-.315.205-.561.205-.246 0-.433-.068-.56-.205a.734.734 0 01-.185-.512zm3.076 5.591c0-.724.142-1.376.424-1.955a3.217 3.217 0 011.19-1.34c.51-.314 1.091-.471 1.743-.471 1.007 0 1.821.348 2.44 1.046.625.697.937 1.624.937 2.782v.089c0 .72-.139 1.367-.417 1.941a3.118 3.118 0 01-1.183 1.333c-.51.319-1.098.479-1.763.479-1.003 0-1.816-.349-2.441-1.046-.62-.697-.93-1.62-.93-2.769v-.089zm1.272.15c0 .821.189 1.48.567 1.976.383.497.894.745 1.532.745.642 0 1.153-.25 1.531-.751.378-.506.567-1.213.567-2.12 0-.81-.193-1.467-.581-1.968-.383-.506-.893-.76-1.531-.76-.624 0-1.128.25-1.511.746-.383.497-.574 1.208-.574 2.133zm8.258-3.78l.041.93c.565-.71 1.304-1.066 2.215-1.066 1.563 0 2.352.882 2.365 2.645V101h-1.264v-4.894c-.005-.534-.128-.928-.37-1.183-.237-.255-.608-.383-1.114-.383-.41 0-.77.11-1.08.328-.31.219-.551.506-.725.862V101h-1.264v-7.397h1.196zm6.57 6.734c0-.219.064-.401.191-.547.132-.146.328-.219.588-.219.26 0 .456.073.588.219a.767.767 0 01.205.547c0 .21-.068.385-.205.526-.132.142-.328.212-.588.212-.26 0-.456-.07-.588-.212a.757.757 0 01-.191-.526z"
        fill="#fff"
      />
      <Path
        opacity={0.1}
        d="M87.5 48a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#000"
      />
      <G clipPath="url(#clip0)">
        <Path
          d="M32.26 36.776c1.785 0 3.233-1.483 3.233-3.313s-1.448-3.312-3.234-3.312-3.234 1.483-3.234 3.312c0 1.83 1.448 3.313 3.234 3.313z"
          fill="#FF6584"
        />
        <Path
          d="M48.674 48.52v-1.305h-4.9v1.305h-.98V30.15H32.307v30.818h19.111V48.52h-2.744z"
          fill="#E6E6E6"
        />
        <Path
          d="M85.022 45.166l-.018.018v-.018.018c-.248.247-3.008 3.036-4.079 5.866-.355-.405-.607-.652-.607-.652l-.012.011v-.011.012c-.202.2-2.95 2.978-2.95 5.179 0 2.124 1.147 2.963 2.624 3.07l-.108 2.096h.3l.033-2.086.113.002c1.09 0 2.043-.356 2.557-1.27.521.211 1.072.335 1.63.369l-.163 3.198h.457l.05-3.182c.058.002.115.002.173.002 2.496 0 4.519-1.217 4.519-4.702 0-3.486-4.519-7.92-4.519-7.92zM74.253 47.343V45.51h-5.489v1.834h-2.548v-7.255h-2.45v-2.81h-5.488v2.81H55.73v11.39c-.37-.474-.766-.925-1.187-1.351l-.012.011v-.011.012c-.202.2-2.95 2.978-2.95 5.179 0 2.124 1.148 2.963 2.624 3.07l-.107 2.096h.299l.033-2.085.113.001c.402.005.802-.053 1.187-.172v2.74h20.973V47.343h-2.45zM116.481 45.296l-.018.018v-.018.018c-.257.256-3.205 3.235-4.185 6.163v-1.451l-9.409-14.555-9.408 14.555v10.941h18.817V55.31c.601 1.722 2.003 2.468 3.687 2.59l-.164 3.198h.457l.05-3.181.173.002c2.496 0 4.519-1.217 4.519-4.703s-4.519-7.92-4.519-7.92zM43.97 64.915c6.846 0 12.397-.524 12.397-1.17 0-.647-5.55-1.171-12.397-1.171s-12.398.524-12.398 1.17c0 .647 5.55 1.17 12.398 1.17zM112.719 79.094c3.054 0 5.529-.234 5.529-.522 0-.289-2.475-.522-5.529-.522s-5.529.233-5.529.522c0 .288 2.475.522 5.529.522zM53.525 69.959c3.054 0 5.53-.234 5.53-.522 0-.288-2.476-.522-5.53-.522-3.053 0-5.529.233-5.529.522 0 .288 2.475.522 5.53.522z"
          fill="#F2F2F2"
        />
        <Path
          d="M115.071 76.474c0 1.463-.85 1.974-1.898 1.974a2.88 2.88 0 01-.216-.007c-.946-.069-1.681-.606-1.681-1.967 0-1.41 1.758-3.187 1.89-3.318l.007-.008s1.898 1.862 1.898 3.326z"
          fill="#6C63FF"
        />
        <Path
          d="M113.104 78.224l.694-.993-.695 1.102-.002.114a2.898 2.898 0 01-.144-.006l.074-1.465v-.011l.001-.002.007-.138-.697-1.105.699 1 .002.03.056-1.106-.597-1.142.605.948.059-2.294v-.008.008l-.01 1.808.594-.717-.596.873-.016.99.555-.95-.558 1.097-.008.55.805-1.323-.808 1.515-.02 1.225z"
          fill="#3F3D56"
        />
        <Path
          d="M39.315 97.627c5.696 0 10.314-.436 10.314-.974s-4.618-.974-10.314-.974c-5.697 0-10.315.436-10.315.974s4.618.974 10.315.974z"
          fill="#F2F2F2"
        />
        <Path
          d="M43.702 92.74c0 2.73-1.584 3.683-3.54 3.683a6.133 6.133 0 01-.404-.014c-1.764-.128-3.135-1.13-3.135-3.67 0-2.627 3.279-5.944 3.525-6.189l.015-.015s3.54 3.474 3.54 6.205z"
          fill="#6C63FF"
        />
        <Path
          d="M40.034 96.006l1.294-1.853-1.298 2.056-.003.213a5.633 5.633 0 01-.269-.013l.14-2.732-.002-.02.003-.005.013-.258-1.301-2.061 1.305 1.868.003.055.106-2.064-1.114-2.13 1.127 1.767.11-4.279v-.015.014l-.018 3.375 1.109-1.338-1.113 1.629-.03 1.848 1.036-1.774-1.04 2.046-.017 1.027 1.504-2.468-1.51 2.826-.035 2.286z"
          fill="#3F3D56"
        />
        <Path
          d="M58.033 50.719c0 5.764-3.346 7.777-7.473 7.777s-7.472-2.013-7.472-7.777S50.56 37.62 50.56 37.62s7.473 7.334 7.473 13.098z"
          fill="#6C63FF"
        />
        <Path
          d="M50.288 57.614l.077-4.824 3.185-5.968-3.173 5.211.034-2.169 2.195-4.318-2.186 3.744.062-3.901 2.35-3.438-2.34 2.824.039-7.154-.244 9.47.02-.39-2.39-3.747 2.352 4.497-.223 4.357-.006-.115-2.755-3.944 2.746 4.352-.027.545-.005.008.002.045-.565 11.054h.755l.09-5.71 2.74-4.34-2.733 3.911z"
          fill="#3F3D56"
        />
        <Path
          d="M44.928 50.719c0 5.764-3.345 7.777-7.472 7.777-4.127 0-7.473-2.013-7.473-7.777s7.473-13.098 7.473-13.098 7.472 7.334 7.472 13.098z"
          fill="#6C63FF"
        />
        <Path
          d="M37.184 57.614l.076-4.824 3.185-5.968-3.173 5.211.034-2.169 2.196-4.318-2.187 3.744.062-3.901 2.35-3.438-2.34 2.824.039-7.154-.243 9.47.02-.39-2.39-3.747 2.351 4.497-.222 4.357-.007-.115-2.755-3.944 2.747 4.352-.028.545-.005.008.002.045-.565 11.054h.755l.09-5.71 2.74-4.34-2.732 3.911z"
          fill="#3F3D56"
        />
        <Path
          d="M54.995 45.711c0 7.795-4.524 10.517-10.105 10.517-5.58 0-10.105-2.722-10.105-10.517S44.89 28 44.89 28s10.105 9.916 10.105 17.711z"
          fill="#F2F2F2"
        />
        <Path
          d="M44.522 55.035l.103-6.523 4.307-8.071-4.29 7.047.046-2.933 2.968-5.839L44.7 43.78l.084-5.276 3.179-4.648-3.166 3.819L44.85 28l-.329 12.806.027-.528-3.232-5.067 3.18 6.081-.3 5.892-.01-.156-3.725-5.332 3.714 5.884-.038.737-.007.01.003.061-.763 14.949h1.02l.123-7.721 3.705-5.87-3.696 5.29zM54.799 68.296a1.329 1.329 0 01-.418.967 1.26 1.26 0 01-1.515.15 1.302 1.302 0 01-.613-1.033c-.012-.2.02-.4.095-.585.075-.185.19-.35.337-.481a1.264 1.264 0 011.089-.298c.191.039.372.122.527.244a1.33 1.33 0 01.498 1.035z"
          fill="#3F3D56"
        />
        <Path
          d="M52.565 67.438l.114-.015.217.292-.138.339-.356.046-.107-.144.27-.518zM53.279 68.825l-.356.046-.217-.292.139-.339.355-.046.217.292-.138.339zM52.954 69.198l-.088.215a1.301 1.301 0 01-.445-.466l.316-.041.217.292zM53.684 67.817l-.356.046-.217-.292.139-.34.356-.045.217.292-.139.339zM54.205 68.588l-.355.046-.218-.292.14-.34.355-.045.217.292-.139.339zM53.88 69.376l-.078.193a1.217 1.217 0 01-.56-.001l-.073-.1.139-.338.355-.046.218.292zM54.658 67.7l-.345.044-.217-.292.107-.262c.194.125.35.301.455.51zM54.726 68.732c-.07.204-.19.386-.345.53l-.111-.15.138-.338.318-.042zM82.583 109c13.152 0 23.815-.64 23.815-1.43 0-.79-10.663-1.431-23.815-1.431-13.153 0-23.815.641-23.815 1.431S69.43 109 82.583 109z"
          fill="#F2F2F2"
        />
        <Path
          d="M70.883 103.464l-5.025 4.617c-2.253-1.012-3.748-2.733-4.508-5.146l5.025-4.617c.031 3.034 1.565 4.721 4.508 5.146z"
          fill="#E6E6E6"
        />
        <Path
          d="M65.82 100.397l-3.394 2.969.063.076 3.394-2.969-.063-.076zM66.16 101.018l-3.27 3.023.065.074 3.27-3.022-.065-.075z"
          fill="#3F3D56"
        />
        <Path
          d="M73.356 86.7l-6.712.727c-1.248-2.172-1.475-4.465-.71-6.876l6.712-.727c-1.71 2.478-1.432 4.766.71 6.875z"
          fill="#F2F2F2"
        />
        <Path
          d="M71.007 81.176l-4.449.37.008.1 4.449-.37-.008-.1zM70.927 81.883l-4.379.488.01.1 4.38-.488-.011-.1z"
          fill="#3F3D56"
        />
        <Path
          d="M67.217 72.126l-4.487-5.165c.997-2.303 2.684-3.828 5.042-4.596l4.488 5.165c-2.962.02-4.616 1.584-5.043 4.596z"
          fill="#E6E6E6"
        />
        <Path
          d="M67.347 63.465l-.075.064 2.885 3.489.075-.065-2.885-3.488zM66.686 63.937l-.073.067 2.938 3.362.073-.067-2.938-3.362zM72.257 47.658l-4.584 2.71 6.518 11.562 4.583-2.71-6.517-11.562z"
          fill="#3F3D56"
        />
        <Path
          d="M73.066 50.457l-3.647 2.238.05.086 3.647-2.238-.05-.086zM73.646 51.286l-3.647 2.238.05.087 3.647-2.238-.05-.087zM74.038 51.99l-3.647 2.237.05.086 3.647-2.238-.05-.086zM74.626 52.893l-3.647 2.238.05.086 3.647-2.238-.05-.086zM75.508 54.198l-3.647 2.238.05.086 3.647-2.238-.05-.086z"
          fill="#6C63FF"
        />
        <Path
          d="M88.88 62.307s2.522-1.243 4.317-.78L88.88 49.6v-1.225l6.112 14.894c1.528 2.95 3.46 9.674.166 10.214-3.737.613-10.463 2.91-10.463 2.91l-1.495-13.32 5.68-.766z"
          fill="#2F2E41"
        />
        <Path
          d="M74.156 58.326s-4.036-5.205-5.082-3.368c-1.046 1.837 4.699 4.928 4.699 4.928l.383-1.56z"
          fill="#FFB9B9"
        />
        <Path
          d="M75.501 58.48l-1.644-.92s-1.046 2.757-1.046 3.216c0 .46 1.644.612 1.644.612l1.046-2.909z"
          fill="#D0CDE1"
        />
        <Path
          d="M81.78 46.844c2.145 0 3.885-1.782 3.885-3.98 0-2.2-1.74-3.981-3.886-3.981s-3.886 1.782-3.886 3.98c0 2.199 1.74 3.98 3.886 3.98z"
          fill="#FFB9B9"
        />
        <Path
          d="M84.769 42.404s1.644 5.052 2.84 5.359c1.196.306-4.634 2.602-4.634 2.602s-1.794-4.287-2.69-5.358c-.897-1.072 4.484-2.603 4.484-2.603z"
          fill="#FFB9B9"
        />
        <Path
          opacity={0.1}
          d="M94.11 71.952c3.223-.528 1.444-6.974-.065-10.016a2 2 0 01.365.371c1.495 1.99 4.484 10.564.747 11.176-3.737.613-10.463 2.91-10.463 2.91l-.203-1.813c1.922-.632 6.69-2.147 9.62-2.628z"
          fill="#000"
        />
        <Path
          d="M99.268 98.285s3.736 3.062 3.437 3.369c-.298.306-3.437 5.205-6.128 5.664-2.69.46-3.886.46-3.886 0 0-.459.747-1.531 2.092-1.99 1.346-.459 1.495-3.521 1.346-4.134-.15-.612 3.139-2.909 3.139-2.909z"
          fill="#2F2E41"
        />
        <Path
          d="M88.057 75.474l2.392 11.482s9.865 11.33 9.566 11.483c-.299.153-3.288 3.215-3.886 3.215-.598 0-10.912-11.942-10.912-11.942L81.48 79.76l6.577-4.286z"
          fill="#2F2E41"
        />
        <Path
          opacity={0.1}
          d="M88.057 75.474l2.392 11.482s9.865 11.33 9.566 11.483c-.299.153-3.288 3.215-3.886 3.215-.598 0-10.912-11.942-10.912-11.942L81.48 79.76l6.577-4.286z"
          fill="#000"
        />
        <Path
          d="M90.449 71.799s-1.196 5.205-4.484 8.727c-3.289 3.521-4.784 10.717-4.784 10.717l-3.288 14.391s-5.83-.765-5.53-2.296L75.5 90.63s3.588-17.606 5.53-18.831c1.944-1.225 9.418 0 9.418 0z"
          fill="#2F2E41"
        />
        <Path
          d="M77.594 104.409s.897 2.909.299 3.215c-.598.307-11.21.919-11.808-1.224 0 0-.3-1.072 2.092-1.072s4.933-2.297 4.933-2.297l4.484 1.378z"
          fill="#2F2E41"
        />
        <Path
          d="M82.078 49.753s3.886-3.98 4.933-3.675c1.046.306 1.046 1.837 1.046 1.837s3.288.46 2.99 11.483c-.3 11.023 2.69 12.248 1.644 12.86-1.047.613-13.004 3.369-13.453.613-.448-2.756-.299-13.32.897-16.688 1.196-3.368 2.69-5.512 1.943-6.43z"
          fill="#575A89"
        />
        <Path
          d="M87.01 50.672s4.485 2.143 1.944 6.277c-2.541 4.133-4.484 8.573-7.175 8.42-2.69-.153-6.876-2.756-8.071-2.756-1.196 0 .448-4.44 1.345-4.593.897-.153 5.082 2.45 5.082 2.45s1.495-10.41 6.876-9.798z"
          fill="#575A89"
        />
        <Path
          d="M84.021 43.303c-.331-.02-.655.095-.984.14-1.178.16-2.404-.716-2.664-1.903a1.487 1.487 0 00-.136-.455c-.181-.303-.594-.36-.934-.291-.34.07-.663.233-1.01.251-.535.029-1.049-.308-1.334-.773-.285-.465-.366-1.037-.327-1.584l.256.276c.104-.226.145-.478.116-.726a.803.803 0 01.779.204c.226.025.055-.43.223-.587.07-.065.178-.053.274-.052.481.005.87-.372 1.25-.676a5.253 5.253 0 012.243-1.048c.543-.108 1.12-.126 1.636.081.423.17.778.48 1.106.804.806.794 1.52 1.728 1.857 2.822.272.896.28 1.854.022 2.755-.136.467-.543 2.069-1.14 2.106-.75.047-.3-1.287-1.233-1.344z"
          fill="#2F2E41"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={-93.5139}
          y1={-33.5}
          x2={376.755}
          y2={199.928}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#12B886" />
          <Stop offset={1} stopColor="#0D47A1" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Path fill="#fff" transform="translate(29 28)" d="M0 0H92V81H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Domestic_card;