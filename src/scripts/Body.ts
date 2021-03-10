class Body {
  toggleScroll = () => {
    if (this) {
      if (this.isScrollEnabled()) {
        this.enableScroll();
      } else {
        this.disableScroll();
      }
    }
  };

  disableScroll = () => {
    document.body.classList.add("no-scroll");
  };

  enableScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  isScrollEnabled = (): boolean => {
    return !document.body.classList.contains("no-scroll");
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  scrollToBreadcrumb = () => {
    const breadcrumbElements = document.getElementsByClassName("breadcrumb");
    if (breadcrumbElements.length > 0) {
      const breadcrumbElement = breadcrumbElements[0] as HTMLElement;
      const breadcrumbTop = breadcrumbElement.offsetTop;
      window.scrollTo(0, breadcrumbTop);
    }
  };
}

export default new Body();
