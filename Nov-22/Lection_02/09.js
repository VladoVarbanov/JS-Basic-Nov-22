function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let takenSpacePercent = Number(input[3]);
    let takenSpaceDecimal = takenSpacePercent / 100;

    let tankVolume = length * width * height;
    let tankVolumeL = tankVolume * 0.001;

    let spaceTaken = takenSpaceDecimal * tankVolumeL;
    let spaceLeft = tankVolumeL - spaceTaken;

    console.log(spaceLeft);
}

fishTank(["85","75","47","17"])