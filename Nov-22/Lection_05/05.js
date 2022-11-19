function smallShop(params) {
  let product = params[0];
  let city = params[1];
  let quantity = Number(params[2]);

  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          console.log(0.5 * quantity);
          break;
        case "water":
          console.log(0.8 * quantity);
          break;
        case "beer":
          console.log(1.2 * quantity);
          break;
        case "sweets":
          console.log(1.45 * quantity);
          break;
        case "peanuts":
          console.log(1.6 * quantity);
          break;

        default:
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          console.log(0.4 * quantity);
          break;
        case "water":
          console.log(0.7 * quantity);
          break;
        case "beer":
          console.log(1.15 * quantity);
          break;
        case "sweets":
          console.log(1.3 * quantity);
          break;
        case "peanuts":
          console.log(1.5 * quantity);
          break;

        default:
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          console.log(0.45 * quantity);
          break;
        case "water":
          console.log(0.7 * quantity);
          break;
        case "beer":
          console.log(1.1 * quantity);
          break;
        case "sweets":
          console.log(1.35 * quantity);
          break;
        case "peanuts":
          console.log(1.55 * quantity);
          break;

        default:
          break;
      }
      break;

    default:
      break;
  }
}
smallShop(["coffee", "Varna", "2"]);
