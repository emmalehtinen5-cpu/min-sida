
/* =========================================
   VÄRLDSKLOCKOR – STUDIO92
========================================= */

import { useEffect, useState } from "react";

import helsingborgBild from "../assets/karnan.jpeg";
import moskvaBild from "../assets/moskva.jpeg";
import washingtonBild from "../assets/wash.jpeg";
import pekingBild from "../assets/peking.png";
import santiagoBild from "../assets/santiago.png";
import sydneyBild from "../assets/sydney.png";

/* =========================================
   STÄDER
========================================= */

const stader = [
  {
    namn: "HELSINGBORG",
    bild: helsingborgBild,
    alt: "Kärnan i Helsingborg",
    tidszon: "Europe/Stockholm",
  },
  {
  namn: "WASHINGTON",
  bild: washingtonBild,
  alt: "Kapitolium i Washington",
  tidszon: "America/New_York",
},
{
  namn: "MOSKVA",
  bild: moskvaBild,
  alt: "Vasilijkatedralen i Moskva",
  tidszon: "Europe/Moscow",
},
    {
    namn: "PEKING",
    bild: pekingBild,
    alt: "Stadsbild från Peking",
    tidszon: "Asia/Shanghai",
  },
  {
    namn: "SANTIAGO",
    bild: santiagoBild,
    alt: "Stadsbild från Santiago i Chile",
    tidszon: "America/Santiago",
  },
  {
    namn: "SYDNEY",
    bild: sydneyBild,
    alt: "Stadsbild från Sydney",
    tidszon: "Australia/Sydney",
  },
];

/* =========================================
   HUVUDKOMPONENT
========================================= */

function Varldsklockor() {
  const [aktuellTid, setAktuellTid] = useState(new Date());

  /* UPPDATERA TID VARJE SEKUND */

  useEffect(() => {
    const timer = setInterval(() => {
      setAktuellTid(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="github-varldstid">

      <div className="github-varldstid-bilder">

        {stader.map((stad) => (
          <div
            className="github-stad"
            key={stad.namn}
          >

            {/* STADSBILD */}

            <div className="github-stad-bildram">
              <img
                src={stad.bild}
                alt={stad.alt}
                className={`github-stad-bild ${
                stad.namn === "PEKING"
            ? "bild-peking"
            : stad.namn === "SANTIAGO"
                ? "bild-santiago"
             : ""
                }`}
              />
            </div>

            {/* STADSNAMN OCH TID */}

            <div className="github-stad-info">

              <p className="github-stad-namn">
                {stad.namn}
              </p>

              <p className="github-stad-tid">
                {aktuellTid.toLocaleTimeString("sv-SE", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hourCycle: "h23",
                  timeZone: stad.tidszon,
                })}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Varldsklockor;
