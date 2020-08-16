declare class ScrollRestoreManager {
    private options;
    private handleScroll;
    constructor();
    init(): void;
    savePostion(): void;
    getSavedPostion(): any;
    observe(options: any): void;
    unobserve(): void;
}
declare const _default: ScrollRestoreManager;
export default _default;
