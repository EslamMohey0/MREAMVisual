"use client";

import { useState } from "react";
import { Building } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Utils } from "../../../lib";

interface StateOfUnityDataItem {
  key: string;
  value: number;
}

// Define the props interface
interface StateOfUnityChartProps {
  data: StateOfUnityDataItem[];
}


export const StateOfUnityChart = ({
  data,
}: StateOfUnityChartProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Define specific colors for each category
  const colors = ['#10B981', '#F5C730', '#3B82F6', '#6B7280'];
  
  const chartData = data.map((item, index) => ({
    name: item.key,
    value: item.value,
    color: colors[index % colors.length],
    label: item.key,
  }));

  // Calculate total for percentage calculations (use full dataset as baseline)
  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Filtered view based on selection
  const displayedChartData = selectedIndex !== null
    ? [chartData[selectedIndex]]
    : chartData;
  const displayedListData = selectedIndex !== null
    ? [chartData[selectedIndex]]
    : chartData;

  const handleMouseEnter = (data: any, index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleSliceClick = (index: number) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      className="border border-secondary"
      style={{
        width: '355px',
        height: '475px',
        gap: '16px',
        opacity: 1,
        borderRadius: '12px',
        // padding: '16px',
        background: 'var(--B-GROUND, #0D0D0D)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'stretch',
          alignItems: "center",
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          // gap: '16px',
        }}
      >
        {/* Circular Chart */}
        <div className="flex justify-center" style={{  marginBottom: '16px' }}>
          <div style={{ position: 'relative', width: '177px', height: '177px' }}>
            <PieChart width={177} height={177}>
              <Pie
                data={displayedChartData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                cornerRadius={40}
                onClick={(_, idx) => handleSliceClick(idx as number)}
              >
                {displayedChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={hoveredIndex === index ? "#F5C730" : entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>

        <div className="space-y-4" style={{ alignItems: 'stretch', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {displayedListData.map((item, index) => {
            const percent = total > 0 ? (item.value / total) * 100 : 0;
            return (
            <div key={item.name} className="flex flex-col" onClick={() => handleSliceClick(index)} style={{ cursor: 'pointer', gap: '8px' }}>
              <div className="flex" style={{ flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start', width: '100%', gap: '8px' }}>
                {/* Totals row (left) */}
                <div className="flex" style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
                  <div
                    className={`${
                      hoveredIndex === index ? "text-[#F5C730]" : "text-white"
                    } text-sm font-medium`}
                    style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', gap: '12px', color: '#9CA3AF' }}
                  >
                    <span>{total.toLocaleString()}</span>
                    <span>/</span>
                    <span>{item.value.toLocaleString()}</span>
                  </div>
                    {/* Label + icon (right) */}
                  <div className="flex items-center" style={{ gap: '8px', justifyContent: 'flex-end' }}>
                    <div
                      className={`${
                        hoveredIndex === null
                          ? 'text-white'
                          : hoveredIndex === index
                          ? 'text-white'
                          : 'text-[#F5C730]'
                      } text-sm font-medium`}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        backgroundColor: item.color,
                        border: '2px solid rgba(255,255,255,0.85)',
                        borderRadius: '50%'
                      }}
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                    >
                      <Building className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    width: '100%',
                    backgroundColor: '#272727',
                    borderRadius: '9999px',
                    height: '8px',
                  }}
                >
                  <div
                    style={{
                      width: `${percent}%`,
                      height: '8px',
                      borderRadius: '9999px',
                      transition: 'width 300ms ease',
                      backgroundColor:
                        hoveredIndex === index ? '#F5C730' : item.color,
                    }}
                  />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
