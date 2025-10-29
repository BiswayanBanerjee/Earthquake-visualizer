import styles from "./Header.module.css";

function Header({ selectedContinent, onContinentChange }) {
  const continents = [
    "All",
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Asia",
    "Oceania",
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <h1>🌍QuakeScope</h1>
      <p className={styles.subtitle}>Global Earthquake Visualizer</p>
      </div>

      <div className={styles.filter}>
        <label htmlFor="continent">Filter by Continent:</label>
        <select
          id="continent"
          value={selectedContinent}
          onChange={(e) => onContinentChange(e.target.value)}
        >
          {continents.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
