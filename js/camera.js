import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.sizes = this.experience.sizes;

    // vars
    this.distanceToScene = 10;

    // set camera
    this.setCamera();
    this.setOrbitControls();
  }

  setCamera() {
    // pythagorean theorem
    const fovInRadian = Math.atan(
      (this.sizes.height * 0.5) / this.distanceToScene
    );
    const fovInDegree = (2 * (fovInRadian * 180)) / Math.PI;

    this.instance = new THREE.PerspectiveCamera(
      fovInDegree,
      this.sizes.width / this.sizes.height,
      1,
      this.distanceToScene
    );
    this.instance.position.z = distanceToScene;
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
