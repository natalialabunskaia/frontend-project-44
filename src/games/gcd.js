import getRandomInt from '../random.js';
import startGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const getQuestionAndAnswer = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const question = `${x} ${y}`;

  const correctAnswer = String(gcd(x, y));
  return [question, correctAnswer];
};
const gameGcd = () => startGame(gameRules, getQuestionAndAnswer);

export default gameGcd;
