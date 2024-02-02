<template>
<main>
  <div class="pt-[var(--var-header-height)] w-screen flex flex-col items-center bg-gray-900">
    <section class="p-8 max-w-6xl w-full">
      <NuxtLink to="/">
        <Icon name="i-iconoir-arrow-left" color="white" size="2rem" />
      </NuxtLink>
    </section>

    <section class="p-4 max-w-6xl w-full flex flex-col gap-8 items-center">
      <video src="http://www.cortexstudio.fr/assets/video/bande_demo.mp4" preload="none" controls autoplay loop muted class="max-w-full"></video>
    </section>
  </div>
</main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Cortex Studio - Architecture',
  meta: [
    { name: 'description', content: 'Cortex Studio est spécialisé dans le design, le film et la production digitale. Un producteur moderne, inventif et rigoureux, expert audiovisuel. Stratège, designer de l\'image et du son, superviseur de la diffusion. Plus qu\'un studio digital, Cortex Studio est une source créative qui solutionne la production de contenus.' }
  ]
})
</script>
