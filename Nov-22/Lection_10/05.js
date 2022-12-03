function coins2(params) {
  let totalSum = Number(params[0]);
  let exchangeLeft = Math.trunc(totalSum * 100);
  let coinsUsed = 0;

  while (exchangeLeft > 0) {
    if (exchangeLeft >= 200) {
      exchangeLeft -= 200;
    } else if (exchangeLeft >= 100) {
      exchangeLeft -= 100;
    } else if (exchangeLeft >= 50) {
      exchangeLeft -= 50;
    } else if (exchangeLeft >= 20) {
      exchangeLeft -= 20;
    } else if (exchangeLeft >= 10) {
      exchangeLeft -= 10;
    } else if (exchangeLeft >= 5) {
      exchangeLeft -= 5;
    } else if (exchangeLeft >= 2) {
      exchangeLeft -= 2;
    } else if (exchangeLeft >= 1) {
      exchangeLeft -= 1;
    }
    coinsUsed++;
  }
  console.log(coinsUsed);
}

coins(["0.56"]);
