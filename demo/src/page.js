import ScrollRestoreManager from '../../lib';

export default class BasePage extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * After routing
   */
  async onAfterEnter() {
    this.attachScrollPostion();
  }

  /**
   * Attach scroll postion
   */
  attachScrollPostion() {
    const savedPosisiton = ScrollRestoreManager.getSavedPostion();
    if (!savedPosisiton) {
      window.scrollTo(0, 0);
      return;
    }
    setTimeout(() => window.scrollTo(savedPosisiton.x, savedPosisiton.y), 0);
  }
}
