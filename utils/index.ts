export const convertToNumber = (number: string | number) => {
  const decimal = BigInt(10) ** BigInt(18);
  return Number(BigInt(number)) / Number(decimal);
};

export const formatAddress = (address: string) => {
  return (
    address.substring(0, 6) + "..." + address.substring(address.length - 4)
  );
};

export const formatId = (id: string) => {
  return id.substring(0, 6) + " ... " + id.substring(id.length - 6);
};
