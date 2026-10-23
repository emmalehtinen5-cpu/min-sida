
import { useState } from "react";

function Raknare() {
  const [antal, setAntal] = useState(0);

 function minska() {
    if (antal > 0) {
      setAntal(antal - 1);
    }
  }

  return (
    <div>
      <button onClick={minska}>−</button>

      <span
        style={{
          color: antal > 0 ? "navy" : "red",
          margin: "0 15px",
        }}
      >
        {antal}
      </span>

      <button onClick={() => setAntal(antal + 1)}>+</button>

      <button onClick={() => setAntal(0)}>Nollställ</button>
    </div>
  );
}

export default Raknare;