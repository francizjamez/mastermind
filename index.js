const rl = require("readline-sync");
const calcscore = require("./mastermind.js");

let code = [];
let turn = 1;

function main() {
  const guess = rl.question(`${turn}) Enter your guess: `);
  let guessArr = guess.split("");
  guessArr = guessArr.map((val) => Number(val));
  let result = calcscore(guessArr, code);

  if (result.correctPos === 4) {
    console.log(`Correct - You win!`);
    return;
  }
  console.log(
    `  ${result.correctPos} matching digit(s) in the correct position`
  );
  console.log(
    `  ${result.incorrectPos} matching digit(s) in the incorrect position`
  );
  if (turn === 10) {
    console.log(`You lawst sarrey`);
    return;
  }
  turn++;
  main();
}

function initializeGame() {
  code = [];
  for (let i = 0; i < 4; i++) {
    code.push(Math.floor(Math.random() * 5) + 1);
  }
  console.log(code);
  main();
}

initializeGame();
