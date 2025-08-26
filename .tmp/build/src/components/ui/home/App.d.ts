import "../../../style/global.css";
import "../../../style/global.less";
import * as React from "react";
interface AppProps {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
    onSliceHover?: (index: number) => void;
}
export declare const App: React.FC<AppProps>;
export {};
