import { FC } from "react";
import MainButtonTypes from "./MainButtonType";

export const MainButton: FC<MainButtonTypes> = ({
  text,
  backgroundColor,
  btnHeight = 46,
  btnWidth = 229,
  category = "button",
  borderRounded,
}) => {
  if (category === "button") {
    return (
      <button
        className={`text-white text-base py-3 px-12 w-[${btnWidth}] h-[${btnHeight}] flex justify-center items-center rounded-[${
          borderRounded ? borderRounded : "0px"
        }] ${backgroundColor ? 'bg-[' + backgroundColor + ']' : 'bg-white'} `}
      >
        {text}
      </button>
    );
  } else if (category === "input") {
    return (
      <input
        type="submit"
        value={text}
        className={`bg-[${backgroundColor}] text-white text-base bg-[${backgroundColor}] py-3 px-12 w-[${btnWidth}] h-[${btnHeight}] justify-center items-center rounded-[24px] rounded-[${
          borderRounded ? borderRounded : "0px"
        }]`}
      />
    );
  }
};
