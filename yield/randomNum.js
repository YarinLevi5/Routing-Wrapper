function* genrateRandomNumber() {
  let rndNumber = Math.random();
  yield rndNumber;
}
let number = genrateRandomNumber();
console.log(number.next());
