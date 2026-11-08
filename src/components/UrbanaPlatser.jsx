
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
   STÄDER OCH KOORDINATER
========================================= */

const platser = [
  {
    namn: "Helsingborg",
    position: [56.0465, 12.6945],
    beskrivning: "Stadsrum, arkitektur och kustlandskap.",
  },
  {
    namn: "Malmö",
    position: [55.605, 13.0038],
    beskrivning: "Hållbar stadsutveckling och modern arkitektur.",
  },
  {
    namn: "Helsingfors",
    position: [60.1699, 24.9384],
    beskrivning: "Nordisk arkitektur och stadsplanering.",
  },
  {
    namn: "Moskva",
    position: [55.7558, 37.6173],
    beskrivning: "Monumental arkitektur och historiska stadsrum.",
  },
  {
    namn: "Rom",
    position: [41.9028, 12.4964],
    beskrivning: "Antik arkitektur, piazzor och historiska stadsmiljöer.",
  },
  {
    namn: "Berlin",
    position: [52.52, 13.405],
    beskrivning: "Modern stadsutveckling och arkitektoniska kontraster.",
  },
  {
    namn: "Peking",
    position: [39.9042, 116.4074],
    beskrivning: "Historiska stadsstrukturer och samtida arkitektur.",
  },
  {
    namn: "Santiago",
    position: [-33.4489, -70.6693],
    beskrivning: "Urban utveckling mellan Anderna och stadens centrum.",
  },
  {
    namn: "Sydney",
    position: [-33.8688, 151.2093],
    beskrivning: "Kustnära stadsutveckling och ikonisk arkitektur.",
  },
  {
    namn: "Washington D.C.",
    position: [38.9072, -77.0369],
    beskrivning: "Monumentala stadsaxlar, parker och klassisk arkitektur.",
  },
];

/* =========================================
   SALVIAGRÖNA MARKÖRER
========================================= */

const markor = L.divIcon({
  className: "urban-markor",
  html: '<span class="urban-markor-prick"></span>',
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

/* =========================================
   FLYTTA KARTAN TILL VALD STAD
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
   03 – URBANA PLATSER
========================================= */

function UrbanaPlatser() {
  const [valdStad, setValdStad] = useState("");

  const aktivPlats = platser.find(
    (plats) => plats.namn === valdStad
  );

  const position = aktivPlats
    ? aktivPlats.position
    : null;

  return (
    <section className="urbana-platser">

      {/* RUBRIK */}

      <div className="urbana-rubrik">
        <span className="urbana-nummer">04</span>
        <h2>URBANA PLATSER.</h2>
      </div>

      {/* STADSVÄLJARE */}

      <div className="urbana-stadsval">
        <label htmlFor="urban-stad">
          VÄLJ STAD
        </label>

        <select
          id="urban-stad"
          value={valdStad}
          onChange={(e) => setValdStad(e.target.value)}
        >
          <option value="">
            Visa hela världen
          </option>

          {platser.map((plats) => (
            <option
              key={plats.namn}
              value={plats.namn}
            >
              {plats.namn}
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
              key={plats.namn}
              position={plats.position}
              icon={markor}
            >
              <Popup>
                <strong>{plats.namn}</strong>
                <p>{plats.beskrivning}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* TEXT UNDER KARTAN */}

      <p className="urbana-karttext">
        URBAN ATLAS / STUDIO92 — UTFORSKA STÄDER OCH PLATSER
      </p>

    </section>
  );
}

export default UrbanaPlatser;
