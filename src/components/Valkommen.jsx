function Valkommen({ showIntro = true, showSkills = true }) {
  return (
    <div className="merit-kolumner" id="om-mig">
      {showIntro && (
        <p className="merit-intro">
          Min erfarenhet omfattar internationell kundservice, boknings- och
          passagerarhantering, kassaarbete och administration, koordinering,
          logistik och presservice vid evenemang. Jag arbetar självständigt,
          strukturerat och lösningsorienterat.
        </p>
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
                <li>3D Studio Max</li>
                <li>3D-rendering</li>
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
    </div>
  );
}

export default Valkommen;
