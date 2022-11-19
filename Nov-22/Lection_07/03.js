function numbers1withStep3(params) {
  let n = Number(params[0]);

  for (let i = 1; i <= n; i += 3) {
    console.log(i);
  }
}
numbers1withStep3(["1"]);
