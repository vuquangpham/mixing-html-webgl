export default class Sizes {
  constructor(experience) {
    this.experience = experience;
    this.container = this.experience.container;

    // event
    this.event = new EventEmitter();

    // get the size
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
