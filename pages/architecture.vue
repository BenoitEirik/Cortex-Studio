<template>
<main>
  <div class="pt-[var(--var-header-height)] w-screen flex flex-col items-center bg-gray-900">
    <section class="p-4 max-w-7xl w-full flex gap-4 items-end">
      <button @click.prevent="router.go(-1)" class=" flex gap-4 items-end">
        <Icon name="i-iconoir-arrow-left" color="white" size="1.5rem" />
        <span class="text-white">Retour</span>
      </button>
    </section>

    <section class="p-4 max-w-7xl w-full flex flex-col gap-8 items-center">
      <video src="http://www.cortexstudio.fr/assets/video/bande_demo.mp4" preload="none" controls autoplay loop muted
        class="max-w-full border-4 border-gray-800 rounded-2xl"></video>
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

const router = useRouter()
</script>
