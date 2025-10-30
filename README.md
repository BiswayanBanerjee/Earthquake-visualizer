# 🌍 QuakeScope – Global Earthquake Visualizer

QuakeScope is an interactive web application that visualizes **real-time earthquake data** from the **USGS Earthquake API** on an interactive world map using **React Leaflet**.  
Users can explore global earthquake activity, filter results by continent, and view earthquake details directly on the map.

---

## 🚀 Live Demo

👉 [View on Render](https://quakescope.onrender.com)

## 💻 Source Code

👉 [View on GitHub](https://github.com/BiswayanBanerjee/Earthquake-visualizer)

---

## 🧭 Features

- 🌐 **Live Earthquake Data:** Fetches real-time data from the USGS Earthquake API.
- 🗺️ **Interactive Map:** Visualizes earthquakes using dynamic markers on a Leaflet map.
- 🧩 **Continent Filter:** Filter earthquakes by continent (Asia, Africa, Europe, etc.) with automatic zoom.
- 🎯 **Popup & Zoom Interaction:** Clicking a list item zooms to its map location and opens a popup.
- 🪄 **Active State Highlighting:** Selected earthquake in list is highlighted.
- 📭 **Empty State Handling:** Displays a friendly message when no earthquakes are found for the selected region.
- ⚙️ **Error Boundaries:** Catches and handles rendering errors gracefully.
- 💅 **Responsive UI:** Works seamlessly across mobile and desktop.
- ☀️ **Clean Styling:** Built with CSS Modules and plain CSS (MUI optionally used for minimal UI polish).

---

## 🧰 Tech Stack

| Layer                  | Technology                                                                                                             |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | React (Vite)                                                                                                           |
| **Map Library**        | React Leaflet + OpenStreetMap                                                                                          |
| **Styling**            | CSS Modules + Plain CSS                                                                                                |
| **UI Components**      | MUI (for optional icons and layout)                                                                                    |
| **API Source**         | [USGS Earthquake Feed – Past Day (GeoJSON)](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson) |
| **Deployment**         | Render Free Tier                                                                                                       |
| **Version Control**    | Git + GitHub                                                                                                           |

---

## 📂 Folder Structure

src/
├── components/
│ ├── MapView/ # Renders map & markers
│ ├── EarthquakeList/ # Displays earthquake list & handles selection
│ ├── Header/ # Title, filters, and controls
│ ├── Loader/ # Loading spinner
│ ├── ErrorBoundary/ # Catches render-time errors
│ └── ErrorMessage/ # (optional)
│
├── utils/
│ ├── constants.js # API URL, map center, zoom
│ ├── formatDate.js # Converts timestamp → UTC string
│ ├── getMarkerColor.js # Chooses color based on magnitude
│ └── getContinent.js # Derives continent & bounds from lat/lon
│
├── styles/
│ ├── globals.css # Global resets and font setup
│ └── App.module.css # Layout styles
│
├── App.jsx # Main app logic
└── index.js # Entry point

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/BiswayanBanerjee/Earthquake-visualizer.git
cd Earthquake-visualizer

npm install

npm run dev

npm run build

npx serve -s dist


Setting	Value

Build Command	                 npm run build
Start Command	                 npx serve -s dist
Publish Directory	             dist
Node Version	                 18.x


Key Implementation Highlights

Leaflet Integration:
Used MapContainer, TileLayer, and CircleMarker components for clean map rendering.

Marker Popups:
Popups display magnitude, location, and time (UTC).

Continent Filtering:
Derived using custom latitude/longitude boundaries (approximate global segmentation).

Automatic Fly & Popup:
Clicking an earthquake in the list smoothly zooms the map and opens its popup using useMap() and marker refs.

Error Handling:
Includes ErrorBoundary class component to catch render-time errors gracefully.


🧑‍💻 Author

Biswayan Banerjee
Full Stack Developer (Java | Node.js | React | MySQL | Prisma)
📍 Kolkata, India
Open for relocation
```
