import * as THREE from "three";

export default class Camera {
  constructor() {
    this.instance = new THREE.PerspectiveCamera(
      70,
      options.width,
      options.height,
      0.01,
      10
    );
    this.instance.position.z = 1;
  }
}
