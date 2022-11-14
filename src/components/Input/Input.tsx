import { forwardRef } from "react";
import TheMaskInput, { InputTypes } from "the-mask-input";
import { getInputStateClasses } from "./utils";
import { IInputProps } from "./InputTypes";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label = "",
      error = "",
      className = "",
      mask,
      isMasked = false,
      ...inputAttributes
    },
    ref
  ) => {
    if (mask && !isMasked) {
      throw TypeError("Option 'isMasked' should be true to apply a mask.");
    }

    if (isMasked && !mask) {
      throw TypeError(
        "When input is masked an 'mask' option should be provided."
      );
    }

    return (
      <div className={`flex flex-col w-full gap-2 ${className}`}>
        {label && (
          <label
            className={`text-sm font-medium${
              error ? " text-alert-1" : " text-grey-0"
            }`}
            id={inputAttributes.id}
          >
            {label}
          </label>
        )}
        {isMasked ? (
          <TheMaskInput
            className={getInputStateClasses(!!error)}
            id={inputAttributes.id}
            type={inputAttributes.type as InputTypes}
            placeholder={inputAttributes.placeholder}
            mask={mask}
            ref={ref}
          />
        ) : (
          <input
            className={getInputStateClasses(!!error)}
            ref={ref}
            {...inputAttributes}
          />
        )}
        {error && <p className="text-sm text-alert-1">{error}</p>}
      </div>
    );
  }
);
