"use client";
import * as React from "react";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface UnitUsageDataItem {
  key: string;
  value: number;
}

interface UnitUsageTypeProps {
  data: { label: string; value: number; color: string }[];
}

export const UnitUsageType = ({ data }: UnitUsageTypeProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<{ chart: number; index: number } | null>(null);

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

  const handleMouseEnter = (chart: number, index: number) => {
    setHoveredIndex({ chart, index });
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
    <div
      style={{
        width: '483.1778259277344px',
        height: '286.1146240234375px',
        gap: '64px',
        opacity: 1,
        borderRadius: '17.41px',
        // padding: '17.41px 17.41px 17.41px 30px ',
        background: 'var(--B-GROUND, #0D0D0D)'
      }}
    >
      <div className="flex items-center" 
        style={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          gap: '64px',
          marginLeft:'30px',
        }}
      >
        <div className="flex-1" style={{ direction: 'rtl', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {chartData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-white"
              >
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor:
                        hoveredIndex?.chart === index + 1
                          ? '#F5C730'
                          : index === 0
                            ? '#10B981'
                            : index === 1
                              ? '#3B82F6'
                              : '#F59E0B'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: 0,
                      textAlign: 'right',
                      color: '#FFFFFF'
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'Cairo, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: 0,
                    textAlign: 'right',
                    color: '#FFFFFF'
                  }}
                >
                  {item.value.toLocaleString()}
                </div>
              </div>
            ))}
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%', padding: '13px', transform: 'rotate(-0.3deg)' }}>
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
                        hoveredIndex?.index === index && hoveredIndex?.chart === 1
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
                        hoveredIndex?.index === index && hoveredIndex?.chart === 2
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
                        hoveredIndex?.index === index && hoveredIndex?.chart === 3
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
              </PieChart>
            </ResponsiveContainer>
          </div>

      </div>
    </div>
  );
};
