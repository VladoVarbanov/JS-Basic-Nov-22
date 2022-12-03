function tennisRankList(params) {
  let turnerCount = Number(params[0]);
  let startingPoints = Number(params[1]);
  let totalPoints = startingPoints;
  let wins = 0;

  for (let i = 2; i < params.length; i++) {
    if (params[i] === "W") {
      totalPoints += 2000;
      wins++;
    } else if (params[i] === "F") {
      totalPoints += 1200;
    } else {
      totalPoints += 720;
    }
  }
  let averagePoints = (totalPoints - startingPoints) / turnerCount;
  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.trunc(averagePoints)}`);
  console.log(`${((wins / turnerCount) * 100).toFixed(2)}%`);
}
tennisRankList(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
