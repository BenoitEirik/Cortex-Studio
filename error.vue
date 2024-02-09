<template>
<div v-if="error.statusCode === 404" class="relative w-screen h-screen">
  <TresCanvas window-size clear-color="#0f172a" class="animate__animated animate__zoomInDown">
    <TresPerspectiveCamera :position="[0, 0, 3]" />
    <primitive :object="scene" />
    <TresDirectionalLight :position="[0, 3, 8]" :intensity="4" />
  </TresCanvas>
  <NuxtLink to="/" class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-3 text-white border border-white rounded-md">Accueil</NuxtLink>
</div>
<div v-else>{{ error.statusCode }} : {{ error.statusMessage }}</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { useGLTF } from '@tresjs/cientos'

defineProps<{
    error: NuxtError
}>()

const { scene, nodes, animations, materials } = await useGLTF('/models/404.glb', { draco: true })
</script>
