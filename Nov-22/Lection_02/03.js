function depositCalculator(input){
    let depositeSum = Number(input[0]);
    let depositePeriodMounths = Number(input[1]);
    let yearlyIncreasePercent = Number(input[2]);

    let yearlyIncreaseDecimal = yearlyIncreasePercent / 100;

    let sum = depositeSum + depositePeriodMounths * ((depositeSum * yearlyIncreaseDecimal) / 12);
    console.log(sum);
}

depositCalculator(["200", "3", "5.7"]);
