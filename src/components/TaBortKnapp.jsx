
function TaBortKnapp({ namn, onRemove }) {
  return (
    <button
      className="ta-bort-knapp"
      type="button"
      onClick={onRemove}
      aria-label={`Ta bort ${namn}`}
    >
      ×
    </button>
  );
}

export default TaBortKnapp;
