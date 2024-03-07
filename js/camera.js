import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor(experience) {
    this.experience = experience;
    this.sizes = this.experience.sizes;

    // vars
    this.distanceToScene = 1;

    // set camera
    this.setCamera();
    this.setOrbitControls();
  }

  setCamera() {
    // for complex scene with images -_-
    // pythagorean theorem
    // const fovInRadian = Math.atan(
    //   (this.sizes.height * 0.5) / this.distanceToScene
    // );
    // const fovInDegree = (2 * (fovInRadian * 180)) / Math.PI;

    // this.instance = new THREE.PerspectiveCamera(
    //   fovInDegree,
    //   this.sizes.width / this.sizes.height,
    //   0.01,
    //   this.distanceToScene
    // );
    // this.instance.position.z = this.distanceToScene;

    // for simple project
    this.instance = new THREE.PerspectiveCamera(
      75,
      this.sizes.width / this.sizes.height,
      0.01,
      100
    );
    this.instance.position.set(0, 1, 1);
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
