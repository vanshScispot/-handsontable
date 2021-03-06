import React from 'react';
import Handsontable from 'handsontable';
import { PortalManager } from './portalManager';
import { HotTableProps, HotEditorElement } from './types';
/**
 * A Handsontable-ReactJS wrapper.
 *
 * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.
 * For example:
 *
 * ```js
 * <HotTable id="hot" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH="all" />
 *
 * // is analogous to
 * let hot = new Handsontable(document.getElementById('hot'), {
 *    data: dataObject,
 *    contextMenu: true,
 *    colHeaders: true,
 *    width: 600
 *    height: 300
 * });
 *
 * ```
 *
 * @class HotTable
 */
declare class HotTable extends React.Component<HotTableProps, {}> {
    /**
     * The `id` of the main Handsontable DOM element.
     *
     * @type {String}
     */
    id: string;
    /**
     * Reference to the Handsontable instance.
     *
     * @private
     * @type {Object}
     */
    __hotInstance: Handsontable | null;
    /**
     * Reference to the main Handsontable DOM element.
     *
     * @type {HTMLElement}
     */
    hotElementRef: HTMLElement;
    /**
     * Class name added to the component DOM element.
     *
     * @type {String}
     */
    className: string;
    /**
     * Style object passed to the component.
     *
     * @type {React.CSSProperties}
     */
    style: React.CSSProperties;
    /**
     * Array of object containing the column settings.
     *
     * @type {Array}
     */
    columnSettings: Handsontable.ColumnSettings[];
    /**
     * Component used to manage the renderer portals.
     *
     * @type {React.Component}
     */
    portalManager: PortalManager;
    /**
     * Array containing the portals cashed to be rendered in bulk after Handsontable's render cycle.
     */
    portalCacheArray: React.ReactPortal[];
    /**
     * Global editor portal cache.
     *
     * @private
     * @type {React.ReactPortal}
     */
    private globalEditorPortal;
    /**
     * The rendered cells cache.
     *
     * @private
     * @type {Map}
     */
    private renderedCellCache;
    /**
     * Editor cache.
     *
     * @private
     * @type {Map}
     */
    private editorCache;
    /**
     * Map with column indexes (or a string = 'global') as keys, and booleans as values. Each key represents a component-based editor
     * declared for the used column index, or a global one, if the key is the `global` string.
     *
     * @private
     * @type {Map}
     */
    private componentRendererColumns;
    /**
     * HotTable class constructor.
     *
     * @param {HotTableProps} props Component props.
     * @param {*} [context] Component context.
     */
    constructor(props: HotTableProps, context?: any);
    /**
     * Package version getter.
     *
     * @returns The version number of the package.
     */
    static get version(): string;
    /**
     * Getter for the property storing the Handsontable instance.
     */
    get hotInstance(): Handsontable | null;
    /**
     * Setter for the property storing the Handsontable instance.
     * @param {Handsontable} hotInstance The Handsontable instance.
     */
    set hotInstance(hotInstance: Handsontable | null);
    /**
     * Prop types to be checked at runtime.
     */
    static propTypes: object;
    /**
     * Get the rendered table cell cache.
     *
     * @returns {Map}
     */
    getRenderedCellCache(): Map<string, HTMLTableCellElement>;
    /**
     * Get the editor cache and return it.
     *
     * @returns {Map}
     */
    getEditorCache(): Map<Function, React.Component>;
    /**
     * Get the global editor portal property.
     *
     * @return {React.ReactPortal} The global editor portal.
     */
    getGlobalEditorPortal(): React.ReactPortal;
    /**
     * Set the private editor portal cache property.
     *
     * @param {React.ReactPortal} portal Global editor portal.
     */
    setGlobalEditorPortal(portal: React.ReactPortal): void;
    /**
     * Clear both the editor and the renderer cache.
     */
    clearCache(): void;
    /**
     * Get the `Document` object corresponding to the main component element.
     *
     * @returns The `Document` object used by the component.
     */
    getOwnerDocument(): Document;
    /**
     * Set the reference to the main Handsontable DOM element.
     *
     * @param {HTMLElement} element The main Handsontable DOM element.
     */
    private setHotElementRef;
    /**
     * Return a renderer wrapper function for the provided renderer component.
     *
     * @param {React.ReactElement} rendererElement React renderer component.
     * @returns {Handsontable.renderers.Base} The Handsontable rendering function.
     */
    getRendererWrapper(rendererElement: React.ReactElement): Handsontable.renderers.Base | any;
    /**
     * Create a fresh class to be used as an editor, based on the provided editor React element.
     *
     * @param {React.ReactElement} editorElement React editor component.
     * @returns {Function} A class to be passed to the Handsontable editor settings.
     */
    getEditorClass(editorElement: HotEditorElement): typeof Handsontable.editors.BaseEditor;
    /**
     * Create a class to be passed to the Handsontable's settings.
     *
     * @param {React.ReactElement} editorComponent React editor component.
     * @returns {Function} A class to be passed to the Handsontable editor settings.
     */
    makeEditorClass(editorComponent: React.Component): typeof Handsontable.editors.BaseEditor;
    /**
     * Get the renderer element for the entire HotTable instance.
     *
     * @returns {React.ReactElement} React renderer component element.
     */
    getGlobalRendererElement(): React.ReactElement;
    /**
     * Get the editor element for the entire HotTable instance.
     *
     * @param {React.ReactNode} [children] Children of the HotTable instance. Defaults to `this.props.children`.
     * @returns {React.ReactElement} React editor component element.
     */
    getGlobalEditorElement(children?: React.ReactNode): HotEditorElement | null;
    /**
     * Create the global editor portal and its destination HTML element if needed.
     *
     * @param {React.ReactNode} [children] Children of the HotTable instance. Defaults to `this.props.children`.
     */
    createGlobalEditorPortal(children?: React.ReactNode): void;
    /**
     * Create a new settings object containing the column settings and global editors and renderers.
     *
     * @returns {Handsontable.GridSettings} New global set of settings for Handsontable.
     */
    createNewGlobalSettings(): Handsontable.GridSettings;
    /**
     * Detect if `autoRowSize` or `autoColumnSize` is defined, and if so, throw an incompatibility warning.
     *
     * @param {Handsontable.GridSettings} newGlobalSettings New global settings passed as Handsontable config.
     */
    displayAutoSizeWarning(newGlobalSettings: Handsontable.GridSettings): void;
    /**
     * Sets the column settings based on information received from HotColumn.
     *
     * @param {HotTableProps} columnSettings Column settings object.
     * @param {Number} columnIndex Column index.
     */
    setHotColumnSettings(columnSettings: Handsontable.ColumnSettings, columnIndex: number): void;
    /**
     * Handsontable's `beforeViewRender` hook callback.
     */
    handsontableBeforeViewRender(): void;
    /**
     * Handsontable's `afterViewRender` hook callback.
     */
    handsontableAfterViewRender(): void;
    /**
     * Call the `updateSettings` method for the Handsontable instance.
     *
     * @param {Object} newSettings The settings object.
     */
    private updateHot;
    /**
     * Set the portal manager ref.
     *
     * @param {React.ReactComponent} pmComponent The PortalManager component.
     */
    private setPortalManagerRef;
    /**
     * Logic performed before the mounting of the component.
     */
    componentWillMount(): void;
    /**
     * Initialize Handsontable after the component has mounted.
     */
    componentDidMount(): void;
    /**
     * Logic performed before the component update.
     */
    componentWillUpdate(nextProps: Readonly<HotTableProps>, nextState: Readonly<{}>, nextContext: any): void;
    /**
     * Logic performed after the component update.
     */
    componentDidUpdate(): void;
    /**
     * Destroy the Handsontable instance when the parent component unmounts.
     */
    componentWillUnmount(): void;
    /**
     * Render the component.
     */
    render(): React.ReactElement;
}
export default HotTable;
export { HotTable };
