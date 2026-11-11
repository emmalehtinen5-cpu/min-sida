
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./UrbanaPlatser.css";

/* =========================================
   1. ÖVERSÄTTNINGAR
========================================= */

const oversattningar = {
  sv: {
    rubrik: "URBANA PLATSER.",
    valjStad: "VÄLJ STAD",
    helaVarlden: "Visa hela världen",
    karttext:
      "URBAN ATLAS / STUDIO92 — UTFORSKA STÄDER OCH PLATSER",
  },

  en: {
    rubrik: "URBAN PLACES.",
    valjStad: "SELECT CITY",
    helaVarlden: "Show the whole world",
    karttext:
      "URBAN ATLAS / STUDIO92 — EXPLORE CITIES AND PLACES",
  },

  fi: {
    rubrik: "KAUPUNKITILAT.",
    valjStad: "VALITSE KAUPUNKI",
    helaVarlden: "Näytä koko maailma",
    karttext:
      "URBAN ATLAS / STUDIO92 — TUTUSTU KAUPUNKEIHIN JA PAIKKOIHIN",
  },
};

/* =========================================
   2. STÄDER OCH KOORDINATER
========================================= */

const platser = [
  {
    id: "helsingborg",
    position: [56.0465, 12.6945],
    namn: {
      sv: "Helsingborg",
      en: "Helsingborg",
      fi: "Helsingborg",
    },
    beskrivning: {
      sv: "Stadsrum, arkitektur och kustlandskap.",
      en: "Urban spaces, architecture and coastal landscapes.",
      fi: "Kaupunkitiloja, arkkitehtuuria ja rannikkomaisemia.",
    },
  },
  {
    id: "malmo",
    position: [55.605, 13.0038],
    namn: {
      sv: "Malmö",
      en: "Malmö",
      fi: "Malmö",
    },
    beskrivning: {
      sv: "Hållbar stadsutveckling och modern arkitektur.",
      en: "Sustainable urban development and modern architecture.",
      fi: "Kestävää kaupunkikehitystä ja modernia arkkitehtuuria.",
    },
  },
  {
    id: "helsingfors",
    position: [60.1699, 24.9384],
    namn: {
      sv: "Helsingfors",
      en: "Helsinki",
      fi: "Helsinki",
    },
    beskrivning: {
      sv: "Nordisk arkitektur och stadsplanering.",
      en: "Nordic architecture and urban planning.",
      fi: "Pohjoismaista arkkitehtuuria ja kaupunkisuunnittelua.",
    },
  },
  {
    id: "moskva",
    position: [55.7558, 37.6173],
    namn: {
      sv: "Moskva",
      en: "Moscow",
      fi: "Moskova",
    },
    beskrivning: {
      sv: "Monumental arkitektur och historiska stadsrum.",
      en: "Monumental architecture and historic urban spaces.",
      fi: "Monumentaalista arkkitehtuuria ja historiallisia kaupunkitiloja.",
    },
  },
  {
    id: "rom",
    position: [41.9028, 12.4964],
    namn: {
      sv: "Rom",
      en: "Rome",
      fi: "Rooma",
    },
    beskrivning: {
      sv: "Antik arkitektur, piazzor och historiska stadsmiljöer.",
      en: "Ancient architecture, piazzas and historic urban environments.",
      fi: "Antiikin arkkitehtuuria, aukioita ja historiallisia kaupunkiympäristöjä.",
    },
  },
  {
    id: "berlin",
    position: [52.52, 13.405],
    namn: {
      sv: "Berlin",
      en: "Berlin",
      fi: "Berliini",
    },
    beskrivning: {
      sv: "Modern stadsutveckling och arkitektoniska kontraster.",
      en: "Modern urban development and architectural contrasts.",
      fi: "Modernia kaupunkikehitystä ja arkkitehtonisia vastakohtia.",
    },
  },
  {
    id: "peking",
    position: [39.9042, 116.4074],
    namn: {
      sv: "Peking",
      en: "Beijing",
      fi: "Peking",
    },
    beskrivning: {
      sv: "Historiska stadsstrukturer och samtida arkitektur.",
      en: "Historic urban structures and contemporary architecture.",
      fi: "Historiallisia kaupunkirakenteita ja nykyarkkitehtuuria.",
    },
  },
  {
    id: "santiago",
    position: [-33.4489, -70.6693],
    namn: {
      sv: "Santiago",
      en: "Santiago",
      fi: "Santiago",
    },
    beskrivning: {
      sv: "Urban utveckling mellan Anderna och stadens centrum.",
      en: "Urban development between the Andes and the city centre.",
      fi: "Kaupunkikehitystä Andien ja kaupungin keskustan välillä.",
    },
  },
  {
    id: "sydney",
    position: [-33.8688, 151.2093],
    namn: {
      sv: "Sydney",
      en: "Sydney",
      fi: "Sydney",
    },
    beskrivning: {
      sv: "Kustnära stadsutveckling och ikonisk arkitektur.",
      en: "Coastal urban development and iconic architecture.",
      fi: "Rannikon kaupunkikehitystä ja ikonista arkkitehtuuria.",
    },
  },
  {
    id: "washington",
    position: [38.9072, -77.0369],
    namn: {
      sv: "Washington D.C.",
      en: "Washington D.C.",
      fi: "Washington D.C.",
    },
    beskrivning: {
      sv: "Monumentala stadsaxlar, parker och klassisk arkitektur.",
      en: "Monumental urban axes, parks and classical architecture.",
      fi: "Monumentaalisia kaupunkiakseleita, puistoja ja klassista arkkitehtuuria.",
    },
  },
];

