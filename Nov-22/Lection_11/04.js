function sumOfTwoNumbers(params) {
  let firstNumber = Number(params[0]);
  let secondNumber = Number(params[1]);
  let magicNumber = Number(params[2]);
  let counter = 0;
  let isMagicNumber = false;

  for (let i = firstNumber; i <= secondNumber; i++) {
    for (let j = firstNumber; j <= secondNumber; j++) {
      counter++;
      if (i + j === magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        isMagicNumber = true;
        break;
      }
    }
    if (isMagicNumber) {
      break;
    }
  }
  if (isMagicNumber === false) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
