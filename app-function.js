import { LitElement, html } from "lit-element";
import "./src/my-card";
import "./src/alert-component";

class AppFunction extends LitElement {
  static get properties() {
    return {};
  }
  constructor() {
    super();
  }

  render() {
    return html``;
  }
}
customElements.define("app-funtion", AppFunction);
