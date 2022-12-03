function trekkingMania(params) {
  let groupCount = Number(params[0]);
  let musala = 0;
  let monbland = 0;
  let kilimanjaro = 0;
  let k2 = 0;
  let everest = 0;
  let allPeople = 0;

  for (let i = 1; i <= groupCount; i++) {
    if (params[i] < 6) {
      allPeople += Number(params[i]);
      musala += Number(params[i]);
    } else if (params[i] < 13) {
      allPeople += Number(params[i]);
      monbland += Number(params[i]);
    } else if (params[i] < 26) {
      allPeople += Number(params[i]);
      kilimanjaro += Number(params[i]);
    } else if (params[i] < 41) {
      allPeople += Number(params[i]);
      k2 += Number(params[i]);
    } else {
      allPeople += Number(params[i]);
      everest += Number(params[i]);
    }
  }
  console.log(`${((musala / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((monbland / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((kilimanjaro / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((k2 / allPeople) * 100).toFixed(2)}%`);
  console.log(`${((everest / allPeople) * 100).toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
