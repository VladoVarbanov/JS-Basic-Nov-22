function oscars(params) {
  let actorName = params[0];
  let academyPoints = Number(params[1]);
  let judgesCount = Number(params[2]);

  for (let i = 3; i < params.length; i += 2) {
    let judgesName = params[i];
    let judgePoints = Number(params[i + 1]);

    let result = (judgesName.length * judgePoints) / 2;
    academyPoints += result;

    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(
          1
        )}!`
      );
      return;
    }
  }
  let pointNeeded = 1250.5 - academyPoints;
  console.log(`Sorry, ${actorName} you need ${pointNeeded.toFixed(1)} more!`);
}
oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);
