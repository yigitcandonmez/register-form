import React from "react";

export const Svg = ({
  children,
  width,
  height,
  viewBox,
  fill,
  handleClick,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export const Logo = ({ width, height, viewBox }) => {
  return (
    <Svg width={width} height={height} viewbox={viewBox}>
      <rect x="189" width="19" height="19" fill="#444AFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9H0V95H19V67H47V57H57V19H47V9H19H9ZM38 57V19H19V57H38Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M189 29H179V39H189V95H208V39V29H189Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M237 0H218V95H237V67H246V77H256V95H275V76H265V67H257V58H265V48H275V29H256V48H246V57H237V0Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132 9H151V28H171V38H151V85H171V95H141V85H132V9Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M114 28H76V38H103V57H76V66H65V85H76V95H103H114H122V38H114V28ZM103 85V67H84V85H103Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M333 29H295V39H322V58H295V67H284V86H295V96H322H333H341V39H333V29ZM322 86V68H303V86H322Z"
        fill="#444AFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M253 107H239V110L234 110V113H230L230 118.5H227V132.5H230L230 138H234V141H239V144H253V141H258V138H261V132.5H264V118.5H261V113H258V110L253 110V107Z"
        fill="#FFBF5E"
      />
      <path
        d="M278.17 140.312C276.561 140.312 275.098 139.896 273.781 139.062C272.465 138.229 271.414 136.979 270.628 135.312C269.842 133.646 269.449 131.577 269.449 129.105C269.449 126.539 269.856 124.427 270.67 122.77C271.485 121.113 272.55 119.886 273.866 119.091C275.192 118.295 276.617 117.898 278.142 117.898C279.288 117.898 280.268 118.097 281.082 118.494C281.897 118.883 282.569 119.384 283.099 120C283.63 120.615 284.032 121.255 284.307 121.918H284.449V110.909H291.395V140H284.52V136.463H284.307C284.013 137.135 283.597 137.765 283.057 138.352C282.517 138.939 281.84 139.413 281.026 139.773C280.221 140.133 279.269 140.312 278.17 140.312ZM280.585 134.901C281.428 134.901 282.148 134.664 282.744 134.19C283.341 133.707 283.8 133.03 284.122 132.159C284.444 131.288 284.605 130.265 284.605 129.091C284.605 127.898 284.444 126.87 284.122 126.008C283.81 125.147 283.35 124.484 282.744 124.02C282.148 123.556 281.428 123.324 280.585 123.324C279.723 123.324 278.994 123.561 278.398 124.034C277.801 124.508 277.347 125.175 277.034 126.037C276.731 126.899 276.58 127.917 276.58 129.091C276.58 130.265 276.736 131.288 277.048 132.159C277.361 133.03 277.811 133.707 278.398 134.19C278.994 134.664 279.723 134.901 280.585 134.901Z"
        fill="#444AFF"
      />
      <path
        d="M305.986 140.412C303.704 140.412 301.735 139.962 300.077 139.062C298.43 138.153 297.161 136.861 296.271 135.185C295.39 133.499 294.95 131.496 294.95 129.176C294.95 126.922 295.395 124.953 296.285 123.267C297.175 121.572 298.43 120.256 300.049 119.318C301.668 118.371 303.576 117.898 305.773 117.898C307.326 117.898 308.747 118.139 310.035 118.622C311.323 119.105 312.435 119.82 313.373 120.767C314.31 121.714 315.04 122.883 315.56 124.276C316.081 125.658 316.342 127.244 316.342 129.034V130.767H297.379V126.733H309.879C309.869 125.994 309.694 125.336 309.353 124.758C309.012 124.181 308.543 123.731 307.947 123.409C307.36 123.078 306.683 122.912 305.915 122.912C305.139 122.912 304.443 123.087 303.827 123.437C303.212 123.778 302.724 124.247 302.364 124.844C302.004 125.431 301.815 126.098 301.796 126.847V130.952C301.796 131.842 301.971 132.623 302.322 133.295C302.672 133.958 303.169 134.474 303.813 134.844C304.457 135.213 305.224 135.398 306.114 135.398C306.73 135.398 307.289 135.312 307.79 135.142C308.292 134.972 308.723 134.721 309.083 134.389C309.443 134.058 309.713 133.651 309.893 133.168L316.271 133.352C316.005 134.782 315.423 136.027 314.523 137.088C313.633 138.139 312.464 138.958 311.015 139.545C309.566 140.123 307.89 140.412 305.986 140.412Z"
        fill="#444AFF"
      />
      <path
        d="M340.468 118.182L332.982 140H325.028L317.556 118.182H324.871L328.891 133.21H329.119L333.153 118.182H340.468Z"
        fill="#444AFF"
      />
    </Svg>
  );
};

export const SmallPararellogram = ({ width, height, viewBox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox}>
      <g filter="url(#filter0_ddd_3_208)">
        <path
          className="pararell"
          d="M20 115H292.546L340.316 19H67.7696L20 115Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_3_208"
          x="0"
          y="0"
          width="360.316"
          height="136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFlters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_208"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3_208"
            result="effect2_dropShadow_3_208"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_3_208"
            result="effect3_dropShadow_3_208"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_3_208"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export const MediumPararellogram = ({ width, height, viewBox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewBox}>
      <g filter="url(#filter0_ddd_3_206)">
        <path
          className="pararell"
          d="M20.592 115H453.138L500.908 19H68.3616L20.592 115Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_ddd_3_206"
          x="0.59198"
          y="0"
          width="520.316"
          height="136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_206"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_3_206"
            result="effect2_dropShadow_3_206"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_3_206"
            result="effect3_dropShadow_3_206"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_3_206"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  );
};

export const LightIcon = ({ handleClick, width, height, viewBox }) => {
  return (
    <Svg
      handleClick={handleClick}
      width={width}
      height={height}
      viewbox={viewBox}
    >
      <path
        d="M12 7.5C9.52031 7.5 7.5 9.52031 7.5 12C7.5 14.4797 9.52031 16.5 12 16.5C14.4797 16.5 16.5 14.4797 16.5 12C16.5 9.52031 14.4797 7.5 12 7.5ZM23.55 11.2734L19.1109 9.05625L20.6813 4.35C20.8922 3.7125 20.2875 3.10781 19.6547 3.32344L14.9484 4.89375L12.7266 0.45C12.4266 -0.15 11.5734 -0.15 11.2734 0.45L9.05625 4.88906L4.34531 3.31875C3.70781 3.10781 3.10313 3.7125 3.31875 4.34531L4.88906 9.05156L0.45 11.2734C-0.15 11.5734 -0.15 12.4266 0.45 12.7266L4.88906 14.9437L3.31875 19.6547C3.10781 20.2922 3.7125 20.8969 4.34531 20.6813L9.05156 19.1109L11.2688 23.55C11.5688 24.15 12.4219 24.15 12.7219 23.55L14.9391 19.1109L19.6453 20.6813C20.2828 20.8922 20.8875 20.2875 20.6719 19.6547L19.1016 14.9484L23.5406 12.7313C24.15 12.4266 24.15 11.5734 23.55 11.2734ZM16.2422 16.2422C13.9031 18.5812 10.0969 18.5812 7.75781 16.2422C5.41875 13.9031 5.41875 10.0969 7.75781 7.75781C10.0969 5.41875 13.9031 5.41875 16.2422 7.75781C18.5813 10.0969 18.5813 13.9031 16.2422 16.2422Z"
        fill="#FEFEFE"
      />
    </Svg>
  );
};

export const DarkIcon = ({ handleClick, width, height, viewBox }) => {
  return (
    <Svg
      handleClick={handleClick}
      width={width}
      height={height}
      viewbox={viewBox}
    >
      <path
        d="M24.551 48C31.9537 48 38.7147 44.632 43.1939 39.1133C43.8565 38.2969 43.134 37.1042 42.1099 37.2992C30.4659 39.5168 19.7729 30.5889 19.7729 18.8348C19.7729 12.0639 23.3974 5.83772 29.2883 2.48531C30.1964 1.96856 29.968 0.591844 28.9362 0.40125C27.4897 0.134525 26.0219 0.000219032 24.551 0C11.3033 0 0.551025 10.7354 0.551025 24C0.551025 37.2477 11.2864 48 24.551 48Z"
        fill="#3C3C3C"
      />
    </Svg>
  );
};
