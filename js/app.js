import * as THREE from "three";
import Objects from "./objects";
import Renderer from "./renderer";
import Sizes from "./sizes";
import Camera from "./camera";

export default class Sketch {
  constructor(options) {
    this.clock = new THREE.Clock();
    this.container = options.container;

    this.init();
    this.render();
  }

  init() {
    // initial variables
    this.sizes = new Sizes(this);

    // instance
    this.renderer = new Renderer(this);
    this.scene = new THREE.Scene();
    this.camera = new Camera(this);
    this.container.appendChild(this.renderer.instance.domElement);

    // create objects
    this.objects = new Objects(this);

    // register events
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    // size
    this.sizes.resize();

    // camera
    this.camera.resize();

    // renderer
    this.renderer.resize();
  }

  render(time) {
    // update elapsed time
    const elapsedTime = this.clock.getElapsedTime();

    // update the uniforms
    this.objects.material.uniforms.uTime.value = elapsedTime;

    // update controls
    this.camera.updateControls();

    // update renderer
    this.renderer.instance.render(this.scene, this.camera.instance);

    // recall
    window.requestAnimationFrame(this.render.bind(this));
  }
}

new Sketch({
  container: document.getElementById("container"),
});
