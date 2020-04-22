const formatDate = (value: Date): string => {
  const newDate = new Date(value);
  return newDate.toLocaleString('pt-br').split(' ')[0];
};

export default formatDate;
