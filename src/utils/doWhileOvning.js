
export function raknaMedDoWhile() {
  let tal = 1;

  do {
    console.log(tal);
    tal++;
  } while (tal <= 5);

  console.log("Klart!");
}

export function jamforLoopar() {
  let tal = 10;

  console.log("WHILE:");

  while (tal < 5) {
    console.log(tal);
    tal++;
  }

  console.log("DO...WHILE:");

  do {
    console.log(tal);
    tal++;
  } while (tal < 5);

  console.log("Klart!");
}
