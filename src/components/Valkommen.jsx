
/* =========================================
   VÄLKOMMEN – EMMA LEHTINEN
   INTRODUKTION OCH KOMPETENSER
========================================= */

function Valkommen({
  showIntro = true,
  showSkills = true,
}) {
  return (
    <>
      {/* =====================================
          INTRODUKTION – STARTSIDAN
      ===================================== */}

      {showIntro && (
        <div
          className="startsida-intro"
          id="om-mig"
        >
          <article className="merit-grupp merit-introduktion">
            <ul className="merit-programlista">
              <li>
                Jag kombinerar analytiskt tänkande med
                kreativitet, struktur och ett starkt intresse
                för arkitektur, design och stadsutveckling.
                Med erfarenhet av internationell kundservice,
                administration och koordinering har jag
                utvecklat en god kommunikativ förmåga och
                ett lösningsorienterat arbetssätt. Jag drivs
                av att utforska nya perspektiv, utveckla
                idéer och skapa tydliga, genomarbetade
                lösningar där människor, form och funktion
                möts.
              </li>
            </ul>
          </article>

          <blockquote className="hero-text">
            Nyfiken på mina erfarenheter, idéer och vad jag
            kan bidra med?
          </blockquote>
        </div>
      )}

      {/* =====================================
          KOMPETENSER
      ===================================== */}

      {showSkills && (
        <div className="merit-grupper">

          {/* ADOBE */}

          <article className="merit-grupp merit-adobe">
            <h3 className="kompetens-rubrik">
              <span>Adobe</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-adobe"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </article>

          {/* DIGITAL */}

          <article className="merit-grupp merit-digitalisering">
            <h3 className="kompetens-rubrik">
              <span>Digital</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-digital"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>3DMax</li>
                <li>3D-render</li>
                <li>ArcGIS</li>
                <li>AutoCAD</li>
                <li>SketchUp</li>
              </ul>
            </div>
          </article>

          {/* OFFICE */}

          <article className="merit-grupp merit-office">
            <h3 className="kompetens-rubrik">
              <span>Office</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-office"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>Excel</li>
                <li>PowerPoint</li>
                <li>Word</li>
              </ul>
            </div>
          </article>

          {/* SPRÅK */}

          <article className="merit-grupp merit-sprak">
            <h3 className="kompetens-rubrik">
              <span>Språk</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-sprak"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>Danska</li>
                <li>Engelska</li>
                <li>Norska</li>
                <li>Spanska</li>
                <li>Svenska</li>
              </ul>
            </div>
          </article>

          {/* ÖVRIGT */}

          <article className="merit-grupp merit-ovrigt">
            <h3 className="kompetens-rubrik">
              <span>Övrigt</span>
            </h3>

            <div className="kompetens-innehall">
              <div
                className="kompetens-bild kompetens-bild-ovrigt"
                aria-hidden="true"
              />

              <ul className="merit-programlista">
                <li>B-körkort</li>
              </ul>
            </div>
          </article>

        </div>
      )}
    </>
  );
}

export default Valkommen;
