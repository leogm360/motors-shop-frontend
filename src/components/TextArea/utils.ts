export const getTextareaStateClasses = (hasError: boolean) => {
  const baseClasses =
    "text-base border-2 rounded w-full h-20 p-4 placeholder:text-base outline-none transition-colors duration-300 resize-none";

  const regularClasses =
    " hover:bg-grey-8 border-grey-7 hover:border-grey-8 focus:border-brand-2 placeholder:text-grey-3";

  const errorClasses =
    " hover:bg-alert-3 border-alert-2 hover:border-alert-3 focus:border-alert-1 placeholder:text-alert-1";

  return hasError ? baseClasses + errorClasses : baseClasses + regularClasses;
};
