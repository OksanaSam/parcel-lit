import { LitElement, html, customElement, property, css } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map.js';
// import * as fs from 'fs';
const image = require('./new.jpg');

// @customElement('user-card')
export class UserCard extends LitElement {
  static get properties() {
    return {
      showInfo: { type: Boolean },
      name: { type: String },
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.showInfo = true;
    this.image = '';
    this.name = 'Default';
  }

  static get styles() {
    return css`
      .user-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        margin-bottom: 15px;
        border-bottom: blue 5px solid;
      }

      img {
        width: 100%;
      }

      button {
        cursor: pointer;
        background: blue;
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding: 5px 10px;
      }

      slot[name='email'] {
        color: blue;
      }
    `;
  }

  // @property({ type: String })
  // name = 'Default';

  // @property()
  // image = '';

  // @property({ type: Boolean })
  // showInfo = true;

  // infoStyle = { display: 'block' };

  handleClick() {
    this.showInfo = !this.showInfo;

    if (this.showInfo) {
      this.infoStyle = { display: 'block' };
    } else {
      this.infoStyle = { display: 'none' };
    }
  }

  render() {
    console.log('rerender');
    // const buffer = fs.readFileSync(__dirname + '/new.jpg');
    //  <img src="data:image/jpg;base64,${buffer.toString('base64')}" />;
    return html`
      <div class="user-card">
        <h1>Hello</h1>
        <img src=${image} />

        <div>
          <h3>${this.name}</h3>
          <div id="info" style=${styleMap(this.infoStyle)}>
            <slot name="email"></slot>
            <slot name="phone"></slot>
          </div>
          <button @click=${this.handleClick}>
            ${this.showInfo ? 'Hide Info' : 'Show Info'}
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
