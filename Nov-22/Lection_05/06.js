function numberInRange(params) {
  let input = Number(params[0]);

  if (input >= -100 && input <= 100 && input !== 0) {
    console.log("Yes");
  } else console.log("No");
}
numberInRange(["0"]);
