function toyShop(input) {
  let trip = Number(input[0]);
  let toysCount = 0;

  for (const li of input) {
    toysCount += Number(li);
  }

  let puzzle = Number(input[1]);
  let doll = Number(input[2]);
  let bear = Number(input[3]);
  let minion = Number(input[4]);
  let truck = Number(input[5]);

  let allSum = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;

  if (toysCount >= 50) {
    allSum = allSum * 0.75;
  }

  let moneAfterRent = allSum * 0.9;
  let moneyLeft = moneAfterRent - trip;
  if (moneAfterRent >= trip) {
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else {
    let insufficienMoney = trip - moneAfterRent;
    console.log(`Not enough money! ${insufficienMoney.toFixed(2)} lv needed.`);
  }
}

// toyShop([40.8, 20, 25, 30, 50, 10]);
toyShop([320, 8, 2, 5, 5, 1]);
