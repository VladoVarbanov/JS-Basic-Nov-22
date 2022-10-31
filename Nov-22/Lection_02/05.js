// ⦁	Пакет химикали - 5.80 лв. 
// ⦁	Пакет маркери - 7.20 лв. 
// ⦁	Препарат - 1.20 лв (за литър)


function suppliesForSchool(input) {
    let pensBag = Number(input[0]) * 5.80;
    let markersBag = Number(input[1]) * 7.20;
    let detergentLitters = Number(input[2]) * 1.20;
    let percentDiscount = Number(input[3]) / 100;

    let discount = (pensBag + markersBag + detergentLitters) * percentDiscount;
    let sum = (pensBag + markersBag + detergentLitters) - discount;
    console.log(sum);
}

suppliesForSchool(["2","3","4","25"])