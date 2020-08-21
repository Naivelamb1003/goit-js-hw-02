const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
  return message.split(" ").length * pricePerWord;
};
