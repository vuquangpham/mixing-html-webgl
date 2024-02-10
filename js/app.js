import * as THREE from "three";
import Objects from "./objects";
import Renderer from "./renderer";
import Sizes from "./sizes";
import Camera from "./camera";

export default class Sketch {
  constructor(options) {
    console.log(options);
    this.elapsedTime = 0;

    // initial variables
    this.sizes = new Sizes(options.width, options.height);

    this.scene = new THREE.Scene();
    this.camera = new Camera(this.sizes.width, this.sizes.height);
    this.renderer = new Renderer(null, this.sizes);

    this.objects = new Objects();

    this.render();
  }

  render(time) {
    this.elapsedTime = time / 1000;

    // recall
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch({
  width: window.innerWidth,
  height: window.innerHeight,
});
