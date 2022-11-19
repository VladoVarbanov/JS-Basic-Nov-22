// function shopping(input) {
//   let budget = Number(input[0]);
//   let gpu = Number(input[1]);
//   let cpu = Number(input[2]);
//   let ram = Number(input[3]);

//   let gpuPrice = gpu * 250;
//   let cpuPrice = gpuPrice * 0.35 * cpu;
//   let ramPrice = gpuPrice * 0.1 * ram;

//   let sum = gpuPrice + cpuPrice + ramPrice;

//   if (gpu > cpu) {
//     sum = sum * 0.85;
//   }

//   if (budget < sum) {
//     console.log(
//       `Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`
//     );
//   } else {
//     console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
//   }
// }
// shopping(["920.45", "3", "1", "1"]);
function shopping(input) {
  let budget = Number(input[0]);
  let videocardCount = Number(input[1]);
  let processorCount = Number(input[2]);
  let ramCount = Number(input[3]);

  let sumVideoCards = videocardCount * 250;
  let processorPrice = sumVideoCards * 0.35 * processorCount;
  let ramPrice = sumVideoCards * 0.1;
  let totalRamPrice = ramCount * ramPrice;

  let totalPrice = sumVideoCards + processorPrice + totalRamPrice;

  if (videocardCount > processorCount) {
    totalPrice = 0.85 * totalPrice;
  }

  if (budget >= totalPrice) {
    let residualPrice = budget - totalPrice;
    console.log(`You have ${residualPrice.toFixed(2)} leva left!`);
  } else {
    let neededPrice = totalPrice - budget;
    console.log(
      `Not enough money! You need ${neededPrice.toFixed(2)} leva more!`
    );
  }
}
shopping(["920.45", "3", "1", "1"]);
