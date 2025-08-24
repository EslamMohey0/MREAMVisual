import "../../../style/global.css";   // Tailwind layers
import "../../../style/global.less";

import * as React from "react";
import { Header } from "./Header";
import { TypeOfContractsChart } from "./TypeOfContractsChart";
import { StateOfUnityChart } from "./StateOfUnityChart";

interface AppProps {
  data: { label: string; value: number; color: string }[];
}

export const App: React.FC<AppProps> = ({ data }) => {
  // Debug: Check if data is received
  console.log('App component data:', data);
  
  // Transform data to match StateOfUnityChart interface
  const transformedData = data.map(item => ({
    key: item.label,
    value: item.value
  }));
  
  return (
    <StateOfUnityChart data={transformedData} />
    // <TypeOfContractsChart data={data} />
  );
};

