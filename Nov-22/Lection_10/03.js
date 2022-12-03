function vacation(input) {
  let index = 0;

  let moneyNeeded = Number(input[index]);
  index++;

  let moneyAvailable = Number(input[index]);
  index++;

  let action = input[index];
  index++;

  let sum = Number(input[index]);
  index++;

  let daysSpendCount = 0;
  let totalDays = 0;
  while (moneyAvailable < moneyNeeded) {
    totalDays++;
    if (action === "spend") {
      if (sum > moneyAvailable) {
        moneyAvailable = 0;
      } else {
        moneyAvailable -= sum;
      }
      daysSpendCount++;
    } else {
      moneyAvailable += sum;
      daysSpendCount = 0;
    }

    if (daysSpendCount === 5) {
      console.log("You can't save the money.");
      console.log(totalDays);
      return;
    }

    action = input[index];
    index++;
    sum = Number(input[index]);
    index++;
  }
  console.log(`You saved the money for ${totalDays} days.`);
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
