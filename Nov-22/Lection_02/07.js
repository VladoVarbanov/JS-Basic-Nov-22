// ⦁	Пилешко меню –  10.35 лв. 
// ⦁	Меню с риба – 12.40 лв. 
// ⦁	Вегетарианско меню  – 8.15 лв. 


function foodDelivery(input) {
    let chickenCount = Number(input[0]);
    let fishCount = Number(input[1]);
    let vegCount = Number(input[2]);

    totalMenuPrice = (chickenCount * 10.35) + (fishCount * 12.40) + (vegCount * 8.15);
    let dessert = totalMenuPrice * 0.20;
    let total = totalMenuPrice + dessert + 2.50;
    
    console.log(total);
}

foodDelivery(["2","4","3"]);