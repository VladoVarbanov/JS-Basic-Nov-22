function building(params) {
  let floorEntered = Number(params[0]);
  let roomEntered = Number(params[1]);
  let result = "";

  for (let floor = floorEntered; floor >= 1; floor--) {
    for (let room = 0; room < roomEntered; room++) {
      if (floor === floorEntered) {
        result += `L${floor}${room} `;
      } else if (floor % 2 === 0) {
        result += `O${floor}${room} `;
      } else {
        result += `A${floor}${room} `;
      }
    }
    result += "\n";
  }
  console.log(result);
}
building(["6", "4"]);
