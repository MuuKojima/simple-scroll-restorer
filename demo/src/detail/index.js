import {html, render} from 'lit-html';
import BasePage from '../page'

export default class DetailPage extends BasePage {
  /**
   * Get page name
   */
  static get is() {
    return 'detail-page';
  }


  async onBeforeEnter(location) {
    this.id = location.params.id;
  }

  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * Attach
   */
  connectedCallback() {
    this.draw();
  }

  /**
   * Ready
   */
  ready() {
    router.init();
  }

  /**
   * Draw
   */
  draw() {
    render(
      html`
        <h1>Detail Page</h1>
        <div>page id ${this.id}</div>
      `,
      this
    );
  }
}

// Register customElement
!window.customElements.get(DetailPage.is) && window.customElements.define(DetailPage.is, DetailPage);
