function calcScore(guess, code) {
  const guessCpy = [...guess];
  const codeCpy = [...code];

  const result = { correctPos: 0, incorrectPos: 0 };
  for (let i = 0; i < guessCpy.length; i++) {
    if (guessCpy[i] === codeCpy[i]) {
      result.correctPos++;
      guessCpy.splice(i, 1);
      codeCpy.splice(i, 1);
      i--;
    }
  }

  guessCpy.forEach((val, i) => {
    if (codeCpy.includes(val)) {
      result.incorrectPos++;
      codeCpy.splice(codeCpy.indexOf(val), 1);
    }
  });

  return result;
}

const generateRandoms = () => {
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push(Math.floor(Math.random() * 4) + 1);
  }

  return result;
};

calcScore(generateRandoms(), generateRandoms());

module.exports = calcScore;
