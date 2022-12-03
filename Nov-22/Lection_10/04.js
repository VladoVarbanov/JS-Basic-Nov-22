function walking(params) {
  let index = 0;
  let totalSteps = 0;
  let cycleLength = params;

  while (index !== cycleLength.length) {
    if (params[index] !== "Going home") {
      let steps = Number(params[index]);
      totalSteps += steps;
      index++;
    } else {
      index++;
      totalSteps += Number(params[index]);
      index++;
    }
  }
  if (totalSteps >= 10000) {
    console.log("Goal reached! Good job!");
    console.log(`${totalSteps - 10000} steps over the goal!`);
  } else {
    console.log(`${10000 - totalSteps} more steps to reach goal.`);
  }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
