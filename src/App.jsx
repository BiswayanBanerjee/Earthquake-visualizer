import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import Header from "./components/Header/Header";
import MapView from "./components/MapView/MapView";
import EarthquakeList from "./components/EarthquakeList/EarthquakeList";
import Loader from "./components/Loader/Loader";
import { USGS_API } from "./utils/constants";
import { getContinent } from "./utils/getContinent";

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedEq, setSelectedEq] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(USGS_API);
        const data = await res.json();
        const enriched = data.features.map((eq) => {
          const [lon, lat] = eq.geometry.coordinates;
          return { ...eq, continent: getContinent(lat, lon) };
        });
        setEarthquakes(enriched);
      } catch {
        setError("Failed to fetch earthquake data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredEarthquakes =
    selectedContinent === "All"
      ? earthquakes
      : earthquakes.filter((eq) => eq.continent === selectedContinent);

  if (loading) return <Loader />;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.container}>
      <Header
        selectedContinent={selectedContinent}
        onContinentChange={setSelectedContinent}
      />
      <MapView
        earthquakes={filteredEarthquakes}
        selectedEq={selectedEq}
        selectedContinent={selectedContinent}
      />
      <EarthquakeList
        earthquakes={filteredEarthquakes}
        onSelect={setSelectedEq}
        selectedEq={selectedEq}
      />
    </div>
  );
}

export default App;
