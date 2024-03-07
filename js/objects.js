import * as THREE from "three";
import GUI from "lil-gui";

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
    // debug
    const gui = new GUI();

    this.geometry = new THREE.PlaneGeometry(1, 1, 64, 64);
    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      wireframe: true,

      vertexShader,
      fragmentShader,

      uniforms: {
        uTime: { value: this.elapsedTime },
        uFrequency: { value: 0.2 },
      },
    });
    const mesh = new THREE.Mesh(this.geometry, this.material);
    mesh.rotation.x = -Math.PI * 0.5;
    this.scene.add(mesh);

    // add debug
    gui
      .add(this.material.uniforms.uFrequency, "value")
      .min(0)
      .max(1)
      .step(0.1)
      .name("Frequency");
  }
}
