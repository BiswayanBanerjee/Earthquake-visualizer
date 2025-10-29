export const getMarkerColor = (magnitude) => {
  if (magnitude < 3) return "green";
  if (magnitude < 5) return "orange";
  return "red";
};
