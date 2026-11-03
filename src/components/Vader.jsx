
/* =========================================
   VADER.JSX – EMMA LEHTINEN
   NORDISK PORTFOLIO
========================================= */

import { useState, useEffect, useRef } from "react";
import "./Vader.css";


/* =========================================
   1. STÄDER SOM VISAS FRÅN BÖRJAN
========================================= */

const stader = [
  {
    namn: "Helsingborg",
    lat: 56.05,
    lon: 12.69,
    flagga: "🇸🇪",
  },
  {
    namn: "Moskva",
    lat: 55.75,
    lon: 37.62,
    flagga: "🇷🇺",
  },
  {
    namn: "Helsingfors",
    lat: 60.17,
    lon: 24.94,
    flagga: "🇫🇮",
  },
  {
    namn: "Madrid",
    lat: 40.42,
    lon: -3.70,
    flagga: "🇪🇸",
  },
  {
    namn: "Rom",
    lat: 41.90,
    lon: 12.50,
    flagga: "🇮🇹",
  },
];


/* =========================================
   2. OMVANDLA LANDSKOD TILL FLAGGA
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
   3. VÄDERIKONER – DAGTID
========================================= */

function vaderIkon(kod) {
  if (kod === 0) return "☀️";

  if ([1, 2, 3].includes(kod)) {
    return "⛅";
  }

  if ([45, 48].includes(kod)) {
    return "🌫️";
  }

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
   4. VÄDERIKONER – DAG OCH NATT
========================================= */

function dagEllerNattIkon(kod, arDag) {
  if (arDag) {
    return vaderIkon(kod);
  }

  return "🌙";
}


/* =========================================
   5. HÄMTA VÄDER FÖR EN STAD
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
   6. VÄDERKOMPONENT
========================================= */

function Vader() {
  const [vader, setVader] = useState([]);
  const [laddar, setLaddar] = useState(true);
  const [fel, setFel] = useState("");

  const [soktext, setSoktext] = useState("");
  const [sokfel, setSokfel] = useState("");
  const [soker, setSoker] = useState(false);

  const vaderRef = useRef(vader);

  useEffect(() => {
    vaderRef.current = vader;
  }, [vader]);


  /* =====================================
     7. HÄMTA STARTSTÄDER
  ===================================== */

  useEffect(() => {
    let aktiv = true;

    async function hamtaVader() {
      try {
        const resultat = await Promise.all(
          stader.map(hamtaStad)
        );

        if (aktiv) {
          setVader((tidigare) => {
            const befintliga = new Set(
              tidigare.map((stad) => stad.id)
            );

            return [
              ...tidigare,
              ...resultat.filter(
                (stad) => !befintliga.has(stad.id)
              ),
            ];
          });

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
  }, []);


  /* =====================================
     8. UPPDATERA VÄDRET VAR TIONDE MINUT
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
     9. SÖK EFTER NY STAD
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
        setSokfel(
          "Staden kunde inte hittas."
        );
        return;
      }

      const stad = geoData.results[0];

      const nyStad = await hamtaStad({
        namn: stad.name,
        lat: stad.latitude,
        lon: stad.longitude,
        flagga: landsFlagga(
          stad.country_code
        ),
      });

      const finnsRedan = vaderRef.current.some(
        (item) => item.id === nyStad.id
      );

      if (finnsRedan) {
        setSokfel(
          "Staden finns redan i listan."
        );
        return;
      }

      setVader((tidigare) => {
        if (
          tidigare.some(
            (item) => item.id === nyStad.id
          )
        ) {
          return tidigare;
        }

        return [...tidigare, nyStad];
      });

      setSoktext("");

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
     10. TA BORT EN STAD
  ===================================== */

  function taBortStad(id) {
    setVader((tidigare) =>
      tidigare.filter(
        (stad) => stad.id !== id
      )
    );
  }


  /* =====================================
     11. VISA VÄDERSEKTIONEN
  ===================================== */

  return (
    <section className="vader">

      {/* RUBRIK */}
      <h1>Vädret just nu:</h1>

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
        <p
          className="vader-fel"
          role="alert"
        >
          {sokfel}
        </p>
      )}

      {laddar && (
        <p>Hämtar väder...</p>
      )}

      {fel && (
        <p
          className="vader-fel"
          role="alert"
        >
          {fel}
        </p>
      )}

      {/* VÄDERKORT */}
      <div className="vader-kort-container">

        {vader.map((stad) => (
          <div
            className="vader-kort"
            key={stad.id}
          >

            {/* TA BORT-KNAPP */}
            <button
              className="ta-bort-knapp"
              type="button"
              onClick={() =>
                taBortStad(stad.id)
              }
              aria-label={`Ta bort ${stad.namn}`}
            >
              ×
            </button>

            {/* FLAGGA OCH STADSNAMN */}
            <div className="vader-kort-rubrik">

              <span className="vader-flagga">
                {stad.flagga}
              </span>

              <h3>{stad.namn}</h3>

            </div>

            {/* VÄDERIKON OCH TEMPERATUR */}
            <div className="vader-kort-info">

              <div className="vader-ikon">
                {dagEllerNattIkon(
                  stad.kod,
                  stad.arDag
                )}
              </div>

              <p className="temperatur">
                {stad.temperatur.toFixed(1)} °C
              </p>

            </div>

            {/* VINDHASTIGHET */}
            <p className="vader-vind">
              Vind: {stad.vind} km/h
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
