function examPreparation(params) {
  let index = 0;
  let maxBadGrades = Number(params[index]);
  index++;

  let problemName = params[index];
  index++;
  let problemGrade = Number(params[index]);
  index++;
  let bedGrades = 0;
  let gradeSum = 0;
  let gradesCount = 0;
  let lastProblem = "";

  while (problemName !== "Enough") {
    lastProblem = problemName;
    if (problemGrade <= 4) {
      bedGrades++;
    }
    if (bedGrades === maxBadGrades) {
      console.log(`You need a break, ${bedGrades} poor grades.`);
      return;
    }
    gradeSum += problemGrade;
    gradesCount++;
    problemName = params[index];
    index++;
    problemGrade = Number(params[index]);
    index++;
  }
  console.log(`Average score: ${(gradeSum / gradesCount).toFixed(2)}`);
  console.log(`Number of problems: ${gradesCount}`);
  console.log(`Last problem: ${lastProblem}`);
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
