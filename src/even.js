import readlineSync from 'readline-sync';
import isEven from 'is-even';
import getRandomInt from './random.js';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 1;
  while (counter <= 3) {
    const randomInt = getRandomInt(1, 100);
    const result = isEven(randomInt);
    const answer = readlineSync.question(`Question: ${randomInt} `);
    console.log(`Your answer: ${answer}`);
    if ((result && answer === 'yes') || (!result && answer === 'no')) {
      console.log('Correct!');
      counter += 1;
    } else {
      const correctAnswer = result ? 'yes' : 'no';
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
      Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter > 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameEven;
