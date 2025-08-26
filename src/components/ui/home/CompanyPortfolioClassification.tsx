"use client";

import { useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

export function CompanyPortfolioClassification({
  data,
}: {
  data: { key: string; value: number }[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to truncate long labels (shorter to decrease visible text)
  const truncateLabel = (label:string) => {
    const maxLength =  20;
    return label.length > maxLength
      ? `${label.substring(0, maxLength)}...` 
      : label;
  };

  return (
      <div>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, bottom: 30, left: 5 }}
          // margin={{ left: 0, right: 20 }}
          width={420}
          height={226}
          barCategoryGap="28px"
          style={{ 
            direction: "rtl" ,
            
          }}
        >
          <CartesianGrid horizontal={false} stroke="#444" />

          <YAxis
            dataKey="key"
            type="category"
            tickLine={false}
            tickMargin={10}
            width={165.0402491320037}
            axisLine={false}
            interval={0}
            tick={({ x, y, payload, index }) => (
              <text
                x={x}
                y={y + 5}
                textAnchor="start"
                fontSize={12}
                style={{
                  fill:
                    activeIndex === index ? "#ffffff" : "rgba(255,255,255,0.7)",
                }}
              >
                {truncateLabel(payload.value)}
                <title>{ payload.value}</title>
              </text>
            )}
          />

          <XAxis
            dataKey="value"
            type="number"
            axisLine={false}
            tickMargin={10}
            orientation="bottom"
          />

          <Bar
            dataKey="value"
            radius={[0, 10, 10, 0]}
            barSize={15}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={activeIndex === index ? "#F5C730" : "#C39A27"}
              />
            ))}
          </Bar>

          {activeIndex !== null && (
            <ReferenceLine
              x={data[activeIndex].value}
              stroke="#F5C730"
              strokeDasharray="4 4"
            />
          )}
        </BarChart>
      </div>
  );
}
