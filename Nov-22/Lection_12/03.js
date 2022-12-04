function sumPrimeNonPrime(params) {
  let primeSum = 0;
  let nonPrimeSum = 0;

  let index = 0;
  let command = params[index];
  index++;
  while (command !== "stop") {
    let currentNum = Number(command);

    if (currentNum < 0) {
      console.log("Number is negative.");
      command = params[index];
      index++;
      continue;
    }

    let isPrime = true;

    for (
      let currentDivisor = 2;
      currentDivisor < currentNum;
      currentDivisor++
    ) {
      if (currentNum % currentDivisor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeSum += currentNum;
    } else {
      nonPrimeSum += currentNum;
    }

    command = params[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
