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

  // Define specific colors for each category
  const colors = ['#10B981', '#F5C730', '#3B82F6', '#6B7280'];
  
  const chartData = data.map((item, index) => ({
    name: item.key,
    value: item.value,
    color: colors[index % colors.length],
    label: item.key,
  }));

  // Calculate total for percentage calculations
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const handleMouseEnter = (data: any, index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="bg-primary p-4 rounded-xl border border-secondary">
      <div className="bg-black p-4 rounded-xl">
        {/* Circular Chart */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  cornerRadius={40}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={hoveredIndex === index ? "#F5C730" : entry.color}
                      stroke="none"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          {chartData.map((item, index) => (
            <div key={item.name} className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      backgroundColor:
                        hoveredIndex === index ? "#F5C730" : item.color,
                    }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                  >
                    <Building className="text-white w-4 h-4" />
                  </div>
                  <div
                    className={`${
                      hoveredIndex === index
                        ? "text-[#F5C730]"
                        : "text-white"
                    } text-sm font-medium`}>
                    {item.label}
                  </div>
                </div>
                <div
                  className={`${
                    hoveredIndex === index ? "text-[#F5C730]" : "text-white"
                  } text-sm font-medium`}>
                  {total.toLocaleString()} / {item.value.toLocaleString()}
                </div>
              </div>
              <div className="flex-1 bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${(item.value / total) * 100}%`,
                    backgroundColor:
                      hoveredIndex === index ? "#F5C730" : item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
