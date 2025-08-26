import "../../../style/global.css";   // Tailwind layers
import "../../../style/global.less";

import * as React from "react";
import { Header } from "./Header";
import { TypeOfContractsChart } from "./TypeOfContractsChart";
import { StateOfUnityChart } from "./StateOfUnityChart";
import { UnitUsageType } from "./UnitUsageType";
import { CompanyPortfolioClassification } from "./CompanyPortfolioClassification";


interface AppProps {
  data: { label: string; value: number; color: string }[];
  onSliceHover?: (index: number) => void;   // <-- add callback
}

export const App: React.FC<AppProps> = ({ data, onSliceHover }) => {
  const transformedData = data.map(item => ({
    key: item.label,
    value: item.value,
  }));

  
  const unitUsageData = data.map(d => ({
    label: d.label,
    value: d.value,
    color: d.color,
  }));
  return (
    // <CompanyPortfolioClassification data={transformedData} />
    <StateOfUnityChart data={transformedData} />
    // <UnitUsageType data={unitUsageData} />
    // RealEstatePortfolioClassification2Props
  );
};

