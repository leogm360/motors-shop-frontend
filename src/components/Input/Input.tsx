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

    const maskedInputAttributes = {
      ...inputAttributes,
      type: inputAttributes.type as InputTypes,
      value: inputAttributes.value as
        | string
        | (readonly string[] & string)
        | undefined,
      autoCapitalize: inputAttributes.autoCapitalize as
        | "none"
        | "on"
        | "off"
        | "sentences"
        | "words"
        | "characters"
        | undefined,
    };

    return (
      <div className={`flex flex-col w-full gap-2 ${className}`}>
        {label && (
          <label
            className={`text-sm font-medium${
              error ? " text-alert-1" : " text-grey-0"
            }`}
            htmlFor={inputAttributes.id}
          >
            {label}
          </label>
        )}
        {isMasked ? (
          <TheMaskInput
            className={getInputStateClasses(!!error)}
            placeholder={inputAttributes.placeholder}
            mask={mask}
            {...maskedInputAttributes}
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
