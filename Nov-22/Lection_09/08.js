function graduation(params) {
  let name = params[0];
  let index = 1;
  let classDegree = 1;
  let total = 0;

  while (classDegree < 13) {
    let number = Number(params[index]);
    if (number >= 4) {
      total += number;
      index++;
      classDegree++;
    } else {
      console.log(`${name} has been excluded at ${classDegree} grade`);
      return;
    }
  }
  console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
