function Number100To200(input) {
    let num = Number(input[0]);

    if (num > 200) {
        console.log("Greater than 200");
    } else if(num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    }else if(num < 100){
        console.log("Less than 100");
    }
}

Number100To200(["100"]);