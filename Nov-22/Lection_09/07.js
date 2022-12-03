function minNumber(params) {
  let index = 0;
  maxNumbers = Number.MAX_SAFE_INTEGER;
  let number = Number(params[index]);

  while (params[index] !== "Stop") {
    if (Number(params[index]) < maxNumbers) {
      maxNumbers = Number(params[index]);
    }
    index++;
  }
  console.log(maxNumbers);
}
minNumber(["100", "99", "80", "70", "Stop"]);
