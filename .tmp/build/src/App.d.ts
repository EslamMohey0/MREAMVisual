import "./style/global.less";
import "./style/global.css";
import * as React from "react";
interface AppProps {
    data: {
        label: string;
        value: number;
        color: string;
    }[];
}
export declare const App: React.FC<AppProps>;
export {};
