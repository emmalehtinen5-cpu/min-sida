
/* =========================================
   VADER.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState, useEffect, useRef } from "react";
import "./Vader.css";
import TaBortKnapp from "./TaBortKnapp";

import {
  grader,
  arExtremTemperatur,
} from "../utils/text";

import { stader } from "../data/stader";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "Vädret just nu:",
    valjStad: "Välj stad...",
    sokStad: "Sök efter stad...",
    sok: "SÖK",
    soker: "SÖKER...",
    laddar: "Hämtar väder...",
    kallt: "Kallt",
    svalt: "Svalt",
    milt: "Milt",
    varmt: "Varmt",
    hett: "Hett",
    skont: "Skönt väder!",
    normalt: "Normal temperatur",
    extremt: "Extrem temperatur!",
    vind: "VIND",
    ingaStader: "Inga städer visas. Sök efter en stad!",
    redanFinns: "Staden finns redan i listan.",
    hittasInte: "Staden kunde inte hittas.",
    sokFel: "Kunde inte hämta staden. Försök igen.",
    vaderFel: "Kunde inte hämta vädret just nu.",
  },

  en: {
    rubrik: "Current weather:",
    valjStad: "Select city...",
    sokStad: "Search for a city...",
    sok: "SEARCH",
    soker: "SEARCHING...",
    laddar: "Loading weather...",
    kallt: "Cold",
    svalt: "Cool",
    milt: "Mild",
    varmt: "Warm",
    hett: "Hot",
    skont: "Nice weather!",
    normalt: "Normal temperature",
    extremt: "Extreme temperature!",
    vind: "WIND",
    ingaStader: "No cities displayed. Search for a city!",
    redanFinns: "The city is already in the list.",
    hittasInte: "The city could not be found.",
    sokFel: "Could not retrieve the city. Please try again.",
    vaderFel: "Could not load the weather right now.",
  },

  fi: {
    rubrik: "Sää juuri nyt:",
    valjStad: "Valitse kaupunki...",
    sokStad: "Etsi kaupunkia...",
    sok: "HAE",
    soker: "HAETAAN...",
    laddar: "Haetaan säätietoja...",
    kallt: "Kylmä",
    svalt: "Viileä",
    milt: "Leuto",
    varmt: "Lämmin",
    hett: "Kuuma",
    skont: "Mukava sää!",
    normalt: "Normaali lämpötila",
    extremt: "Äärimmäinen lämpötila!",
    vind: "TUULI",
    ingaStader: "Ei näytettäviä kaupunkeja. Etsi kaupunkia!",
    redanFinns: "Kaupunki on jo listalla.",
    hittasInte: "Kaupunkia ei löytynyt.",
    sokFel: "Kaupunkia ei voitu hakea. Yritä uudelleen.",
    vaderFel: "Säätietoja ei voitu hakea juuri nyt.",
  },
};

/* =========================================
   2. ÖVERSÄTT STADSNAMN
========================================= */

const stadsnamn = {
  helsingfors: {
    sv: "Helsingfors",
    en: "Helsinki",
    fi: "Helsinki",
  },
  helsinki: {
    sv: "Helsingfors",
    en: "Helsinki",
    fi: "Helsinki",
  },
  moskva: {
    sv: "Moskva",
    en: "Moscow",
    fi: "Moskova",
  },
  moscow: {
    sv: "Moskva",
    en: "Moscow",
    fi: "Moskova",
  },
  moskova: {
    sv: "Moskva",
    en: "Moscow",
    fi: "Moskova",
  },
  rom: {
    sv: "Rom",
    en: "Rome",
    fi: "Rooma",
  },
  rome: {
    sv: "Rom",
    en: "Rome",
    fi: "Rooma",
  },
  rooma: {
    sv: "Rom",
    en: "Rome",
    fi: "Rooma",
  },
  peking: {
    sv: "Peking",
    en: "Beijing",
    fi: "Peking",
  },
  beijing: {
    sv: "Peking",
    en: "Beijing",
    fi: "Peking",
  },
  berlin: {
    sv: "Berlin",
    en: "Berlin",
    fi: "Berliini",
  },
  berliini: {
    sv: "Berlin",
    en: "Berlin",
    fi: "Berliini",
  },
};

function oversattStadsnamn(namn, sprak) {
  return stadsnamn[namn.toLowerCase()]?.[sprak] || namn;
}

/* =========================================
   3. ÖVERSÄTT TEMPERATURBESKRIVNING
========================================= */

