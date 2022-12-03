function readText(params) {
  let index = 0;
  while (params[index] !== "Stop") {
    console.log(params[index]);
    index++;
  }
}
readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
