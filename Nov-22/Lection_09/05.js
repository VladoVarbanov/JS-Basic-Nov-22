function accountBalance(params) {
  let index = 0;
  let total = 0;

  while (params[index] !== "NoMoreMoney") {
    let money = Number(params[index]);
    if (money > 0) {
      total += money;
      console.log(`Increase: ${money.toFixed(2)}`);
      index++;
    } else {
      console.log("Invalid operation!");
      break;
    }
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
