
import * as React from "react";

interface LegendItemProps {
  color: string;
  label: string;
  value: number;
}

export const LegendItem: React.FC<LegendItemProps> = ({ color, label, value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
      <span
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: color,
          display: "inline-block",
          marginLeft: "8px",
        }}
      />
      <span style={{ marginLeft: "4px" }}>{label}</span>
      <span style={{ marginLeft: "8px" }}>{value.toFixed(2)}</span>
    </div>
  );
};

