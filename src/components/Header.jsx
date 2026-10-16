import './Header.css';
function Header({ namn, titel }) {
  return (
    <header className="header">
      <h1>
        <span>{namn}</span>
      </h1>
      <p className="header-titel">
        {titel.split(/\s+/).map((ord) => (
          <span className="header-titel-ord" key={ord}>{ord}</span>
        ))}
      </p>
    </header>
  );
}

export default Header;