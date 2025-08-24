import * as React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{
        background: "#111",
        borderRadius: "12px",
        padding: "16px",
        color: "white",
        fontFamily: "sans-serif",
        width: "100%",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {children}
      </div>
    </div>
  );
};
