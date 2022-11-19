function worldSwimmingRecord(params) {
  let worldRecord = Number(params[0]);
  let distance = Number(params[1]);
  let timeInSec = Number(params[2]);

  let waterResistance = Math.floor(distance / 15) * 12.5;
  let ivanRecord = (distance * timeInSec + waterResistance).toFixed(2);

  if (ivanRecord >= worldRecord) {
    console.log(
      `No, he failed! He was ${(ivanRecord - worldRecord).toFixed(
        2
      )} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${ivanRecord} seconds.`
    );
  }
}

worldSwimmingRecord([10464, 1500, 20]);
// worldSwimmingRecord([55555.67, 3017, 5.03]);
