function traveling(params) {
  let destination = params[0];
  let minimumBudget = Number(params[1]);
  let sum = 0;

  let index = 2;

  for (let l = index; l < params.length - 1; l++) {
    let budget = Number(params[index]);
    if (/[0-9]/.test(params[index])) {
      sum += budget;
    } else {
      destination = params[index];
      index++;
      minimumBudget = Number(params[index]);
    }
    if (sum >= minimumBudget) {
      console.log(`Going to ${destination}!`);
      sum = 0;
    }
    index++;
  }
}
traveling([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
