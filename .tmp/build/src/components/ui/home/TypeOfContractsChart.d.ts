import * as React from "react";
interface ChartDataItem {
    label: string;
    value: number;
    color: string;
}
interface TypeOfContractsChartProps {
    data: ChartDataItem[];
}
export declare const TypeOfContractsChart: React.FC<TypeOfContractsChartProps>;
export {};
