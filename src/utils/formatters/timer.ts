export const formatSecondsToTimer = (totalInSeconds: number) => {
  const seconds = Math.floor(totalInSeconds % 60).toString();
  const minutes = Math.floor((totalInSeconds / 60) % 60).toString();
  const hours = Math.floor(totalInSeconds / (60 * 60)).toString();

  const padTime = (value: string) => {
    const maxLength = 2;
    const charFill = "0";
    return value.padStart(maxLength, charFill);
  };

  return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
};
