import {Router} from '@vaadin/router';
import {html, render} from 'lit-html';
import './index.css';
import BasePage from '../page'

export default class ListPage extends BasePage {
  /**
   * Get page name
   */
  static get is() {
    return 'list-page';
  }

  /**
   * Constructor
   */
  constructor() {
    super();
    this.list = [
      {
        id: 0,
      },
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
      {
        id: 7,
      },
      {
        id: 8,
      },
      {
        id: 9,
      },
      {
        id: 10,
      },
      {
        id: 11,
      },
      {
        id: 12,
      },
      {
        id: 13,
      },
      {
        id: 14,
      },
      {
        id: 15,
      },
      {
        id: 16,
      },
      {
        id: 17,
      },
      {
        id: 18,
      },
      {
        id: 19,
      },
      {
        id: 20,
      },
      {
        id: 21,
      },
      {
        id: 22,
      },
      {
        id: 23,
      },
      {
        id: 24,
      },
      {
        id: 25,
      },
      {
        id: 26,
      },
      {
        id: 27,
      },
      {
        id: 28,
      },
      {
        id: 29,
      },
      {
        id: 30,
      }
    ]
  }

  /**
   * Attach
   */
  connectedCallback() {
    this.draw();
  }

  /**
   * Detach
   */
  disconnectedCallback() {

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
        <h1>List Page</h1>
        <div>
          ${this.list.map((item) => html`
            <div id=${item.id} class="item" @click=${this.handlelClick}>
              ${item.id}
            </div>
              `
          )}
        </div>
      `,
      this
    );
  }

  /**
   * Click
   */
  handlelClick(event) {
    const id = event.currentTarget.id;
    Router.go(`/${id}`);
  }
}

// Register customElement
!window.customElements.get(ListPage.is) && window.customElements.define(ListPage.is, ListPage);
