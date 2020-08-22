interface Options {
  interval: number
}
const DEFAULT_INTERVAL = 100;
const debounce = (callback: (args: any[], interval: number) => void, interval: number) => {
  let timerId: number;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(args, interval));
  };
};
class ScrollRestoreManager {
  private options: Options;
  private handleScroll: () => void;
  private isTick: boolean;
  constructor() {
    this.options = {
      interval: 0
    };
    this.isTick = false;
    this.handleScroll = debounce(() => {
      if (this.isTick) {
        return;
      }
      this.isTick = true;
      window.requestAnimationFrame(() => {
        this.savePostion();
        this.isTick = false;
      });
    }, this.options.interval);
    this.init();
  }
  private init() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }
  savePostion() {
    const history = {
      postion: {x: window.pageXOffset, y: window.pageYOffset}
    };
    window.history.replaceState(history, '', String(window.location));
  }
  getSavedPostion(): (() => number) | null {
    if (!window.history || !window.history.state) {
      return null;
    }
    return window.history.state.postion;
  }
  observe(options: Options) {
    this.options = Object.assign(
      {
        interval: DEFAULT_INTERVAL
      },
      options
    );
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }
  unobserve() {
    const options: AddEventListenerOptions = { passive: true };
    !!this.handleScroll &&
      window.removeEventListener('scroll', this.handleScroll, options);
  }
}
export default new ScrollRestoreManager();
