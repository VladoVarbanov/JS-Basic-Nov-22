function personalTitles(params) {
  let input = Number(params[0]);
  let input2 = params[1];

  if (input >= 16 && input2 === "m") {
    console.log("Mr.");
  } else if (input < 16 && input2 === "m") {
    console.log("Master");
  } else if (input >= 16 && input2 === "f") {
    console.log("Ms.");
  } else if (input < 16 && input2 === "f") {
    console.log("Miss");
  }
}
personalTitles(["17", "m"]);
