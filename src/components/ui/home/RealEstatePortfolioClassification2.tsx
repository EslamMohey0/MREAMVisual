// "use client";

// import { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceLine,
//   Cell,
// } from "recharts";

// interface RealEstatePortfolioDataItem {
//   key: string;
//   value: number;
// }

// // Define the props interface
// interface RealEstatePortfolioClassification2Props {
//   data: RealEstatePortfolioDataItem[];
//   total?: number;
// }

// // Sample data based on the chart image
// const sampleData: RealEstatePortfolioDataItem[] = [
//   { key: "اراضي مؤجرة", value: 248 },
//   { key: "اراضي مقام", value: 248 },
//   { key: "عقار مباع", value: 248 },
//   { key: "مخزن", value: 248 },
//   { key: "فيلا", value: 248 },
//   { key: "قطعة أرض", value: 248 },
//   { key: "عقار", value: 248 },
// ];

// // Function to truncate long labels
// const truncateLabel = (label:string, maxLength = 7) => {
//   return label.length > maxLength 
//     ? `${label.substring(0, maxLength)}...` 
//     : label;
// };

// export const RealEstatePortfolioClassification2 = ({
//   data = sampleData,
//   total = 10000,
// }: RealEstatePortfolioClassification2Props) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <div className="bg-primary p-4 rounded-xl border border-secondary col-span-1 flex flex-col">
//       <p className="text-white font-medium text-[18px] mb-4 bg-black p-4 rounded-xl text-center">
//         تصنيف المحفظه العقاريه
//       </p>

//       <div className="bg-black p-4 rounded-xl flex-1 flex flex-col">
//         {/* Bar Chart */}
//         <div className="w-full h-full min-h-[300px] flex-1">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               layout="horizontal"
//               margin={{ left: 0, right: 0, top: 20, bottom: 20 }}
//               barCategoryGap='28px'
//               style={{ direction: "rtl" }}>
//               <CartesianGrid
//                 vertical={false}
//                 stroke='white'
//                 strokeDasharray='3 3'
//               />
//               <YAxis
//                 dataKey='value'
//                 type='number'
//                 stroke='#aaa'
//                 orientation='right'
//                 tick={({ x, y, payload, index }) => (
//                   <text
//                     x={x}
//                     y={y + 5}
//                     textAnchor='end'
//                     fontSize={12}
//                     style={{
//                       fill:
//                         activeIndex === index
//                           ? "#ffffff"
//                           : "rgba(255,255,255,0.7)",
//                     }}
//                   >
//                     {payload.value}
//                   </text>
//                 )}
//               />
//               <XAxis
//                 dataKey="key"
//                 type="category"
//                 tickLine={false}
//                 tickMargin={15}
//                 width={250}
//                 axisLine={{ stroke: "#666", strokeWidth: 1 }}
//                 interval={0}
//                 tick={({ x, y, payload, index }) => (
//                   <g>
//                     <text
//                       x={x}
//                       y={y + 5}
//                       textAnchor="middle"
//                       fontSize={12}
//                       transform={`rotate(-45, ${x}, ${y + 5})`}
//                       style={{
//                         marginTop: "10px",
//                         fill: "#ffffff",
//                         fontWeight: "normal",
//                       }}
//                     >
//                       {truncateLabel(payload.value)}
//                       <title>{payload.value}</title>
//                     </text>
//                   </g>
//                 )}
//               />

//               <Bar
//                 dataKey="value"
//                 layout="horizontal"
//                 radius={0}
//                 barSize={15}
//                 onMouseEnter={(_, index) => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//                 label={({ payload, x, y, width, height, value }) => {
//   return <text x={x + width / 2} y={y} fill="#fff" textAnchor="middle" dy={-6} fontSize={10}>{value}</text>;
// }}
//               >
//                 {data.map((_, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={activeIndex === index ? "#F5C730" : "#C39A27"}
//                   />
//                 ))}
//               </Bar>

//               {activeIndex !== null && (
//                 <ReferenceLine
//                   x={data[activeIndex].value}
//                   stroke="#F5C730"
//                   strokeDasharray="4 4"
//                 />
//               )}
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };
