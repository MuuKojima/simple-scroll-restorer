declare class ScrollRestoreManager {
    private options;
    private handleScroll;
    private isTick;
    constructor();
    private init;
    savePostion(): void;
    getSavedPostion(): (() => number) | null;
    observe(): void;
    unobserve(): void;
}
declare const _default: ScrollRestoreManager;
export default _default;
