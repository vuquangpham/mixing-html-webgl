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
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,

      uniforms: {},
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);
  }
}
