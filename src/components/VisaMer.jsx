
import { useState } from "react";

function VisaMer() {
  const [visas, setVisas] = useState(false);

  return (
    <div>
      <button onClick={() => setVisas(!visas)}>
        {visas ? "Visa mindre" : "Visa mer"}
      </button>

      {visas && <p>Här är den dolda texten!</p>}
    </div>
  );
}

export default VisaMer;
