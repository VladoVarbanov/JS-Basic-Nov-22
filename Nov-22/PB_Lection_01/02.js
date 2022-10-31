function triangleArea(input) {
    let a = input[0];
    let h = input[1];
    let area = (a * h) / 2;
    let n = area.toFixed(2);

    console.log(n);
}
triangleArea([15, 35])