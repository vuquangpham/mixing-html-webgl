import * as THREE from "three";

export default class Renderer {
  constructor(options) {
    this.instance = new THREE.WebGLRenderer({
      antialias: true,
      canvas: options.canvas,
    });
    this.instance.setSize(options.width, options.height);
  }
}
