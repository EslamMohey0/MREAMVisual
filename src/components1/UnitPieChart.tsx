// "use client";

// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
// import { useState } from "react";
// import CustomTooltip from "./CustomTooltip";

// interface UnitPieChartProps {
//   data: { label: string; value: number; color: string }[];
// }

// const colors = ["#10B981", "#3B82F6", "#F59E0B"];
// const outerRadiusMap = [80, 58, 38];
// const innerRadiusMap = [73, 51, 31];

// const UnitPieChart = ({ data }: UnitPieChartProps) => {
//   const [hoveredIndex, setHoveredIndex] = useState<{ chart: number; index:number} | null>(null);

//   const chartData = data.map((item) => ({
//     name: item.label,
//     value: item.value,
//     label: item.label,
//   }));

//   const totalSum = data.reduce((sum, item) => sum + item.value, 0);

//   const restructuredArray = data.map((item) => [
//     { ...item },
//     { key: "total", value: totalSum - item.value },
//   ]);

//   const handleMouseEnter = (chart: number, index: number) => {
//     setHoveredIndex({ chart, index });
//   };

//   const handleMouseLeave = () => setHoveredIndex(null);

//   const handleMouseEnterFactory = (chart:number) => (data:any, index:number) => handleMouseEnter(chart,index);

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <PieChart>
//         {restructuredArray.map((pieData, chartIndex) => (
//           <Pie
//             key={chartIndex}
//             data={pieData}
//             cx="50%"
//             cy="50%"
//             innerRadius={innerRadiusMap[chartIndex]}
//             outerRadius={outerRadiusMap[chartIndex]}
//             paddingAngle={2}
//             dataKey="value"
//             onMouseEnter={handleMouseEnterFactory(chartIndex+1)}
//             onMouseLeave={handleMouseLeave}
//             cornerRadius={40}
//           >
//             {chartData.map((entry, index) => (
//               <Cell
//                 key={`${chartIndex}-cell-${index}`}
//                 fill={
//                   hoveredIndex?.index === index && hoveredIndex?.chart === chartIndex + 1
//                     ? "#F5C730"
//                     : colors[chartIndex]
//                 }
//                 stroke="none"
//               />
//             ))}
//           </Pie>
//         ))}
//         <Tooltip content={<CustomTooltip />} />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default UnitPieChart;
