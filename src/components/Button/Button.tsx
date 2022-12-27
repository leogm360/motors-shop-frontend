import { getButtonVariant, getButtonSize, getButtonDisabled } from "./utils";
import { Loader } from "@components";
import { IButtonProps } from "./ButtonTypes";

export const Button = ({
  variant = "default",
  size = "big",
  className = "",
  isLoading = false,
  children,
  ...buttonAttributes
}: IButtonProps) => {
  const buttonBase =
    "font-semibold text-center border-2 border-transparent rounded w-full px-2 transition duration-500";
  const buttonVariant = getButtonVariant(variant);
  const buttonSize = getButtonSize(size);
  const buttonDisabled = getButtonDisabled(variant);

  return (
    <button
      className={`${buttonBase} ${buttonVariant} ${buttonSize} ${buttonDisabled} ${className}`}
      disabled={isLoading || buttonAttributes.disabled ? true : false}
      {...buttonAttributes}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
