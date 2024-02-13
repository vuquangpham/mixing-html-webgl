uniform float uTime;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // custom position
  modelPosition.y += sin(modelPosition.x * 5. + uTime) * sin(modelPosition.z * 4. + uTime) * .15;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}