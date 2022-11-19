function onTimeExam(params) {
  let hourExam = Number(params[0]);
  let minuteExam = Number(params[1]);
  let hourStudent = Number(params[2]);
  let minuteStudent = Number(params[3]);
  let allStudentMinutes = 0;
  let allExamMinutes = 0;

  if (hourExam === 0) {
    hourExam = 24;
  }

  if (hourStudent === 0) {
    hourStudent = 24;
  }

  allExamMinutes = hourExam * 60 + minuteExam;
  allStudentMinutes = hourStudent * 60 + minuteStudent;

  if (allExamMinutes >= allStudentMinutes) {
    let differenceMinutes = allExamMinutes - allStudentMinutes;
    if (differenceMinutes <= 30) {
      console.log("On time");
      console.log(`${differenceMinutes} minutes before the start`);
    } else {
      console.log("Early");
      if (differenceMinutes >= 60) {
        let hourDiff = Math.trunc(differenceMinutes / 60);
        differenceMinutes -= hourDiff * 60;
        if (differenceMinutes < 10) {
          differenceMinutes = "0" + differenceMinutes;
        }
        console.log(`${hourDiff}:${differenceMinutes} hours before the start`);
      } else {
        console.log(`${differenceMinutes} minutes before the start`);
      }
    }
  } else {
    console.log("Late");
    let differenceMinutes = allStudentMinutes - allExamMinutes;
    if (differenceMinutes >= 60) {
      let hourDiff = Math.trunc(differenceMinutes / 60);
      differenceMinutes -= hourDiff * 60;
      if (differenceMinutes < 10) {
        differenceMinutes = "0" + differenceMinutes;
      }
      console.log(`${hourDiff}:${differenceMinutes} hours after the start`);
    } else {
      console.log(`${differenceMinutes} minutes after the start`);
    }
  }
}
onTimeExam(["16", "00", "17", "00"]);
