function numbersDivisibleBy9(params) {
  let num1 = Number(params[0]);
  let num2 = Number(params[1]);
  let num3 = [];
  let tempN = [];
  let sum = 0;

  for (let i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      sum += i;
      tempN = i;
      tempN = num3.push(i);
    }
  }
  console.log(`The sum: ${sum}`);
  for (let j = 0; j < num3.length; j++) {
    console.log(num3[j]);
  }
}
numbersDivisibleBy9(["107", "200"]);
