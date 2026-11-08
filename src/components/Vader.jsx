
/* =========================================
   VADER.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState, useEffect, useRef } from "react";
import "./Vader.css";
import TaBortKnapp from "./TaBortKnapp";

import {
  grader,
  temperaturText,
  arExtremTemperatur,
} from "../utils/text";

import { stader } from "../data/stader";

/* =========================================
   1. OMVANDLA LANDSKOD TILL FLAGGA
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
   2. VÄDERIKONER – DAGTID
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
   3. VÄDERIKONER – DAG OCH NATT
========================================= */

function dagEllerNattIkon(kod, arDag) {
  return arDag ? vaderIkon(kod) : "🌙";
}

/* =========================================
   4. HÄMTA VÄDER FÖR EN STAD
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
   5. LOCALSTORAGE – LÄS SPARADE STÄDER
========================================= */

// Vi sparar endast stadens uppgifter.
// Temperatur och vind hämtas på nytt från API:et.

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
   6. LOCALSTORAGE – SPARA STÄDER
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
   7. VÄDERKOMPONENT
========================================= */

function Vader() {
  // Städer som ska visas och sparas
  const [sparadeStader, setSparadeStader] = useState(
    () => lasSparadeStader() ?? stader
  );

  // Aktuellt väder
  const [vader, setVader] = useState([]);

  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  // Vald stad i stadsmenyn
  const [valdStad, setValdStad] = useState("");

  // Sökfält
  const [soktext, setSoktext] = useState("");
  const [sokfel, setSokfel] = useState("");
  const [soker, setSoker] = useState(false);

  // Håller reda på senaste väderlistan
  const vaderRef = useRef(vader);

  useEffect(() => {
    vaderRef.current = vader;
  }, [vader]);

  /* =====================================
     8. SPARA STÄDER NÄR LISTAN ÄNDRAS
  ===================================== */

  useEffect(() => {
    sparaStader(sparadeStader);
  }, [sparadeStader]);

  /* =====================================
     9. HÄMTA VÄDER FÖR SPARADE STÄDER
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
     10. UPPDATERA VÄDRET VAR TIONDE MINUT
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
     11. HÄMTA VÄDER NÄR VALD STAD ÄNDRAS
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
     12. SÖK EFTER NY STAD
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
        setSokfel("Staden kunde inte hittas.");
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
        setSokfel(
          "Staden finns redan i listan."
        );
        return;
      }

      // Kontrollera att vädret går att hämta
      await hamtaStad(nyStad);

      // Uppdatera listan – useEffect hämtar vädret
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

      setSokfel(
        "Kunde inte hämta staden. Försök igen."
      );
    } finally {
      setSoker(false);
    }
  }

  /* =====================================
     13. TA BORT EN STAD
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

    // Visa alla kvarvarande städer
    // om den valda staden tas bort
    if (valdStad === id) {
      setValdStad("");
    }
  }

  /* =====================================
     14. VISA VÄDERSEKTIONEN
  ===================================== */

  return (
    <section className="vader">

      {/* RUBRIK */}
      <h2>Vädret just nu:</h2>

      {/* STADSMENY */}
      <div className="vader-stadsmeny">
        <label htmlFor="vald-stad" className="vader-dold-etikett">
          Välj stad:
        </label>

        <select
          id="vald-stad"
          value={valdStad}
          onChange={(e) =>
            setValdStad(e.target.value)
          }
        >
          <option value="">
            Välj stad...
          </option>

          {vader.map((stad) => (
            <option
              key={stad.id}
              value={stad.id}
            >
              {stad.namn}
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
          placeholder="Sök efter stad..."
          value={soktext}
          onChange={(e) =>
            setSoktext(e.target.value)
          }
          aria-label="Sök efter stad"
        />

        <button
          type="submit"
          disabled={soker}
        >
          {soker ? "Söker..." : "Sök"}
        </button>
      </form>

      {/* FELMEDDELANDEN */}
      {sokfel && (
        <p className="vader-fel" role="alert">
          {sokfel}
        </p>
      )}

      {laddar && (
        <p>Hämtar väder...</p>
      )}

      {fel && (
        <p className="vader-fel" role="alert">
          {fel}
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
                namn={stad.namn}
                onRemove={() =>
                  taBortStad(stad.id)
                }
              />

              {/* FLAGGA OCH STADSNAMN */}
              <div className="vader-kort-rubrik">
                <span className="vader-flagga">
                  {stad.flagga}
                </span>

                <h3>{stad.namn}</h3>
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
                      {temperaturText(
                        stad.temperatur
                      )}
                    </p>

                  </div>
                </div>

                {/* SKÖNT VÄDER */}
                <p className="vader-meddelande">
                  ☀️ Skönt väder!
                </p>

                {/* TEMPERATURSTATUS */}
                {arExtremTemperatur(
                  stad.temperatur
                ) ? (
                  <p className="vader-varning">
                    ⚠️ Extrem temperatur!
                  </p>
                ) : (
                  <p className="vader-normal">
                    <span className="svart-bock">
                      ✓
                    </span>
                    {" "}Normal temperatur
                  </p>
                )}

              </div>

              {/* VINDHASTIGHET */}
              <p className="vader-vind">
                VIND: {stad.vind} km/h
              </p>

            </div>
          ))}
      </div>

      {/* INGA STÄDER */}
      {!laddar && vader.length === 0 && (
        <p>
          Inga städer visas.
          Sök efter en stad!
        </p>
      )}

    </section>
  );
}

export default Vader;
