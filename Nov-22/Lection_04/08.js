function lunchBreak(input) {
  let movieTitle = input[0];
  let episotDuration = Number(input[1]);
  let breakDuration = Number(input[2]);

  let lunchTime = (1 / 8) * breakDuration;
  let leusureTime = (1 / 4) * breakDuration;

  let busyTime = lunchTime + leusureTime;
  let timeLeft = breakDuration - busyTime;

  if (timeLeft >= episotDuration) {
    let timeAfterMovie = timeLeft - episotDuration;
    console.log(
      `You have enough time to watch ${movieTitle} and left with ${Math.ceil(
        timeAfterMovie
      )} minutes free time.`
    );
  } else {
    let timeNeeded = episotDuration - timeLeft;
    console.log(
      `You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(
        timeNeeded
      )} more minutes.`
    );
  }
}

lunchBreak(["Game of thrones", "48", 60]);
