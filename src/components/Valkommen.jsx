function Valkommen({ showIntro = true, showSkills = true }) {
  return (
    <>
     {showIntro && (
    <div className="merit-kolumner" id="om-mig">
  <article className="merit-grupp merit-introduktion">
    <ul className="merit-programlista">
      <li>Med en bred erfarenhet av internationell kundservice, administration, koordinering och evenemangsverksamhet kombinerar jag struktur, 
      kommunikation och problemlösning med ett öga för detaljer. 
      Jag trivs i sammanhang där människor, idéer och organisation möts och där jag får bidra med både analytiskt tänkande och kreativitet.</li>
  
          </ul>
          </article>
          
          <p>Nyfiken på vem jag är 
          </p>
          <p>och vad jag kan bidra med?
            ↩
            </p>
          </div> 
      )}
      {showSkills && (
        <div className="merit-grupper">
            <article className="merit-grupp merit-adobe">
              <p><strong>Adobe</strong></p>
              <ul className="merit-programlista">
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>Photoshop</li>
              </ul>
            </article>
            <article className="merit-grupp merit-digitalisering">
              <p><strong>Digital</strong></p>
              <ul className="merit-programlista">
                <li>3DMax</li>
                <li>3D-render</li>
                <li>ArcGIS</li>
                <li>AutoCAD</li>
                <li>SketchUp</li>
              </ul>
            </article>
            <article className="merit-grupp merit-office">
              <p><strong>Office</strong></p>
              <ul className="merit-programlista">
                <li>Excel</li>
                <li>PowerPoint</li>
                <li>Word</li>
              </ul>
            </article>
            <article className="merit-grupp merit-sprak">
              <p><strong>Språk</strong></p>
              <ul className="merit-programlista">
                <li>Danska</li>
                <li>Engelska</li>
                <li>Norska</li>
                <li>Spanska</li>
                <li>Svenska</li>
              </ul>
            </article>
            <article className="merit-grupp merit-ovrigt">
              <p><strong>Övrigt</strong></p>
              <ul className="merit-programlista">
                <li>B-körkort</li>
              </ul>
            </article>
        </div>
      )}
    </>
  );
}

export default Valkommen;
