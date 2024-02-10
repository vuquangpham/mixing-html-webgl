import * as THREE from "three";
import Objects from "./objects";

export default class Sketch {
  constructor(options) {
    this.elapsedTime = 0;

    // initial variables
    this.objects = new Objects();

    this.render();
  }

  render(time) {
    this.elapsedTime = time / 1000;

    // recall
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch();
