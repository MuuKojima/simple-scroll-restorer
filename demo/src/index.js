import {html, render} from 'lit-html';
import router from './router';
import ScrollRestoreManager from '../../lib';

class App extends HTMLElement {
  /**
   * Get page name
   */
  static get is() {
    return 'scroll-app';
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
    ScrollRestoreManager.observe();
    this.draw();
    this.firstUpdated();
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    ScrollRestoreManager.unobserve();
  }

  /**
   * Draw
   */
  draw() {
    render(
      html`
        <main id="outlet">
          <!-- Page here -->
        </main>
      `,
      this
    );
  }

  /**
   * FirstUpdated
   */
  firstUpdated() {
    const outlet = document.getElementById('outlet');
    router.init({outlet});
  }
}

// Register customElement
!window.customElements.get(App.is) && window.customElements.define(App.is, App);
