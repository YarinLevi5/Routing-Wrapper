function* genrateRandomInteger() {
  let rndNumber = Math.floor(Math.random() * (20 - 10 + 1) + 10);
  if (rndNumber > 12) {
    yield rndNumber;
  }
}
let number = genrateRandomInteger();
console.log(number.next());
