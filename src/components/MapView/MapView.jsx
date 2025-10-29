import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./MapView.module.css";
import { MAP_CENTER, MAP_ZOOM } from "../../utils/constants";
import { getMarkerColor } from "../../utils/getMarkerColor";
import { formatDate } from "../../utils/formatDate";
import { useEffect, useRef } from "react";
import { getContinentBounds } from "../../utils/getContinent";

function MapView({ earthquakes, selectedEq, selectedContinent }) {
  const markerRefs = useRef({});

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {earthquakes.map((eq) => {
          const [lon, lat] = eq.geometry.coordinates;
          const mag = eq.properties.mag || 0;
          return (
            <CircleMarker
              key={eq.id}
              center={[lat, lon]}
              radius={eq.id === selectedEq?.id ? 10 : 5 + mag}
              color={eq.id === selectedEq?.id ? "blue" : getMarkerColor(mag)}
              fillOpacity={0.8}
              ref={(el) => (markerRefs.current[eq.id] = el)}
            >
              <Popup>
                <strong>{eq.properties.place}</strong>
                <br />
                Magnitude: {mag}
                <br />
                Time: {formatDate(eq.properties.time)}
              </Popup>
            </CircleMarker>
          );
        })}

        <FlyToSelection
          selectedEq={selectedEq}
          selectedContinent={selectedContinent}
          markerRefs={markerRefs}
        />
      </MapContainer>
    </div>
  );
}


// helper component that reacts to selectedEq changes
function FlyToSelection({ selectedEq, selectedContinent, markerRefs }) {
  const map = useMap();

  useEffect(() => {
    if (selectedEq) {
      const [lon, lat] = selectedEq.geometry.coordinates;
      map.flyTo([lat, lon], 6, { duration: 1.5 });

      setTimeout(() => {
        const marker = markerRefs.current[selectedEq.id];
        if (marker) marker.openPopup();
      }, 1500);
    }
  }, [selectedEq, map, markerRefs]);

  useEffect(() => {
    if (selectedContinent && selectedContinent !== "All") {
      const bounds = getContinentBounds(selectedContinent);
      if (bounds) map.fitBounds(bounds, { padding: [30, 30] });
    }
    if (selectedContinent === "All") {
      map.setView([20, 0], 2); // reset to global
    }
  }, [selectedContinent, map]);

  return null;
}


export default MapView;
