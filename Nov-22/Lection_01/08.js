function PetShop(input) {
    let dogFoof = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;

    console.log(`${dogFoof + catFood} lv.`);
}

PetShop(["5", "4"]);