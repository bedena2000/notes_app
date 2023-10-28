import { MainIcon } from "../../static";
import { FC } from "react";

// Types
import PageIconType from "./PageIconType";

const PageIcon: FC<PageIconType> = ({
  color = "none",
  classNames,
  width = "44",
  height = "44",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 50"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="M32.5112 9.52915L39.0135 13.3408L21.6368 23.3184H21.5247L4.26009 13.3408L10.7623 9.52915L8.18386 7.84753L0 12.5561V21.6368L2.80269 23.3184V15.4709L20.1794 25.6726V45.7399L13.6771 41.9283V45.2915L21.7489 50L29.5964 45.2915V41.9283L23.2063 45.7399V25.6726H23.3184L40.4709 15.4709V23.3184L43.2735 21.6368V12.5561L35.0897 7.84753L32.5112 9.52915Z"
        fill={color}
      />
      <path
        d="M10.0895 33.296L8.63212 30.7176L2.80252 34.0808V26.5696L0.111938 28.1391V37.444L7.95947 42.1525L10.8743 40.3588L4.14781 36.5472L10.0895 33.296Z"
        fill={color}
      />
      <path
        d="M40.5829 34.0808L34.7533 30.7176L33.2959 33.296L39.1255 36.5472L32.5112 40.3588L35.426 42.1525L43.2735 37.444V28.1391L40.5829 26.5696V34.0808Z"
        fill={color}
      />
      <path
        d="M20.2914 10.7623H23.0941V3.92377L29.5964 7.84753V4.59641L21.7488 0L13.7892 4.59641V7.73543L20.2914 3.92377V10.7623Z"
        fill={color}
      />
    </svg>
  );
};

export default PageIcon;
