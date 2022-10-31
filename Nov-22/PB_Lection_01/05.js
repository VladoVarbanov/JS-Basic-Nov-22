function TrainingLab(input) {
    let h = input[0] * 100;
    let w = input[1] * 100;

    let wPlaces = (w - 100) / 70;
    let wPlaceWholeN = Math.floor(wPlaces);

    let hPlaces = h / 120;
    let hPlaceWholeN = Math.floor(hPlaces);

    let sum = (hPlaceWholeN * wPlaceWholeN) - 3;

    console.log(sum);
}

TrainingLab([15, 8.9]);