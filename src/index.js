import readlineSync from 'readline-sync';
import { getRandomInt, getRandomOperator } from './random.js';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const gameSteps = () => {
  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt(1, 100);
  const randomOperator = getRandomOperator();
  const randomExpression = `${randomInt1} ${randomOperator} ${randomInt2}`;
  const answer = readlineSync.question(`Question: ${randomExpression} `);
  console.log(`Your answer: ${answer}`);
};

export { greetUser, gameSteps };
