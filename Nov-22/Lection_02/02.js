function radToDeg(input) {
    let angle = Number(input[0]);

    let rad = (angle * 180) / Math.PI;

    console.log(rad);
}

radToDeg(["3.1416"]);