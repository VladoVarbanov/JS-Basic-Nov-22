function newHouse(params) {
  let typeOfFlower = params[0];
  let countFlower = Number(params[1]);
  let budget = Number(params[2]);

  let roses = 5.0;
  let dahlias = 3.8;
  let tulips = 2.8;
  let narcissus = 3.0;
  let gladiolus = 2.5;
  let totalCost = 0;

  switch (typeOfFlower) {
    case "Roses":
      totalCost = countFlower * roses;
      if (countFlower > 80) {
        totalCost = countFlower * roses * 0.9;
      }
      break;

    case "Dahlias":
      totalCost = countFlower * dahlias;
      if (countFlower > 90) {
        totalCost = countFlower * dahlias * 0.85;
      }
      break;
    case "Tulips":
      totalCost = countFlower * tulips;
      if (countFlower > 80) {
        totalCost = countFlower * tulips * 0.85;
      }
      break;
    case "Narcissus":
      totalCost = countFlower * narcissus;
      if (countFlower < 120) {
        totalCost = countFlower * (narcissus + narcissus * 0.15);
      }
      break;
    case "Gladiolus":
      totalCost = countFlower * gladiolus;
      if (countFlower < 80) {
        totalCost = countFlower * (gladiolus + gladiolus * 0.2);
      }
      break;

    default:
      break;
  }

  if (budget >= totalCost) {
    console.log(
      `Hey, you have a great garden with ${countFlower} ${typeOfFlower} and ${(
        budget - totalCost
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(totalCost - budget).toFixed(2)} leva more.`
    );
  }
}
newHouse(["Narcissus", "119", "360"]);
