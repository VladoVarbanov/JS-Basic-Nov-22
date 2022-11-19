function cinema(params) {
  let typeProjection = params[0];
  let r = Number(params[1]);
  let c = Number(params[2]);

  switch (typeProjection) {
    case "Premiere":
      console.log(`${(r * c * 12).toFixed(2)} leva`);
      break;
    case "Normal":
      console.log(`${(r * c * 7.5).toFixed(2)} leva`);
      break;
    case "Discount":
      console.log(`${(r * c * 5).toFixed(2)} leva`);
      break;

    default:
      break;
  }
}
cinema(["Premiere", "10", "12"]);
