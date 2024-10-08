const getRandomInt = (min, max) => {
  const tmpMin = Math.ceil(min);
  const tmpMax = Math.floor(max);
  return Math.floor(Math.random() * (tmpMax - tmpMin + 1) + tmpMin);
};

const getRandomOperator = () => {
  const arr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomOperator = arr[randomIndex];
  return randomOperator;
};

export default { getRandomInt, getRandomOperator };
