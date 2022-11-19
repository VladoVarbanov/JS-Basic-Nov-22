function workingHours(params) {
  let number = Number(params[0]);
  let day = params[1];

  if (number >= 10 && number <= 18) {
    switch (day) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;

      default:
        console.log("closed");
        break;
    }
  } else console.log("closed");
}
workingHours(["14", "Monday"]);
