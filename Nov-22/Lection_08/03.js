function histogram(params) {
  let numsCount = Number(params[0]);
  let currentNum = 0;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= numsCount; i++) {
    currentNum = params[i];
    if (currentNum < 200) {
      p1++;
    } else if (currentNum >= 200 && currentNum <= 399) {
      p2++;
    } else if (currentNum >= 400 && currentNum <= 599) {
      p3++;
    } else if (currentNum >= 600 && currentNum <= 799) {
      p4++;
    } else if (currentNum >= 800) {
      p5++;
    }
  }
  console.log(`${((p1 * 100) / numsCount).toFixed(2)}%`);
  console.log(`${((p2 * 100) / numsCount).toFixed(2)}%`);
  console.log(`${((p3 * 100) / numsCount).toFixed(2)}%`);
  console.log(`${((p4 * 100) / numsCount).toFixed(2)}%`);
  console.log(`${((p5 * 100) / numsCount).toFixed(2)}%`);
}
histogram(["3", "1", "2", "999"]);
