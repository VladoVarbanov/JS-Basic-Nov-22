function cleverLily(params) {
  let age = Number(params[0]);
  let priceWashingmachine = Number(params[1]);
  let toyPrice = Number(params[2]);
  let odd = 0;
  let even = 0;
  let moneyGiven = 0;
  let moneyGiftedSaved = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      moneyGiven += 10;
      moneyGiftedSaved += moneyGiven;
      even++;
    } else {
      odd++;
    }
  }

  let moneSaved = moneyGiftedSaved - even + odd * toyPrice;

  if (priceWashingmachine <= moneSaved) {
    console.log(`Yes! ${(moneSaved - priceWashingmachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWashingmachine - moneSaved).toFixed(2)}`);
  }
}
cleverLily(["10", "170.00", "6"]);
