function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let backWall = x * x;
    let frontWall = backWall - (1.2 * 2);
    let sideWalls = ((x * y) - (1.5 * 1.5)) * 2;
    let sideWallsRoof = (x * y) * 2;
    let roofWalls = ((x * h) / 2) * 2;

    let greenWalls = backWall + frontWall + sideWalls;
    let redWalls = sideWallsRoof + roofWalls;

    let greenPaint = greenWalls / 3.4;
    let redPaint = redWalls / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting([6, 10, 5.2]);