function oversattTemperatur(temperatur, sprak) {
  const text = oversattningar[sprak] || oversattningar.sv;

  if (temperatur < 0) {
    return sprak === "fi" ? "Pakkasta" :
           sprak === "en" ? "Below freezing" : "Minusgrader";
  } else if (temperatur < 10) {
    return text.kallt;
  } else if (temperatur < 15) {
    return text.svalt;
  } else if (temperatur < 20) {
    return text.milt;
  } else if (temperatur < 25) {
    return sprak === "fi" ? "Miellyttävä" :
           sprak === "en" ? "Pleasant" : "Behagligt";
  } else if (temperatur < 30) {
    return text.varmt;
  } else {
    return text.hett;
  }
}

/* =========================================
   4. OMVANDLA LANDSKOD TILL FLAGGA
========================================= */

function landsFlagga(landskod) {
  const kod = (landskod || "").toUpperCase();

  if (!/^[A-Z]{2}$/.test(kod)) {
    return "🌍";
  }

  return [...kod]
    .map((bokstav) =>
      String.fromCodePoint(
        127397 + bokstav.charCodeAt(0)
      )
    )
    .join("");
}

/* =========================================
   5. VÄDERIKONER – DAGTID
========================================= */

function vaderIkon(kod) {
  if (kod === 0) return "☀️";

  if ([1, 2, 3].includes(kod)) return "⛅";
  if ([45, 48].includes(kod)) return "🌫️";

  if ([51, 53, 55, 56, 57].includes(kod)) {
    return "🌦️";
  }

  if ([61, 63, 65, 66, 67].includes(kod)) {
    return "🌧️";
  }

  if ([71, 73, 75, 77].includes(kod)) {
    return "❄️";
  }

  if ([80, 81, 82].includes(kod)) {
    return "🌦️";
  }

  if ([85, 86].includes(kod)) {
    return "🌨️";
  }

  if ([95, 96, 99].includes(kod)) {
    return "⛈️";
  }

  return "🌡️";
}

/* =========================================
   6. VÄDERIKONER – DAG OCH NATT
========================================= */

function dagEllerNattIkon(kod, arDag) {
  return arDag ? vaderIkon(kod) : "🌙";
}

/* =========================================
   7. HÄMTA VÄDER FÖR EN STAD
========================================= */

