import React, { ReactPortal } from 'react';
import { HotTableProps, HotColumnProps } from './types';
import Handsontable from 'handsontable';
declare class HotColumn extends React.Component<HotColumnProps, {}> {
    internalProps: string[];
    columnSettings: Handsontable.ColumnSettings;
    /**
     * Local editor portal cache.
     *
     * @private
     * @type {ReactPortal}
     */
    private localEditorPortal;
    /**
     * HotColumn class constructor.
     *
     * @param {HotColumnProps} props Component props.
     * @param {*} [context] Component context.
     */
    constructor(props: HotColumnProps, context?: any);
    /**
     * Get the local editor portal cache property.
     *
     * @return {ReactPortal} Local editor portal.
     */
    getLocalEditorPortal(): ReactPortal;
    /**
     * Set the local editor portal cache property.
     *
     * @param {ReactPortal} portal Local editor portal.
     */
    setLocalEditorPortal(portal: any): void;
    /**
     * Filter out all the internal properties and return an object with just the Handsontable-related props.
     *
     * @returns {Object}
     */
    getSettingsProps(): HotTableProps;
    /**
     * Check whether the HotColumn component contains a provided prop.
     *
     * @param {String} propName Property name.
     * @returns {Boolean}
     */
    hasProp(propName: string): boolean;
    /**
     * Get the editor element for the current column.
     *
     * @returns {React.ReactElement} React editor component element.
     */
    getLocalEditorElement(): React.ReactElement | null;
    /**
     * Create the column settings based on the data provided to the `HotColumn` component and it's child components.
     */
    createColumnSettings(): void;
    /**
     * Create the local editor portal and its destination HTML element if needed.
     *
     * @param {React.ReactNode} [children] Children of the HotTable instance. Defaults to `this.props.children`.
     */
    createLocalEditorPortal(children?: React.ReactNode): void;
    /**
     * Emit the column settings to the parent using a prop passed from the parent.
     */
    emitColumnSettings(): void;
    /**
     * Logic performed before the mounting of the HotColumn component.
     */
    componentWillMount(): void;
    /**
     * Logic performed after the mounting of the HotColumn component.
     */
    componentDidMount(): void;
    /**
     * Logic performed before the updating of the HotColumn component.
     */
    componentWillUpdate(nextProps: Readonly<HotColumnProps>, nextState: Readonly<{}>, nextContext: any): void;
    /**
     * Logic performed after the updating of the HotColumn component.
     */
    componentDidUpdate(): void;
    /**
     * Render the portals of the editors, if there are any.
     *
     * @returns {React.ReactElement}
     */
    render(): React.ReactElement;
}
export { HotColumn };
