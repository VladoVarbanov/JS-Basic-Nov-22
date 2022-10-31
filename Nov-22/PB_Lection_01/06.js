// ⦁	Паламуд – 60% по-скъп от скумрията
// ⦁	Сафрид – 80% по-скъп от цацата
// ⦁	Миди – 7.50 лв. за килограм


function Fishland(input) {
    let skumriaPrice = Number(input[0]);
    let cacaPrice = Number(input[1]);
    let palamutKg = Number(input[2]);
    let saftidKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPriceKg = (skumriaPrice * 0.6) + skumriaPrice;
    let palamudPrice = palamudPriceKg * palamutKg;

    let safridPriceKg = (cacaPrice * 0.8) + cacaPrice;
    let safridPrice = safridPriceKg * saftidKg;

    let midiPrice = midiKg * 7.50;

    let sum = palamudPrice + safridPrice + midiPrice;
    let sumNumber = Number(sum);
    
    console.log(sumNumber.toFixed(2));
}

Fishland([6.90, 4.20, 1.5, 2.5, 1])