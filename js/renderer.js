import * as THREE from "three";

export default class Renderer {
  constructor(experience) {
    this.experience = experience;
    this.sizes = this.experience.sizes;
    this.instance = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.instance.setClearColor(0xeeeeee, 1);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
}
