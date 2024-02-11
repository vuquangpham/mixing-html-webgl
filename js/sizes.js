export default class Sizes {
  constructor(container) {
    this.container = container;

    this.setSize();
  }

  setSize() {
    this.width = this.container.offsetHeight;
    this.height = this.container.offsetHeight;
  }

  resize() {
    this.setSize();
  }
}
