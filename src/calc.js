import readlineSync from 'readline-sync';
import startGame from './index.js';
import getRandomInt from './random.js';

const gameCalc = () => {
  startGame();
  console.log('What is the result of the expression?');

  const getRandomOperator = () => {
    const arr = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomOperator = arr[randomIndex];
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

  for (let counter = 1; counter <= 3; counter += 1) {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);
    const operator = getRandomOperator();
    const randomExpression = `${x} ${operator} ${y}`;

    const correctAnswer = calculate(operator, x, y);
    const answer = readlineSync.question(`Question: ${randomExpression} `);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameCalc;
