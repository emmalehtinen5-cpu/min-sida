
/* =========================================
   TEXT.JS – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

/* =========================================
   1. GRADER OCH ALLMÄNNA TEXTER
========================================= */

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

/* =========================================
   2. TEMPERATURBESKRIVNINGAR
   SVENSKA / ENGELSKA / FINSKA
========================================= */

const temperaturOversattningar = {
  sv: {
    minus: "Minusgrader",
    kallt: "Kallt",
    behagligt: "Behagligt",
    varmt: "Varmt",
  },

  en: {
    minus: "Below zero",
    kallt: "Cold",
    behagligt: "Pleasant",
    varmt: "Warm",
  },

  fi: {
    minus: "Pakkasta",
    kallt: "Kylmä",
    behagligt: "Miellyttävä",
    varmt: "Lämmin",
  },
};

export const temperaturText = (temp, sprak = "sv") => {
  const text =
    temperaturOversattningar[sprak] ||
    temperaturOversattningar.sv;

  if (temp < 0) {
    return text.minus;
  } else if (temp === 0) {
    return text.kallt;
  } else if (temp < 25) {
    return text.behagligt;
  } else {
    return text.varmt;
  }
};

export const arBehagligTemperatur = (temp) => {
  return temp > 0 && temp < 25;
};

export const arExtremTemperatur = (temp) => {
  return temp < 0 || temp >= 30;
};

export const arNormalTemperatur = (temp) => {
  return !arExtremTemperatur(temp);
};

/* =========================================
   3. DATUM OCH TEXT
========================================= */

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

/* =========================================
   4. PROJEKT
========================================= */

export const antalProjekt = (antal, totalt) =>
  `Visar ${antal} av ${totalt} projekt`;

/* =========================================
   5. NAMN OCH INITIALER
========================================= */

export const fornamn = (namn) =>
  namn.split(" ")[0];

// Exempel:
// fornamn("Emma Lehtinen") ger "Emma"

export const initialer = (namn) =>
  namn
    .split(" ")
    .map((del) => del[0])
    .join("")
    .toUpperCase();

// Exempel:
// initialer("Emma Lehtinen") ger "EL"

/* =========================================
   6. HÄLSNING EFTER TID PÅ DYGNET
========================================= */

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
