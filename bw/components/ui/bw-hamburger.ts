import { attachCustomElementNode } from '../../utils';

class BwHamburger extends HTMLElement {
  // --------------------------------------------------------------------------
  //  Lifecycle
  // --------------------------------------------------------------------------
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  // --------------------------------------------------------------------------
  //  Getters / Setters
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //  Render
  // --------------------------------------------------------------------------
  render() {
    let elements: HTMLElement[] = [];

    // elements = [...elements, document.createElement("div")]
    // elements = [...elements, document.createElement("div")]
    // elements = [...elements, document.createElement("div")]

    const x = document.createElement('div');
    x.textContent = 'X';
    elements = [...elements, x];

    // Attach to DOM
    attachCustomElementNode(this, elements);
  }
}

customElements.define('bw-hamburger', BwHamburger);