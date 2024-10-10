const getRandomInt = (min, max) => {
  const tmpMin = Math.ceil(min);
  const tmpMax = Math.floor(max);
  return Math.floor(Math.random() * (tmpMax - tmpMin + 1) + tmpMin);
};

export default getRandomInt;
