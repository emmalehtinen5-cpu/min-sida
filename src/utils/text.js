export const grader = (temp) => `${temp} °C`;
export const copyright = (namn) =>
  `© ${new Date().getFullYear()} ${namn}`;
export const storaBokstaver = (text) =>
  text.toUpperCase();
export const kombineraText = (rubrik, beskrivning) =>
  `${rubrik} – ${beskrivning}`;
export const skapaHalsning = (namn = "besökare") =>
  `Välkommen, ${namn}!`;
export const hamtaTemaText = (morkt) => {
  if (morkt) {
    return "Mörkt läge är aktiverat";
  } else {
    return "Ljust läge är aktiverat";
  }
};

export const temperaturText = (temp) => {
  if (temp < 0) {
    return "Minusgrader";
  } else if (temp < 15) {
    return "Kallt";
  } else if (temp < 25) {
    return "Behagligt";
  } else {
    return "Varmt";
  }
};

export const arBehagligTemperatur = (temp) => {
  return temp >= 15 && temp < 25;
};

export const arExtremTemperatur = (temp) => {
  return temp < 0 || temp >= 30;
};

export const arNormalTemperatur = (temp) => {
  return !arExtremTemperatur(temp);
};


export const snyggtDatum = (datum) =>
  new Date(datum).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const kortText = (text, max) => {
  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max)}...`;
};


export const antalProjekt = (antal, totalt) =>
  `Visar ${antal} av ${totalt} projekt`;

export const fornamn = (namn) =>
  namn.split(" ")[0];

// Exempel med ditt namn:
// fornamn("Emma Lehtinen") ger "Emma"

export const initialer = (namn) =>
  namn
    .split(" ")
    .map((del) => del[0])
    .join("")
    .toUpperCase();

// Exempel:
// initialer("Emma Lehtinen") ger "EL"

export function halsning() {
  const timme = new Date().getHours();

  if (timme < 10) {
    return "God morgon";
  } else if (timme < 18) {
    return "God dag";
  } else {
    return "God kväll";
  }
}
