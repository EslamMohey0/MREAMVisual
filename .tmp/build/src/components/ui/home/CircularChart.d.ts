import * as React from "react";
import "react-circular-progressbar/dist/styles.css";
interface CircularChartProps {
    values: {
        value: number;
        color: string;
    }[];
}
export declare const CircularChart: React.FC<CircularChartProps>;
export {};
