import powerbi from "powerbi-visuals-api";
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import "./style/global.css";
import "./style/global.less";
export declare class Visual implements IVisual {
    private target;
    private root;
    private host;
    private viewport;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private pickColor;
    destroy(): void;
}
