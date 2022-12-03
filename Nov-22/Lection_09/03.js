function sumNumbers(params) {
  let index = 0;
  let firstNumber = Number(params[index]);
  index++;
  let sum = 0;
  while (sum < firstNumber) {
    let number = Number(params[index]);
    sum += number;
    index++;
  }
  console.log(sum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
