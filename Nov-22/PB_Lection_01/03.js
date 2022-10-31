function celsiusToFahrenheit(input) {
    let c = input[0];
    let f = c * 1.8 + 32;
    let n = f.toFixed(2);

    console.log(n);
}

celsiusToFahrenheit([0]);