import { greetUser, gameSteps } from './index.js';
import { getRandomOperator } from './random.js';

const gameCalc = () => {
  greetUser();
  console.log('What is the result of the expression?');
  gameSteps();
  const result;
  const calculate = (operator, x, y) => {
    if (operator === '+') {
      return x + y
    }
    if (operator === '-') {
    return x - y
  }
    if (operator === '*') {
    return x * y
  }
  };
};

export default gameCalc;
