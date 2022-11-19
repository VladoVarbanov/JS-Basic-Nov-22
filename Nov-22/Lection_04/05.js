function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let statists = Number(input[1]);
  let clotingPricePerStat = Number(input[2]);
  let decorPrice = budget * 0.1;
  let clotingPrice = null;

  if (statists > 150) {
    clotingPrice = clotingPricePerStat * 0.9 * statists;
  } else {
    clotingPrice = clotingPricePerStat * statists;
  }

  if (clotingPrice + decorPrice > budget) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${(clotingPrice + decorPrice - budget).toFixed(
        2
      )} leva more.`
    );
  } else {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(
        budget -
        (clotingPrice + decorPrice)
      ).toFixed(2)} leva left.`
    );
  }
}

godzillaVsKong([20000, 120, 55.5]);
