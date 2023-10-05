"use client ";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={"custom-btn bg-primary-blue text-white rounded-full"}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
