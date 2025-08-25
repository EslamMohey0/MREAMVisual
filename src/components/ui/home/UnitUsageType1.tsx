"use client";
import * as React from "react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "../../../style/global.less";

interface UnitUsageDataItem {
  key: string;
  value: number;
}


interface UnitUsageTypeProps {
    data: any;
    allowInteractions: boolean;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          border: "1px solid var(--color-secondary)",
          borderRadius: "8px",
          padding: "12px",
          color: "white",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{data.label}</p>
        <p style={{ margin: "0", color: "white" }}>
          القيمة: {data.value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export const UnitUsageType = ({ data, allowInteractions }: UnitUsageTypeProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<{ chart: number; index:number} | null>(null);

  const chartData = data.map((item) => ({
    name: item.label,
    value: item.value,
    label: item.label,
  }));

  // Calculate total sum of all values
  const totalSum = data.reduce((sum, item) => sum + item.value, 0);

  // Create new structure
  const restructuredArray = data.map((item) => [
    { ...item }, // Original object
    {
      key: "total",
      value: totalSum - item.value, // Sum of all other values
    },
  ]);

  const handleMouseEnter = (chart:number, index: number) => {
    setHoveredIndex({chart,index});
  };


   const handleMouseEnter1 = (data: any, index: number) =>
     handleMouseEnter(1, index);
   const handleMouseEnter2 = (data: any, index: number) =>
     handleMouseEnter(2, index);
   const handleMouseEnter3 = (data: any, index: number) =>
     handleMouseEnter(3, index);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-primary p-4 rounded-xl border border-secondary col-span-1">
      <p className="text-white font-medium text-[18px] mb-4 bg-black p-4 rounded-xl text-center">
        نوع استخدام الوحدة
      </p>

      <div className="bg-black p-4 rounded-xl flex items-center gap-5">
        <div className="flex justify-center">
          <div className="relative w-50 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={restructuredArray?.[0]}
                  cx="50%"
                  cy="50%"
                  innerRadius={73}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave}
                  cornerRadius={40}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`outer-cell-${index}`}
                      fill={
                        hoveredIndex?.index === index && hoveredIndex?.chart===1
                          ? "#F5C730"
                          : index === 0
                          ? "#10B981"
                          : "#444444"
                      }
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Pie
                  data={restructuredArray?.[1]}
                  cx="50%"
                  cy="50%"
                  innerRadius={51}
                  outerRadius={58}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave}
                  cornerRadius={40}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`middle-cell-${index}`}
                      fill={
                        hoveredIndex?.index === index && hoveredIndex?.chart===2
                          ? "#F5C730"
                          : index === 0
                          ? "#3B82F6"
                          : "#444444"
                      }
                      stroke="none"
                    />
                  ))}
                </Pie>
                <Pie
                  data={restructuredArray?.[2]}
                  cx="50%"
                  cy="50%"
                  innerRadius={31}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave}
                  cornerRadius={40}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`inner-cell-${index}`}
                      fill={
                        hoveredIndex?.index === index && hoveredIndex?.chart===3
                          ? "#F5C730"
                          : index === 0
                          ? "#F59E0B"
                          : "#444444"
                      }
                      stroke='none'
                    />
                  ))}
                </Pie>
                {/* <Pie
                  data={[{ value: 1 }]}
                  cx="50%"
                  cy="50%"
                  innerRadius={8}
                  outerRadius={18}
                  dataKey="value"
                >
                  <Cell fill="#374151" />
                </Pie> */}
                {allowInteractions && (
                  <Tooltip content={<CustomTooltip />} />
                )}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {chartData.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    hoveredIndex?.chart===index+1
                      ? "bg-[#F5C730]"
                      : index === 0
                      ? "bg-[#10B981]"
                      : index === 1
                      ? "bg-[#3B82F6]"
                      : "bg-[#F59E0B]"
                  }`}
                ></div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <div className="text-sm">{item.value.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};