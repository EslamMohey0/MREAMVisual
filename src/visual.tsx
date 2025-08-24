"use strict";
import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import DataView = powerbi.DataView;
import DataViewCategorical = powerbi.DataViewCategorical;
import IVisualHost = powerbi.extensibility.IVisualHost;

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./components/ui/home/App";

import "./style/global.css";   // Tailwind layers
import "./style/global.less";  // Theme, layout, helpers

interface DataPoint {
    label: string;
    value: number;
    color: string;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private root: ReactDOM.Root;
    private host: IVisualHost;
    private viewport: { width: number; height: number };

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
        this.target.classList.add('react-visual-container');
        this.root = ReactDOM.createRoot(this.target);
        this.viewport = { width: 0, height: 0 };
    }

    public update(options: VisualUpdateOptions) {
        this.viewport = {
            width: options.viewport.width,
            height: options.viewport.height
        };

        const data: DataPoint[] = [];
        
        // Parse data according to your capabilities.json structure
        if (options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];
            const categorical: DataViewCategorical = dataView.categorical;
            
            if (categorical && categorical.categories && categorical.values) {
                const categories = categorical.categories[0];
                const values = categorical.values[0];
                
                if (categories && values) {
                    categories.values.forEach((category: any, index: number) => {
                        data.push({
                            label: String(category),
                            value: Number(values.values[index]),
                            color: this.pickColor(index)
                        });
                    });
                }
            }
        }

        // Render React App with parsed data and viewport dimensions
        this.root.render(
            React.createElement(App, { data: data })
        );
    }

    private pickColor(index: number): string {
        // Fallback to a simple color palette
        const palette = ["#4caf50", "#2196f3", "#ffc107", "#f44336", "#9c27b0"];
        return palette[index % palette.length];
    }

    public destroy(): void {
        if (this.root) {
            this.root.unmount();
        }
    }
}
