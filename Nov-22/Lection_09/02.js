function password(params) {
  let username = params[0];
  let password = params[1];
  let index = 2;
  let data = params[index];
  while (data !== password) {
    data = params[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}
password(["Gosho", "secret", "secret"]);
