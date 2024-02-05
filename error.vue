<template>
<div v-if="error.statusCode === 404">
  <TresCanvas window-size clear-color="#0f172a" class="animate__animated animate__zoomInDown">
    <TresPerspectiveCamera :position="[0, 0, 3]" />
    <primitive :object="scene" />
    <TresDirectionalLight :position="[0, 3, 8]" :intensity="4" />
  </TresCanvas>
</div>
</template>

<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

interface IError {
    statusCode: number
    statusMessage: string
    message: string
}

defineProps<{
    error: IError
}>()

const { scene, nodes, animations, materials } = await useGLTF('/models/404.glb', { draco: true })
</script>
