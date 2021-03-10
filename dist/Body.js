class Body {
    constructor() {
        this.toggleScroll = () => {
            if (this) {
                if (this.isScrollEnabled()) {
                    this.enableScroll();
                }
                else {
                    this.disableScroll();
                }
            }
        };
        this.disableScroll = () => {
            document.body.classList.add('no-scroll');
        };
        this.enableScroll = () => {
            document.body.classList.remove('no-scroll');
        };
        this.isScrollEnabled = () => {
            return !document.body.classList.contains('no-scroll');
        };
        this.scrollToBreadcrumb = () => {
            const breadcrumbElements = document.getElementsByClassName("breadcrumb");
            if (breadcrumbElements.length > 0) {
                const breadcrumbElement = breadcrumbElements[0];
                const breadcrumbTop = breadcrumbElement.offsetTop;
                window.scrollTo(0, breadcrumbTop);
            }
        };
        this.scrollToTop = () => {
            window.scrollTo(0, 0);
        };
        this.scrollToBottom = () => {
            window.scrollTo(0, document.body.scrollHeight);
        };
    }
}
export default new Body();
