// src/utils/getContinent.js
export const CONTINENT_RANGES = [
  {
    name: "North America",
    latMin: 5,
    latMax: 83,
    lonMin: -168,
    lonMax: -52,
    bounds: [
      [5, -168],
      [83, -52],
    ],
  },
  {
    name: "South America",
    latMin: -60,
    latMax: 15,
    lonMin: -93,
    lonMax: -34,
    bounds: [
      [-60, -93],
      [15, -34],
    ],
  },
  {
    name: "Europe",
    latMin: 36,
    latMax: 71,
    lonMin: -25,
    lonMax: 45,
    bounds: [
      [36, -25],
      [71, 45],
    ],
  },
  {
    name: "Africa",
    latMin: -35,
    latMax: 37,
    lonMin: -20,
    lonMax: 55,
    bounds: [
      [-35, -20],
      [37, 55],
    ],
  },
  {
    name: "Asia",
    latMin: 5,
    latMax: 80,
    lonMin: 45,
    lonMax: 180,
    bounds: [
      [5, 45],
      [80, 180],
    ],
  },
  {
    name: "Oceania",
    latMin: -50,
    latMax: 0,
    lonMin: 110,
    lonMax: 180,
    bounds: [
      [-50, 110],
      [0, 180],
    ],
  },
];

export const getContinent = (lat, lon) => {
  for (const c of CONTINENT_RANGES) {
    if (
      lat >= c.latMin &&
      lat <= c.latMax &&
      lon >= c.lonMin &&
      lon <= c.lonMax
    ) {
      return c.name;
    }
  }
  return "Other";
};

// helper to get bounding box by name
export const getContinentBounds = (continentName) => {
  const match = CONTINENT_RANGES.find((c) => c.name === continentName);
  return match ? match.bounds : null;
};
