export const convertToNumber = (number: string | number) => {
  const decimal = BigInt(10) ** BigInt(18);
  return Number(BigInt(number)) / Number(decimal);
};
