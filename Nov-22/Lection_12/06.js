function cinemaTickets(params) {
  let index = 0;

  let movieTitle = params[index];
  index++;

  let standardTicketCount = 0;
  let studentTicketCount = 0;
  let kidTicketCount = 0;

  while (movieTitle !== "Finish") {
    let spacesAvailable = Number(params[index]);
    index++;
    let currentTicket = params[index];
    index++;

    let spacesTaken = 0;

    while (currentTicket !== "End") {
      if (currentTicket === "standard") {
        standardTicketCount += 1;
      } else if (currentTicket === "student") {
        studentTicketCount += 1;
      } else if (currentTicket === "kid") {
        kidTicketCount += 1;
      }
      spacesTaken++;

      if (spacesTaken === spacesAvailable) {
        break;
      }
      currentTicket = params[index];
      index++;
    }

    let percentFull = ((spacesTaken / spacesAvailable) * 100).toFixed(2);
    console.log(`${movieTitle} - ${percentFull}% full.`);

    movieTitle = params[index];
    index++;
  }

  let totalTickets = studentTicketCount + standardTicketCount + kidTicketCount;
  console.log(`Total tickets: ${totalTickets}`);

  let standardPercent = (standardTicketCount / totalTickets) * 100;
  let studentPercent = (studentTicketCount / totalTickets) * 100;
  let kidPercent = (kidTicketCount / totalTickets) * 100;
  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
