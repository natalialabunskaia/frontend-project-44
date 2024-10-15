import startGame from '../index.js';
import getRandomInt from '../random.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};
const gameProgression = () => startGame(gameRules, getQuestionAndAnswer);

export default gameProgression;
