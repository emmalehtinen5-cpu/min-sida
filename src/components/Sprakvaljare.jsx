
import "./Sprakvaljare.css";
import { useState } from "react";

function Sprakvaljare({ setSprak }) {
  const [visaFlaggor, setVisaFlaggor] = useState(true);

  return (
    <div className="sprakvaljare">
      <div className="sprakvaljare-symboler">

        {/* KLICKBAR JORDGLOB */}
        <button
          type="button"
          className="sprakvaljare-glob"
          aria-label="Visa eller dölj språkval"
          aria-expanded={visaFlaggor}
          onClick={() => setVisaFlaggor(!visaFlaggor)}
        >
          <svg
            viewBox="0 0 100 100"
            width="35"
            height="35"
            style={{ transform: "translateY(14px) scale(2.2)" }}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* YTTRE CIRKEL */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#171717"
              strokeWidth="3"
            />

            {/* LÄNGDGRADER */}
            <ellipse
              cx="50"
              cy="50"
              rx="22"
              ry="46"
              stroke="#171717"
              strokeWidth="2.5"
            />

            <path
              d="M50 4V96"
              stroke="#171717"
              strokeWidth="2.5"
            />

            {/* BREDDGRADER */}
            <path
              d="M4 50H96"
              stroke="#171717"
              strokeWidth="2.5"
            />

            <path
              d="M12 27 Q50 40 88 27"
              stroke="#171717"
              strokeWidth="2.5"
            />

            <path
              d="M12 73 Q50 60 88 73"
              stroke="#171717"
              strokeWidth="2.5"
            />
          </svg>
        </button>

        {/* TRE KLICKBARA FLAGGOR */}
        {visaFlaggor && (
          <div className="sprakvaljare-flaggor">

            <button
              type="button"
              className="sprakvaljare-flagga"
              aria-label="Byt till svenska"
               onClick={() => setSprak("sv")}
            >
              🇸🇪
            </button>

            <button
              type="button"
              className="sprakvaljare-flagga"
              aria-label="Switch to English"
              onClick={() => setSprak("en")}
            >
              🇬🇧
            </button>

            <button
              type="button"
              className="sprakvaljare-flagga"
              aria-label="Vaihda suomeksi"
                onClick={() => setSprak("fi")}
            >
              🇫🇮
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Sprakvaljare;
