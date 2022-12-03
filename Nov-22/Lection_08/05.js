function salary(params) {
  let openTabs = Number(params[0]);
  let salary = Number(params[1]);

  for (let i = 2; i <= params.length; i++) {
    if (params[i] === "Facebook") {
      salary -= 150;
    } else if (params[i] === "Instagram") {
      salary -= 100;
    } else if (params[i] === "Reddit") {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
