function tradeCommissions(params) {
  let city = params[0];
  let sales = Number(params[1]);

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        console.log((sales - sales * 0.95).toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        console.log((sales - sales * 0.93).toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        console.log((sales - sales * 0.92).toFixed(2));
      } else if (sales > 10000) {
        console.log((sales - sales * 0.88).toFixed(2));
      } else console.log("error");
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        console.log((sales - sales * 0.955).toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        console.log((sales - sales * 0.925).toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        console.log((sales - sales * 0.9).toFixed(2));
      } else if (sales > 10000) {
        console.log((sales - sales * 0.87).toFixed(2));
      } else console.log("error");
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        console.log((sales - sales * 0.945).toFixed(2));
      } else if (sales > 500 && sales <= 1000) {
        console.log((sales - sales * 0.92).toFixed(2));
      } else if (sales > 1000 && sales <= 10000) {
        console.log((sales - sales * 0.88).toFixed(2));
      } else if (sales > 10000) {
        console.log((sales - sales * 0.855).toFixed(2));
      } else console.log("error");
      break;

    default:
      console.log("error");
      break;
  }
}
tradeCommissions(["Plovdiv", "-499.99"]);
