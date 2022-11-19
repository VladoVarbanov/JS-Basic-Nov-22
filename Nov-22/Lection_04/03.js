function timeMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let calMinutes = minutes + 15;
  let setHours = null;
  let setMinutes = null;

  if (calMinutes === 60) {
    setMinutes = 0;
    setHours = hours + 1;
  } else if (calMinutes > 60) {
    setMinutes = calMinutes - 60;
    setHours = hours + 1;
  } else {
    setMinutes = calMinutes;
    setHours = hours;
  }

  if (setHours === 24) {
    setHours = 0;
  }
  if (setMinutes < 10) {
    setMinutes = "0" + setMinutes;
  }

  console.log(`${setHours}:${setMinutes}`);
}

timeMinutes([0, 45]);
