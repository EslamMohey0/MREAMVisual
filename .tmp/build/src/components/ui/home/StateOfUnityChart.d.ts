interface StateOfUnityDataItem {
    key: string;
    value: number;
}
interface StateOfUnityChartProps {
    data: StateOfUnityDataItem[];
    onSliceHover?: (index: number) => void;
}
export declare const StateOfUnityChart: ({ data, onSliceHover }: StateOfUnityChartProps) => import("react/jsx-runtime").JSX.Element;
export {};
