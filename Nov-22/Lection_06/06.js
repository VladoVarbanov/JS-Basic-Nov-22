function operationsBetweenNumbers(params) {
  let n1 = Number(params[0]);
  let n2 = Number(params[1]);
  let operator = params[2];

  let type = 0;
  let result = 0;
  switch (operator) {
    case "+":
      result = n1 + n2;
      if (result % 2 === 0) {
        type = "even";
      } else {
        type = "odd";
      }
      console.log(`${n1} + ${n2} = ${result} - ${type}`);
      break;
    case "-":
      result = n1 - n2;
      if (result % 2 === 0) {
        type = "even";
      } else {
        type = "odd";
      }
      console.log(`${n1} - ${n2} = ${result} - ${type}`);
      break;
    case "*":
      result = n1 * n2;
      if (result % 2 === 0) {
        type = "even";
      } else {
        type = "odd";
      }
      console.log(`${n1} * ${n2} = ${result} - ${type}`);
      break;
    case "/":
      if (n1 == 0 || n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = n1 / n2;
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
      }

      break;
    case "%":
      if (n1 == 0 || n2 == 0) {
        console.log(`Cannot divide ${n1} by zero`);
      } else {
        result = n1 % n2;
        console.log(`${n1} % ${n2} = ${result}`);
      }
      break;

    default:
      break;
  }
}
operationsBetweenNumbers(["14", "0", "/"]);
