
export function testaBreak() {
  for (let tal = 1; tal <= 10; tal++) {

    if (tal === 6) {
      break;
    }

    console.log(tal);
  }

  console.log("Loopen avslutades!");
}


export function testaContinue() {
  for (let tal = 1; tal <= 10; tal++) {
    if (tal === 6) {
      continue;
    }

    console.log(tal);
  }

  console.log("Loopen är klar!");
}
