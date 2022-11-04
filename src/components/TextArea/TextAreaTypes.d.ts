import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}
