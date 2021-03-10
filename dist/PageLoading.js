import Body from './Body';
const loadingExitDuration = 500;
class PageLoading {
    constructor() {
        this.totalImagesCount = 0;
        this.loadedImagesCount = 0;
        this.totalItemsCount = 0;
        this.initLoading = () => {
            this.initPageElements();
            if (this.documentImages) {
                this.totalImagesCount = this.documentImages.length;
                if (this.totalImagesCount === 0) {
                    this.loadingFinished();
                }
                else {
                    this.totalItemsCount = this.totalImagesCount + 1;
                    Body.disableScroll();
                    for (let i = 0; i < this.totalImagesCount; i++) {
                        const imageObject = new Image();
                        imageObject.onload = this.imageLoaded;
                        imageObject.onerror = this.imageLoaded;
                        imageObject.src = this.documentImages[i].src;
                    }
                }
            }
        };
        this.initPageElements = () => {
            this.documentImages = Array.from(document.images);
            if (document.getElementById('page-loading-wrapper')) {
                this.pageLoadingWrapper = document.getElementById('page-loading-wrapper');
            }
            if (document.getElementById('page-loading-percent')) {
                this.pageLoadingPercent = document.getElementById('page-loading-percent');
            }
        };
        this.displayFormattedPercent = () => {
            if (this.pageLoadingPercent) {
                this.pageLoadingPercent.innerHTML = this.getFormattedPercent();
            }
        };
        this.getFormattedPercent = () => {
            return this.calculatePercent().toString() + '%';
        };
        this.calculatePercent = () => {
            let percent = Math.round((this.loadedImagesCount / this.totalItemsCount) * 100);
            if (percent > 100) {
                percent = 100;
            }
            return percent;
        };
        this.imageLoaded = () => {
            this.loadedImagesCount++;
            this.displayFormattedPercent();
        };
        this.loadingFinished = () => {
            this.loadedImagesCount++;
            this.displayFormattedPercent();
            if (this.pageLoadingWrapper) {
                this.pageLoadingWrapper.style.transition = 'opacity ' + loadingExitDuration + 'ms';
                this.pageLoadingWrapper.style.opacity = '0';
            }
            setTimeout(() => {
                if (this.pageLoadingWrapper) {
                    this.pageLoadingWrapper.remove();
                }
                Body.enableScroll();
            }, loadingExitDuration);
        };
        document.addEventListener('DOMContentLoaded', this.initLoading, false);
        window.addEventListener('load', this.loadingFinished);
    }
}
export default new PageLoading();
