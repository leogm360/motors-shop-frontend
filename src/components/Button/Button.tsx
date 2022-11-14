import { getButtonVariant, getButtonSize, getButtonDisabled } from "./utils";
import { IButtonProps } from "./ButtonTypes";

export const Button = ({
  variant = "default",
  size = "big",
  children,
  className,
  ...buttonAttributes
}: IButtonProps) => {
  const buttonBase =
    "font-semibold text-center border-2 border-transparent rounded w-full transition duration-500";
  const buttonVariant = getButtonVariant(variant);
  const buttonSize = getButtonSize(size);
  const buttonDisabled = getButtonDisabled(variant);

  return (
    <button
      className={`${buttonBase} ${buttonVariant} ${buttonSize} ${buttonDisabled} ${className}`}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
};
