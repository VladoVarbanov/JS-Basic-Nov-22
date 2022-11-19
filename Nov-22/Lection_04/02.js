function BonusScore(input) {
  let initialScore = Number(input[0]);
  let bonus = 0;
  //   if (initialScore <= 100) {
  //     bonus = 5;
  //   } else if (initialScore <= 1000) {
  //     bonus = initialScore * 0.2;
  //   } else {
  //     bonus = initialScore * 0.1;
  //   }
  if (initialScore > 1000) {
    bonus = initialScore * 0.1;
  } else if (initialScore > 100) {
    bonus = initialScore * 0.2;
  } else if (initialScore <= 100) {
    bonus = 5;
  }

  if (initialScore % 2 === 0) {
    bonus += 1;
  } else if (initialScore % 10 === 5) {
    bonus += 2;
  }
  console.log(bonus);
  console.log(bonus + initialScore);
}

BonusScore(["2703"]);
