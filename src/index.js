import readlineSync from 'readline-sync';

const startGame = (gameRules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let counter = 1; counter <= 3; counter += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    const answer = readlineSync.question(`Question: ${question} `);

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
        Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
