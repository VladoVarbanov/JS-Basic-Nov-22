function numberPyramid(params) {
  let n = Number(params[0]);
  let index = 1;
  let number = "";
  let isFinished = false;

  for (let row = 1; row <= n; row++) {
    for (let cols = 1; cols <= row; cols++) {
      number += `${index} `;
      if (index === n) {
        isFinished = true;
        break;
      }
      index++;
    }
    console.log(number);
    number = "";
    if (isFinished) {
      break;
    }
  }
}
numberPyramid(["15"]);
