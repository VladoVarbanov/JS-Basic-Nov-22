function moving(params) {
  let index = 0;

  let width = Number(params[index]);
  index++;
  let length = Number(params[index]);
  index++;
  let height = Number(params[index]);
  index++;
  let boxes = params[index];
  index++;
  let volume = width * height * length;

  while (boxes !== "Done") {
    boxes = Number(boxes);
    volume -= boxes;

    if (volume <= 0) {
      console.log(
        `No more free space! You need ${Math.abs(volume)} Cubic meters more.`
      );
      return;
    }
    boxes = params[index];
    index++;
  }
  console.log(`${volume} Cubic meters left.`);
}
moving(["10", "1", "2", "4", "6", "Done"]);
