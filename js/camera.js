import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.sizes = this.experience.sizes;

    this.setCamera();
    this.setOrbitControls();
  }

  setCamera() {
    this.instance = new THREE.PerspectiveCamera(
      70,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.set(0, 0, 2);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(
      this.instance,
      this.experience.renderer.instance.domElement
    );
    this.controls.enableDamping = true;
  }

  updateControls() {
    if (!this.controls) return;
    this.controls.update();
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
}
