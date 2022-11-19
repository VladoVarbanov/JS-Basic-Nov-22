function skiTrip(params) {
  let days = Number(params[0]);
  let typeRoom = params[1];
  let assessment = params[2];
  let price = 0;

  switch (typeRoom) {
    case "room for one person":
      price = (days - 1) * 18;

      if (assessment === "positive") {
        price *= 1.25;
      } else {
        price *= 0.9;
      }
      console.log(price.toFixed(2));
      break;
    case "apartment":
      price = (days - 1) * 25;
      if (days < 10) {
        price = price * 0.7;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.65;
      } else {
        price = price * 0.5;
      }
      if (assessment === "positive") {
        price *= 1.25;
      } else {
        price *= 0.9;
      }
      console.log(price.toFixed(2));
      break;
    case "president apartment":
      price = (days - 1) * 35;
      if (days < 10) {
        price = price * 0.9;
      } else if (days >= 10 && days <= 15) {
        price = price * 0.85;
      } else {
        price = price * 0.8;
      }
      if (assessment === "positive") {
        price *= 1.25;
      } else {
        price *= 0.9;
      }
      console.log(price.toFixed(2));
      break;

    default:
      break;
  }
}
skiTrip(["14", "apartment", "positive"]);
