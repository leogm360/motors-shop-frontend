import { forwardRef } from "react";
import { getTextareaStateClasses } from "./utils";
import { ITextAreaProps } from "./TextAreaTypes";

export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ label = "", error = "", ...inputAttributes }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2">
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
        <textarea
          className={getTextareaStateClasses(!!error)}
          ref={ref}
          {...inputAttributes}
        />
        {error && <p className="text-sm text-alert-1">{error}</p>}
      </div>
    );
  }
);
