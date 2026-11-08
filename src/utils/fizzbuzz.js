
/* =====================================
   FIZZBUZZ – JAVASCRIPTÖVNING
===================================== */

export function  fizzBuzz(maxTal = 100) {
  for (let tal = 1; tal <= maxTal; tal++) {

    if (tal % 3 === 0 && tal % 5 === 0) {
      console.log("FizzBuzz");

    } else if (tal % 3 === 0) {
      console.log("Fizz");

    } else if (tal % 5 === 0) {
      console.log("Buzz");

    } else {
      console.log(tal);
    }
  }
}
