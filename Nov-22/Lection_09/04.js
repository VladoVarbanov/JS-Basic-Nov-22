function sequence(params) {
  let n = Number(params[0]);
  let number = 0;

  while (number < n) {
    number = number * 2 + 1;
    if (number > n) {
      return;
    }
    console.log(number);
  }
}
sequence(["31"]);
