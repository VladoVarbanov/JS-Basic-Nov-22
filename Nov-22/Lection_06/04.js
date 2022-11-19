function fishingBoat(params) {
  let budget = Number(params[0]);
  let season = params[1];
  let fisherCount = Number(params[2]);

  let rentPrice = 0;

  switch (season) {
    case "Spring":
      rentPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      rentPrice = 4200;
      break;
    case "Winter":
      rentPrice = 2600;

    default:
      break;
  }

  if (fisherCount <= 6) {
    rentPrice = 0.9 * rentPrice;
  } else if (fisherCount <= 11) {
    rentPrice = 0.85 * rentPrice;
  } else {
    rentPrice = 0.75 * rentPrice;
  }

  if (fisherCount % 2 === 0 && season !== "Autumn") {
    rentPrice = 0.95 * rentPrice;
  }

  if (budget >= rentPrice) {
    console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["2000", "Winter", "13"]);
