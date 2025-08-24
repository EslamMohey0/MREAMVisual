import * as React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircularChartProps {
  values: { value: number; color: string }[];
}

export const CircularChart: React.FC<CircularChartProps> = ({ values }) => {
  // Normalize max
  const max = Math.max(...values.map(v => v.value));

  return (
    <div style={{ width: 120, height: 120, position: "relative" }}>
      {values.map((item, index) => {
        const size = 120 - index * 15; // inner rings smaller
        return (
          <div
            key={index}
            style={{
              width: size,
              height: size,
              position: "absolute",
              top: (120 - size) / 2,
              left: (120 - size) / 2,
            }}
          >
            <CircularProgressbarWithChildren
              value={(item.value / max) * 100}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: item.color,
                trailColor: "#333",
              })}
            />
          </div>
        );
      })}
    </div>
  );
};
