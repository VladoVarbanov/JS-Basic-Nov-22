// ⦁	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// ⦁	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// ⦁	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// ⦁	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка


function basketballEquipment(input) {
    let pricePerYear = Number(input[0]);
    let shoеs = pricePerYear - (pricePerYear * 0.4);
    let ekip = shoеs - (shoеs * 0.2);
    let ball = ekip / 4;
    let accessories = ball / 5;

    let allPrice = pricePerYear + shoеs + ekip + ball + accessories;

    console.log(allPrice);
}

basketballEquipment(["365"]);