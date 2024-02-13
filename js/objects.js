import * as THREE from "three";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

export default class Objects {
  constructor(experience) {
    this.experience = experience;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.instance;
    this.elapsedTime = this.experience.elapsedTime;
    this.init();
  }

  init() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,

      vertexShader,
      fragmentShader,

      uniforms: {
        uTime: { value: this.elapsedTime },
      },
    });
    const mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(mesh);
  }
}
