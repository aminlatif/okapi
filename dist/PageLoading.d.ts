declare class PageLoading {
    private documentImages?;
    private pageLoadingWrapper?;
    private pageLoadingPercent?;
    private totalImagesCount;
    private loadedImagesCount;
    private totalItemsCount;
    constructor();
    initLoading: () => void;
    initPageElements: () => void;
    displayFormattedPercent: () => void;
    getFormattedPercent: () => string;
    calculatePercent: () => number;
    imageLoaded: () => void;
    loadingFinished: () => void;
}
declare const _default: PageLoading;
export default _default;
