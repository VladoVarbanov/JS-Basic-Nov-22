function equalSumsEvenOddPosition(params) {
  let startNum = Number(params[0]);
  let endNumber = Number(params[1]);
  let result = "";

  for (let currentNum = startNum; currentNum <= endNumber; currentNum++) {
    let currentNumStr = currentNum.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < currentNumStr.length; index++) {
      const currentDigit = Number(currentNumStr[index]);

      let position = index + 1;

      if (position % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      result += `${currentNumStr} `;
    }
  }
  console.log(result);
}
equalSumsEvenOddPosition(["100115", "100120"]);
