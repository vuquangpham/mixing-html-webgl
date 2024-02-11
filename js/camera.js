import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.width = this.experience.sizes.width;
    this.height = this.experience.sizes.height;

    console.log(this.width, this.height);
    this.setCamera();
    this.setOrbitControls();
  }

  setCamera() {
    this.instance = new THREE.PerspectiveCamera(
      70,
      this.width / this.height,
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
    this.camera.instance.aspect = this.width / this.height;
    this.camera.instance.updateProjectionMatrix();
  }
}
