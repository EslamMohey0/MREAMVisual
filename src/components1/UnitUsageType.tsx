// "use client";

// import UnitPieChart from "./UnitPieChart";
// import LegendItem from "./LegendItem";

// interface UnitUsageTypeProps {
//   data: { label: string; value: number; color: string }[];
// }

// const UnitUsageType = ({ data }: UnitUsageTypeProps) => {
//   const chartData = data.map((item) => ({
//     name: item.label,
//     value: item.value,
//     label: item.label,
//   }));

//   return (
//     <div className="bg-primary p-4 rounded-xl border border-secondary col-span-1">
//       <div className="bg-black p-4 rounded-xl flex items-center gap-5">
//         <div className="flex justify-center w-50 h-80">
//           <UnitPieChart data={data} />
//         </div>
//         <div className="flex-1 space-y-3">
//           {chartData.map((item, index) => (
//             <LegendItem
//               key={item.name}
//               color={index === 0 ? "#10B981" : index === 1 ? "#3B82F6" : "#F59E0B"}
//               label={item.label}
//               value={item.value}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnitUsageType;
