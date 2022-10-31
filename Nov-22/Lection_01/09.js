function YardGreening(input) {
    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = price * 0.18;
    let sum = price - (price * 0.18);

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

YardGreening(["550"]);