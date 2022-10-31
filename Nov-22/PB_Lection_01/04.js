function vegetableMarket(input) {
    let n = input[0];
    let m = input[1];
    let nPK = input[2];
    let mPK = input[3];

    let nSum = n * nPK;
    let mSum = m * mPK;
    let SumEuro = (nSum + mSum) / 1.94;
    
    console.log(SumEuro.toFixed(2));
}

vegetableMarket([0.194, 19.4, 10, 10]);