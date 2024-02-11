export default class Sizes {
  constructor(experience) {
    this.experience = experience;
    this.container = this.experience.container;

    // get the size
    this.setSize();
  }

  setSize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
  }

  resize() {
    this.setSize();
  }
}
