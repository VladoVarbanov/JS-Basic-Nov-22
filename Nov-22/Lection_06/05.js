function journey(params) {
  let budget = Number(params[0]);
  let season = params[1];

  let destination = 0;
  let placeForRest = "Camp";
  if (season === "summer") {
    if (budget <= 100) {
      budget = budget * 0.3;
      destination = "Bulgaria";
    } else if (budget <= 1000) {
      budget = budget * 0.4;
      destination = "Balkans";
    } else {
      budget = budget * 0.9;
      destination = "Europe";
      placeForRest = "Hotel";
    }
  } else {
    placeForRest = "Hotel";
    if (budget <= 100) {
      budget = budget * 0.7;
      destination = "Bulgaria";
    } else if (budget <= 1000) {
      budget = budget * 0.8;
      destination = "Balkans";
    } else {
      budget = budget * 0.9;
      destination = "Europe";
      placeForRest = "Hotel";
    }
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${placeForRest} - ${budget.toFixed(2)}`);
}
journey(["75", "winter"]);
