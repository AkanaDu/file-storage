<template>
  <div class="w-full h-full p-2">
    <div ref="container" class="wave-container w-full h-full bg-red-200"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const container = ref()
console.log(container)
onMounted(() => {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  // Create scene
  const scene = new THREE.Scene()

  // Create camera
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  // Create renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  container.value.appendChild(renderer.domElement)

  // Shader code
  const vertexShader = `
    varying vec2 vUv;
    varying float vWave;
     varying float uTime;
    void main() {
      vUv = uv;
      vec3 pos = position;
      vWave = sin(uv.x * 10.0 + uTime) * cos(uv.y * 10.0 + uTime) * 0.5;
      pos.z += vWave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `
  //   const vertexShader = `void main() {
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  // }
  // `

  const fragmentShader = `
    varying vec2 vUv;
    varying float vWave;

    void main() {
      vec3 color = vec3(0.0, 0.5, 1.0); // Water color
      gl_FragColor = vec4(color * (0.5 + 0.5 * vWave), 1.0);
    }
  `
  //   const fragmentShader = `void main() {
  //   gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0); // 纯蓝色
  // }
  // `

  // Create geometry and material for the wave
  const geometry = new THREE.PlaneGeometry(10, 10, 32, 32)
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0.0 }
    }
  })
  const plane = new THREE.Mesh(geometry, material)
  scene.add(plane)

  // Initialize OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.25
  controls.enableZoom = true

  // Animation variables
  let time = 0

  // Animation loop
  function animate(time) {
    requestAnimationFrame(animate)

    // Update wave geometry
    time += 2
    // Update shader uniform
    material.uniforms.uTime.value = time

    // Update controls
    controls.update()

    // Render scene
    renderer.render(scene, camera)
  }

  animate(time)

  // Handle resizing
  window.addEventListener('resize', () => {
    const width = container.value.clientWidth
    const height = container.value.clientHeight
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  })
})
</script>

<style lang="scss" scoped>
// .wave-container {
//   // width: 100vw;
//   // height: 100vh;
//   overflow: hidden;
// }
</style>
