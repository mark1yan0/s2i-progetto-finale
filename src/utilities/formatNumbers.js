function formatNumbers(number) {
  if (number)
    return number?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return;
}

export default formatNumbers;
