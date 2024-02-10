import * as THREE from "three";

export default class Camera {
  constructor(width, height) {
    this.instance = new THREE.PerspectiveCamera(70, width, height, 0.01, 10);
    this.instance.position.z = 1;
  }
}
