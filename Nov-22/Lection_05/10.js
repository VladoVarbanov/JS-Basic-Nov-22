function invalidNumber(params) {
  let input = Number(params[0]);
  if (!((input >= 100 && input <= 200) || input == 0)) {
    console.log("invalid");
  }
}
invalidNumber(["0"]);
