function oldBooks(params) {
  let bookSearched = params[0];

  let index = 1;
  let currentBook = params[index];
  index++;

  let bookChecked = 0;

  while (currentBook !== "No More Books") {
    if (currentBook === bookSearched) {
      console.log(`You checked ${bookChecked} books and found it.`);
      return;
    }
    bookChecked++;
    currentBook = params[index];
    index++;
  }
  console.log(`The book you search is not here!`);
  console.log(`You checked ${bookChecked} books.`);
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
