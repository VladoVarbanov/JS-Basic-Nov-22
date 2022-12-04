function specialNumbers(params) {
  let n = Number(params[0]);
  let output = "";
  let isSpecial = true;
  let allNumbers = "";

  for (let i = 1111; i <= 9999; i++) {
    let numberAsString = i.toString();
    for (let j = 0; j < numberAsString.length; j++) {
      if (n % numberAsString[j] === 0) {
        output += numberAsString[j];
      } else {
        isSpecial = false;
        break;
      }
    }
    if (isSpecial) {
      allNumbers += `${output} `;
      output = "";
    } else {
      output = "";
      isSpecial = true;
    }
  }
  console.log(allNumbers);
}
specialNumbers(["16"]);
