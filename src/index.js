const DEFAULT_INTERVAL = 100;

const debounce = (callback, interval) => {
  let timerId;
  return (...args) => {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => callback.apply(context, args), interval);
  };
};

class ScrollRestoreManager {
  constructor() {
    this.options = null;
    this.handleScroll = null;
    this.init();
  }

  init() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  savePostion() {
    const history = {
      postion: {x: window.pageXOffset, y: window.pageYOffset}
    };
    window.history.replaceState(history, null, window.location);
  }

  getSavedPostion() {
    if (!window.history || !window.history.state) {
      return;
    }
    return window.history.state.postion;
  }

  observe(options) {
    this.options = Object.assign(
      {
        interval: DEFAULT_INTERVAL
      },
      options
    );
    let isTick;
    this.handleScroll = debounce(() => {
      if (isTick) {
        return;
      }
      isTick = true;
      window.requestAnimationFrame(() => {
        this.savePostion();
        isTick = false;
      });
    }, this.options.interval);
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  unobserve() {
    !!this.handleScroll &&
      window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }
}

export default new ScrollRestoreManager();
