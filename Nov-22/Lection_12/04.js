function trainTheTrainers(params) {
  let judgeNumbers = Number(params[0]);
  let namePresentation = params[1];
  let index = 2;
  let finalScore = 0;
  let numberOfPresentation = 0;
  let allScores = 0;

  while (namePresentation !== "Finish") {
    let totalScore = 0;
    for (let i = 0; i < judgeNumbers; i++) {
      let score = Number(params[index]);
      totalScore += score;
      allScores += score;
      index++;
    }
    let averageScore = (totalScore / judgeNumbers).toFixed(2);
    console.log(`${namePresentation} - ${averageScore}.`);
    namePresentation = params[index];
    index++;
    numberOfPresentation++;
  }
  finalScore = allScores / (judgeNumbers * numberOfPresentation);

  console.log(`Student's final assessment is ${finalScore.toFixed(2)}.`);
}
trainTheTrainers([
  "3",
  "Arrays",
  "4.53",
  "5.23",
  "5.00",
  "Lists",
  "5.83",
  "6.00",
  "5.42",
  "Finish",
]);
