function maxNumber(params) {
  let index = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (params[index] !== "Stop") {
    if (Number(params[index]) > maxNumber) {
      maxNumber = Number(params[index]);
    }
    index++;
  }
  console.log(maxNumber);
}
maxNumber(["45", "-20", "7", "99", "Stop"]);
