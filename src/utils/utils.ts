// Utility function to generate random colors for items
const getRandomColor = (index: number): string => {
  const colors = [
    "#1F8E4D", // Green
    "#444444", // Gray
    "#2E71A2", // Dark Blue
    "#C39A27", // Dark Yellow
    "#FF6B6B", // Red
    "#4ECDC4", // Teal
    "#45B7D1", // Blue
    "#96CEB4", // Green
    "#FFEAA7", // Yellow
    "#DDA0DD", // Plum
    "#98D8C8", // Mint
    "#F7DC6F", // Gold
    "#BB8FCE", // Purple
    "#85C1E9", // Sky Blue
    "#F8C471", // Orange
    "#82E0AA", // Light Green
    "#F1948A", // Light Red
    "#85C1E9", // Light Blue
    "#D7BDE2", // Light Purple
  ];

  return colors[index];
};

export const Utils = {
  getRandomColor,
};
