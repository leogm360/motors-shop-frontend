import { InputHTMLAttributes } from "react";
import { MasksTypes, InputTypes } from "the-mask-input";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  mask?: MasksTypes;
  isMasked?: boolean;
}
