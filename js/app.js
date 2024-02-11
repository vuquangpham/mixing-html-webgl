import * as THREE from "three";
import Objects from "./objects";
import Renderer from "./renderer";
import Sizes from "./sizes";
import Camera from "./camera";

export default class Sketch {
  constructor(options) {
    this.elapsedTime = 0;
    this.container = options.container;

    this.init();
    this.render();
  }

  init() {
    // initial variables
    this.sizes = new Sizes(
      this.container.offsetWidth,
      this.container.offsetHeight
    );

    // instance
    this.renderer = new Renderer(null, this.sizes);
    this.scene = new THREE.Scene();
    this.camera = new Camera(this);
    this.container.appendChild(this.renderer.instance.domElement);

    // create objects
    this.objects = new Objects(this);

    // register events
    window.addEventListener("resize", this.resize.bind(this));
  }

  render(time) {
    // update elapsed time
    this.elapsedTime = time / 1000;

    // update controls
    this.camera.updateControls();

    // update renderer
    this.renderer.instance.render(this.scene, this.camera.instance);

    // recall
    window.requestAnimationFrame(this.render.bind(this));
  }

  resize() {
    this.sizes.width = this.container.offsetWidth;
    this.sizes.height = this.container.offsetHeight;

    // update renderer size
    this.renderer.instance.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // update camera
    this.camera.instance.aspect = this.width / this.height;
    this.camera.instance.updateProjectionMatrix();
  }
}

new Sketch({
  container: document.getElementById("container"),
});
