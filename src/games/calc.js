import getRandomInt from '../random.js';
import startGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  return randomOperator;
};

const calculate = (operator, x, y) => {
  if (operator === '+') {
    return x + y;
  }
  if (operator === '-') {
    return x - y;
  }
  if (operator === '*') {
    return x * y;
  }
};

const getQuestionAndAnswer = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const operator = getRandomOperator();
  const question = `${x} ${operator} ${y}`;

  const correctAnswer = String(calculate(operator, x, y));
  return [question, correctAnswer];
};

const gameCalc = () => startGame(gameRules, getQuestionAndAnswer);

export default gameCalc;