/* =========================================
   3. SALVIAGRÖNA MARKÖRER
========================================= */

const markor = L.divIcon({
  className: "urban-markor",
  html: '<span class="urban-markor-prick"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

/* =========================================
   4. FLYTTA KARTAN TILL VALD STAD
========================================= */

function FlyttaKarta({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 12, {
        animate: true,
        duration: 1.5,
      });
    } else {
      map.flyTo([20, 10], 2, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [map, position]);

  return null;
}

/* =========================================
   5. URBANA PLATSER
========================================= */

function UrbanaPlatser({ sprak = "sv" }) {
  const [valdStad, setValdStad] = useState("");

  const text = oversattningar[sprak] || oversattningar.sv;

  const aktivPlats = platser.find(
    (plats) => plats.id === valdStad
  );

  const position = aktivPlats
    ? aktivPlats.position
    : null;

  return (
    <section className="urbana-platser">

      {/* RUBRIK */}

      <div className="urbana-rubrik">
        <span className="urbana-nummer">04</span>
        <h2>{text.rubrik}</h2>
      </div>

      {/* STADSVÄLJARE */}

      <div className="urbana-stadsval">
        <label htmlFor="urban-stad">
          {text.valjStad}
        </label>

        <select
          id="urban-stad"
          value={valdStad}
          onChange={(e) => setValdStad(e.target.value)}
        >
          <option value="">
            {text.helaVarlden}
          </option>

          {platser.map((plats) => (
            <option
              key={plats.id}
              value={plats.id}
            >
              {plats.namn[sprak] || plats.namn.sv}
            </option>
          ))}
        </select>
      </div>

      {/* INTERAKTIV KARTA */}

      <div className="urbana-karta">
        <MapContainer
          center={[20, 10]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom={true}
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          {/* AUTOMATISK FÖRFLYTTNING */}

          <FlyttaKarta position={position} />

          {/* SVARTVITT KARTLAGER VIA CSS */}

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* STADSMARKÖRER */}

          {platser.map((plats) => (
            <Marker
              key={plats.id}
              position={plats.position}
              icon={markor}
            >
              <Popup>
                <strong>
                  {plats.namn[sprak] || plats.namn.sv}
                </strong>
                <p>
                  {plats.beskrivning[sprak] || plats.beskrivning.sv}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* TEXT UNDER KARTAN */}

      <p className="urbana-karttext">
        {text.karttext}
      </p>

    </section>
  );
}

export default UrbanaPlatser;
