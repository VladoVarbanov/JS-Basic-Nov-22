// ⦁	Предпазен найлон - 1.50 лв. за кв. метър
// ⦁	Боя - 14.50 лв. за литър
// ⦁	Разредител за боя - 5.00 лв. за литър


function repainting(input) {
    let nylonSquare = Number(input[0]);
    let paintLitters = Number(input[1]);
    let paintThinnerLitters = Number(input[2]) * 5.00;
    let hoursWork = Number(input[3]);

    let nylonPrice = (nylonSquare + 2) *1.50;
    let paintLitterPrice = (paintLitters + (paintLitters * 0.1)) * 14.50;

    let priceMatterials = nylonPrice + paintLitterPrice + paintThinnerLitters + 0.40;
    let paidPerHour = priceMatterials * 0.3 * hoursWork;

    let sum = priceMatterials + paidPerHour;


    console.log(sum);
}

repainting(["10","11","4","8"]);