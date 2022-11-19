// function hotelRooms(input) {
//   let month = input[0];
//   let numNights = Number(input[1]);
//   let typeRoom;
//   let resultS = 0;
//   let resultA = 0;

//   switch (month) {
//     case "May":
//     case "October":
//       typeRoom = "Studio";
//       if (numNights > 14) {
//         resultS = numNights * 50 * 0.7;
//       } else if (numNights > 7) {
//         resultS = numNights * 50 * 0.95;
//       }

//       break;

//     case "June":
//     case "September":
//       typeRoom = "Studio";
//       if (numNights > 14) {
//         result = numNights * 75.2 * 0.8;
//       }
//       break;
//   }
//   switch (month) {
//     case "May":
//     case "October":
//       typeRoom = "Apartment";
//       resultA = numNights * 65;
//       if (numNights > 14) {
//         resultA = resultA * 0.9;
//       }
//       break;
//     case "June":
//     case "September":
//       typeRoom = "Apartment";
//       result = numNights * 68.7;
//       if (numNights > 14) {
//         result = result * 0.9;
//       }
//       break;
//     case "July":
//     case "August":
//       typeRoom = "Apartment";
//       result = numNights * 77;
//       if (numNights > 14) {
//         result = result * 0.9;
//       }
//       break;
//   }
//   console.log(`Apartment: ${resultA} lv.`);
//   console.log(`Studio: ${resultS} lv.`);
// }
// hotelRooms(["May", "15"]);

function hotelRooms(input) {
  let month = input[0];
  let numNights = Number(input[1]);
  let typeRoom;
  let result = 0;
  let result1 = 0;

  switch (month) {
    case "May":
    case "October":
      typeRoom = "Studio";
      if (numNights > 14) {
        result = numNights * 50 * 0.7;
      } else if (numNights > 7) {
        result = numNights * 50 * 0.95;
      } else {
        result = numNights * 50;
      }

      break;

    case "June":
    case "September":
      typeRoom = "Studio";
      if (numNights > 14) {
        result = numNights * 75.2 * 0.8;
      } else {
        result = numNights * 75.2;
      }
      break;
    case "July":
    case "August":
      typeRoom = "Studio";

      result = numNights * 76;

      break;
  }

  switch (month) {
    case "May":
    case "October":
      typeRoom = "Apartment";
      result1 = numNights * 65;
      if (numNights > 14) {
        result1 = result1 * 0.9;
      }
      break;
    case "June":
    case "September":
      typeRoom = "Apartment";
      result1 = numNights * 68.7;
      if (numNights > 14) {
        result1 = result1 * 0.9;
      }
      break;
    case "July":
    case "August":
      typeRoom = "Apartment";
      result1 = numNights * 77;
      if (numNights > 14) {
        result1 = result1 * 0.9;
      }
      break;
  }
  console.log(`Apartment: ${result1.toFixed(2)} lv.`);
  console.log(`Studio: ${result.toFixed(2)} lv.`);
}
hotelRooms(["August", "20"]);
