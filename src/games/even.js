import isEven from 'is-even';
import getRandomInt from '../random.js';
import startGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomInt = getRandomInt(1, 100);
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [randomInt.toString(), correctAnswer];
};

const gameEven = () => startGame(gameRules, getQuestionAndAnswer);

export default gameEven;
