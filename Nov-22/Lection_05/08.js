function cinemaTicket(params) {
  let input = params[0];

  switch (input) {
    case "Monday":
      console.log(12);
      break;
    case "Tuesday":
      console.log(12);
      break;
    case "Wednesday":
      console.log(14);
      break;
    case "Thursday":
      console.log(14);
      break;
    case "Friday":
      console.log(12);
      break;
    case "Saturday":
      console.log(16);
      break;
    case "Sunday":
      console.log(16);
      break;

    default:
      break;
  }
}
cinemaTicket(["Monday"]);

function tickets(input) {
  let dayOfWeek = input[0];

  switch (dayOfWeek) {
    case "Monday":
    case "Thusday":
    case "Friday":
      console.log("12");
      break;

    case "Wednesday":
    case "Thursday":
      console.log("14");
      break;

    case "Saturday":
    case "Sunday":
      console.log("16");
      break;
  }
}
