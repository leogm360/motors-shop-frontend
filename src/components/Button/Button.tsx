import { getButtonVariant, getButtonSize, getButtonDisabled } from "./utils";
import { IButtonProps } from "./ButtonTypes";

export const Button = ({
  variant,
  size,
  children,
  ...buttonAttributes
}: IButtonProps) => {
  const buttonBase =
    "font-semibold border-1.5 border-transparent rounded w-full transition duration-500";
  const buttonVariant = getButtonVariant(variant);
  const buttonSize = getButtonSize(size);
  const buttonDisabled = getButtonDisabled(variant);
  const customClasses = buttonAttributes.className
    ? buttonAttributes.className
    : "";

  return (
    <button
      className={`${buttonBase} ${buttonVariant} ${buttonSize} ${buttonDisabled} ${customClasses}`}
      {...buttonAttributes}
    >
      {children}
    </button>
  );
};
