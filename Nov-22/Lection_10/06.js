function cake(params) {
  let width = Number(params[0]);
  let hight = Number(params[1]);
  let cakeSize = width * hight;
  let index = 2;
  let piceLeft = cakeSize;

  while (index !== params.length) {
    if (params[index] !== "STOP") {
      piceLeft -= params[index];
      index++;
    } else {
      break;
    }
  }
  if (piceLeft > 0) {
    console.log(`${piceLeft} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(piceLeft)} pieces more.`
    );
  }
}
cake(["10", "2", "2", "4", "6", "STOP"]);
