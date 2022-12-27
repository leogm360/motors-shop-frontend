export const formatNumberToKilometer = (number: number) =>
  `${number.toLocaleString("pt-BR", {
    useGrouping: true,
    maximumFractionDigits: 0,
  })} KM`;
