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