import * as THREE from "three";

export default class Renderer {
  constructor(canvas, sizes) {
    this.instance = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvas ?? undefined,
    });
    this.instance.setSize(sizes.width, sizes.height);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.instance.setClearColor(0xeeeeee, 1);
  }
}
