
export function raknaMedWhile() {
  let tal = 1;

  while (tal <= 10) {
    console.log(tal);
    tal++;
  }
}

export function raknaBaklanges() {
  let tal = 10;

  while (tal >= 1) {
    console.log(tal);
    tal--;
  }

  console.log("Klart!");
}

export function jamnaTal() {
  let tal = 1;

  while (tal <= 20) {
    if (tal % 2 === 0) {
      console.log(tal);
    }

    tal++;
  }
}
