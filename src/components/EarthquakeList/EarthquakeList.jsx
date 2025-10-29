import styles from "./EarthquakeList.module.css";
import { formatDate } from "../../utils/formatDate";

function EarthquakeList({ earthquakes = [], onSelect, selectedEq }) {
  return (
    <div className={styles.listContainer}>
      <h2><span>Recent Earthquakes</span> <span>(Past 24 Hours)</span></h2>

      {/* 🟡 Empty state check */}
      {earthquakes.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No earthquakes found for the selected region.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {earthquakes.map((eq) => {
            const isActive = selectedEq && selectedEq.id === eq.id;
            const className = [styles.item, isActive ? styles.active : null]
              .filter(Boolean)
              .join(" ");

            return (
              <li
                key={eq.id}
                className={className}
                onClick={() => onSelect(eq)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onSelect(eq);
                }}
              >
                <div className={styles.row}>
                  <span className={styles.mag}>
                    M {eq.properties.mag ?? "-"}
                  </span>
                  <span className={styles.place}>{eq.properties.place}</span>
                </div>
                <div className={styles.time}>
                  {formatDate(eq.properties.time)}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default EarthquakeList;
