import { LitElement, html, css } from "lit-element";

class MyCard extends LitElement {
  static get styles() {
    return css`
      :host {
        .directory__wrapper--card {
          width: 210px;
          height: 16rem;
          border: #ff7900 solid 5px;
          background-color: #ffffff;
          margin: 1.5rem 0.7rem;
          padding: 1.5rem 0;
          text-align: center;
          border-radius: 1rem;
        }

        .main__directory--link {
          text-decoration: none;
        }

        .card__wrapper {
          width: 150px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .card__icon {
          font-size: 5.5rem;
          padding: 0 0 1rem;
          color: #ff7900;
        }

        .card__title {
          color: #212121;
          padding-bottom: 0.75rem;
          font-size: 24px;
        }

        .card__description {
          color: #575756;
        }
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String }
    };
  }

  render() {
    return html`
      <article class="directory__wrapper--card">
        <a
          class="main__directory--link"
          target="blank"
          href="http://kairosnav.westeurope.cloudapp.azure.com:8081/Account/Principal.aspx"
        >
          <div class="card__wrapper">
            <div class="card__icon">
              <i class="far fa-clock"></i>
            </div>
            <h3 class="card__title">
              ${this.title}
            </h3>
            <p class="card__description">
              ${this.subtitle}
            </p>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define("my-card", MyCard);
