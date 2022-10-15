import { ERandomBackgroundColor } from "../../utils";

export const getRandomBackgroundColor = () => {
  const index = Math.floor(Math.random() * (12 + 1));

  const color = `colorRandom${index}` as keyof typeof ERandomBackgroundColor;

  return ERandomBackgroundColor[color];
};
