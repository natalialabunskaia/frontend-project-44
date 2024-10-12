import getRandomInt from '../random.js';
import startGame from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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