async function hamtaStad(stad) {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${stad.lat}` +
    `&longitude=${stad.lon}` +
    "&current=temperature_2m,wind_speed_10m,weather_code,is_day";

  const svar = await fetch(url);

  if (!svar.ok) {
    throw new Error("Kunde inte hämta vädret.");
  }

  const data = await svar.json();

  if (!data.current) {
    throw new Error("Väderdata saknas.");
  }

  return {
    id: `${stad.lat},${stad.lon}`,
    namn: stad.namn,
    flagga: stad.flagga || "🌍",
    lat: stad.lat,
    lon: stad.lon,

    temperatur: data.current.temperature_2m,
    vind: data.current.wind_speed_10m,
    kod: data.current.weather_code,

    // Open-Meteo: 1 = dag, 0 = natt
    arDag: data.current.is_day === 1,
  };
}

/* =========================================
   8. LOCALSTORAGE – LÄS SPARADE STÄDER
========================================= */

function lasSparadeStader() {
  try {
    const sparat = localStorage.getItem("minaStader");

    if (sparat === null) {
      return null;
    }

    const lista = JSON.parse(sparat);

    if (!Array.isArray(lista)) {
      return null;
    }

    return lista.filter(
      (stad) =>
        stad &&
        typeof stad.namn === "string" &&
        Number.isFinite(stad.lat) &&
        Number.isFinite(stad.lon)
    );
  } catch (error) {
    console.error(
      "Kunde inte läsa sparade städer:",
      error
    );

    return null;
  }
}

/* =========================================
   9. LOCALSTORAGE – SPARA STÄDER
========================================= */

function sparaStader(lista) {
  try {
    const staderAttSpara = lista.map((stad) => ({
      namn: stad.namn,
      lat: stad.lat,
      lon: stad.lon,
      flagga: stad.flagga,
    }));

    localStorage.setItem(
      "minaStader",
      JSON.stringify(staderAttSpara)
    );
  } catch (error) {
    console.error(
      "Kunde inte spara städer:",
      error
    );
  }
}

/* =========================================
   10. VÄDERKOMPONENT
========================================= */

function Vader({ sprak = "sv" }) {
  const text = oversattningar[sprak] || oversattningar.sv;

  const [sparadeStader, setSparadeStader] = useState(
    () => lasSparadeStader() ?? stader
  );

  const [vader, setVader] = useState([]);

  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  const [valdStad, setValdStad] = useState("");

  const [soktext, setSoktext] = useState("");
  const [sokfel, setSokfel] = useState("");
  const [soker, setSoker] = useState(false);

  const vaderRef = useRef(vader);

  useEffect(() => {
    vaderRef.current = vader;
  }, [vader]);

  /* =====================================
     11. SPARA STÄDER NÄR LISTAN ÄNDRAS
  ===================================== */

  useEffect(() => {
    sparaStader(sparadeStader);
  }, [sparadeStader]);

  /* =====================================
     12. HÄMTA VÄDER FÖR SPARADE STÄDER
  ===================================== */

  useEffect(() => {
    let aktiv = true;

    async function hamtaVader() {
      setLaddar(true);

      if (sparadeStader.length === 0) {
        setVader([]);
        setFel("");
        setLaddar(false);
        return;
      }

      try {
        const resultat = await Promise.all(
          sparadeStader.map(hamtaStad)
        );

        if (aktiv) {
          setVader(resultat);
          setFel("");
        }
      } catch (error) {
        console.error(
          "Fel vid väderhämtning:",
          error
        );

        if (aktiv) {
          setFel(
            "Kunde inte hämta vädret just nu."
          );
        }
      } finally {
        if (aktiv) {
          setLaddar(false);
        }
      }
    }

    hamtaVader();

    return () => {
      aktiv = false;
    };
  }, [sparadeStader]);

  /* =====================================
     13. UPPDATERA VÄDRET VAR TIONDE MINUT
  ===================================== */

  useEffect(() => {
    let aktiv = true;
    let uppdaterar = false;

    async function uppdateraVader() {
      if (
        uppdaterar ||
        vaderRef.current.length === 0
      ) {
        return;
      }

      uppdaterar = true;

      try {
        const aktuellaStader = vaderRef.current;

        const resultat = await Promise.all(
          aktuellaStader.map(hamtaStad)
        );

        if (aktiv) {
          setVader((tidigare) =>
            tidigare.map((stad) => {
              const uppdaterad = resultat.find(
                (ny) => ny.id === stad.id
              );

              return uppdaterad || stad;
            })
          );
        }
      } catch (error) {
        console.error(
          "Kunde inte uppdatera vädret:",
          error
        );
      } finally {
        uppdaterar = false;
      }
    }

    const intervall = setInterval(
      uppdateraVader,
      10 * 60 * 1000
    );

    return () => {
      aktiv = false;
      clearInterval(intervall);
    };
  }, []);

  /* =====================================
     14. HÄMTA VÄDER NÄR VALD STAD ÄNDRAS
  ===================================== */

  useEffect(() => {
    if (!valdStad) return;

    let aktiv = true;

    async function hamtaValdStad() {
      const stad = vaderRef.current.find(
        (item) => item.id === valdStad
      );

      if (!stad) return;

      try {
        const uppdaterad = await hamtaStad(stad);

        if (aktiv) {
          setVader((tidigare) =>
            tidigare.map((item) =>
              item.id === uppdaterad.id
                ? uppdaterad
                : item
            )
          );
        }
      } catch (error) {
        console.error(
          "Kunde inte uppdatera vald stad:",
          error
        );
      }
    }

    hamtaValdStad();

    return () => {
      aktiv = false;
    };
  }, [valdStad]);

  /* =====================================
     15. SÖK EFTER NY STAD
  ===================================== */

  async function sokStad(e) {
    e.preventDefault();
    const namn = soktext.trim();

    if (!namn || soker) {
      return;
    }

    setSokfel("");
    setSoker(true);

    try {
      const geoUrl =
        "https://geocoding-api.open-meteo.com/v1/search" +
        `?name=${encodeURIComponent(namn)}` +
        "&count=1&language=sv&format=json";

      const geoSvar = await fetch(geoUrl);

      if (!geoSvar.ok) {
        throw new Error(
          "Kunde inte söka efter staden."
        );
      }

      const geoData = await geoSvar.json();

      if (!geoData.results?.length) {
        setSokfel(text.hittasInte);
        return;
      }

      const stad = geoData.results[0];

      const nyStad = {
        namn: stad.name,
        lat: stad.latitude,
        lon: stad.longitude,
        flagga: landsFlagga(stad.country_code),
      };

      const nyId = `${nyStad.lat},${nyStad.lon}`;

      const finnsRedan = sparadeStader.some(
        (item) =>
          `${item.lat},${item.lon}` === nyId
      );

      if (finnsRedan) {
        setSokfel(text.redanFinns);
        return;
      }

      // Kontrollera att vädret går att hämta
      await hamtaStad(nyStad);

      setSparadeStader((tidigare) => [
        ...tidigare,
        nyStad,
      ]);

      setSoktext("");
      setValdStad("");
    } catch (error) {
      console.error(
        "Fel vid sökning:",
        error
      );

      setSokfel(text.sokFel);
    } finally {
      setSoker(false);
    }
  }

  /* =====================================
     16. TA BORT EN STAD
  ===================================== */

  function taBortStad(id) {
    setSparadeStader((tidigare) =>
      tidigare.filter(
        (stad) => `${stad.lat},${stad.lon}` !== id
      )
    );

    setVader((tidigare) =>
      tidigare.filter(
        (stad) => stad.id !== id
      )
    );

    if (valdStad === id) {
      setValdStad("");
    }
  }

  /* =====================================
     17. VISA VÄDERSEKTIONEN
  ===================================== */

  return (
    <section className="vader">

      {/* RUBRIK */}
      <h2>{text.rubrik}</h2>

      {/* STADSMENY */}
      <div className="vader-stadsmeny">
        <label
          htmlFor="vald-stad"
          className="vader-dold-etikett"
        >
          {text.valjStad}
        </label>

        <select
          id="vald-stad"
          value={valdStad}
          onChange={(e) =>
            setValdStad(e.target.value)
          }
        >
          <option value="">
            {text.valjStad}
          </option>

          {vader.map((stad) => (
            <option
              key={stad.id}
              value={stad.id}
            >
              {oversattStadsnamn(stad.namn, sprak)}
            </option>
          ))}
        </select>
      </div>

      {/* SÖKFÄLT */}
      <form
        className="vader-sok"
        onSubmit={sokStad}
      >
        <input
          type="text"
          placeholder={text.sokStad}
          value={soktext}
          onChange={(e) =>
            setSoktext(e.target.value)
          }
          aria-label={text.sokStad}
        />

        <button
          type="submit"
          disabled={soker}
        >
          {soker ? text.soker : text.sok}
        </button>
      </form>

      {/* FELMEDDELANDEN */}
      {sokfel && (
        <p className="vader-fel" role="alert">
          {sokfel}
        </p>
      )}

      {laddar && (
        <p>{text.laddar}</p>
      )}

      {fel && (
        <p className="vader-fel" role="alert">
          {text.vaderFel}
        </p>
      )}

      {/* VÄDERKORT */}
  <div className="vader-kort-container">

        {vader
          .filter(
            (stad) =>
              !valdStad || stad.id === valdStad
          )
          .map((stad) => (
            <div
              className="vader-kort"
              key={stad.id}
              data-stad={stad.namn}
            >

              {/* TA BORT-KNAPP */}
              <TaBortKnapp
                namn={oversattStadsnamn(stad.namn, sprak)}
                onRemove={() =>
                  taBortStad(stad.id)
                }
              />

              {/* FLAGGA OCH STADSNAMN */}
              <div className="vader-kort-rubrik">
                <span className="vader-flagga">
                  {stad.flagga}
                </span>

                <h3>
                  {oversattStadsnamn(stad.namn, sprak)}
                </h3>
              </div>

              {/* VÄDERIKON OCH TEMPERATUR */}
              <div className="vader-kort-info">

                <div className="vader-temperatur-rad">

                  <span className="vader-ikon">
                    {dagEllerNattIkon(
                      stad.kod,
                      stad.arDag
                    )}
                  </span>

                  <div className="vader-temperatur-text">

                    <p className="temperatur">
                      {grader(
                        stad.temperatur.toFixed(1)
                      )}
                    </p>

                    <p className="temperatur-beskrivning">
                      {oversattTemperatur(
                        stad.temperatur,
                        sprak
                      )}
                    </p>

                  </div>
                </div>

                {/* VÄDERMEDDELANDE */}
                <p className="vader-meddelande">
                  ☀️ {text.skont}
                </p>

                {/* TEMPERATURSTATUS */}
                {arExtremTemperatur(
                  stad.temperatur
                ) ? (
                  <p className="vader-varning">
                    ⚠️ {text.extremt}
                  </p>
                ) : (
                  <p className="vader-normal">
                    <span className="svart-bock">
                      ✓
                    </span>
                    {" "}{text.normalt}
                  </p>
                )}

              </div>

              {/* VINDHASTIGHET */}
              <p className="vader-vind">
                {text.vind}: {stad.vind} km/h
              </p>

            </div>
          ))}
      </div>

      {/* INGA STÄDER */}
      {!laddar && vader.length === 0 && (
        <p>{text.ingaStader}</p>
      )}

    </section>
  );
}

export default Vader;
