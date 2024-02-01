<template>
<main>
  <div class="pt-[var(--var-header-height)] w-screen flex flex-col items-center bg-gray-900">
    <section class="p-8 max-w-6xl w-full">
      <NuxtLink to="/">
        <Icon name="i-iconoir-arrow-left" color="white" size="2rem" />
      </NuxtLink>
    </section>

    <section class="p-4 max-w-6xl w-full flex flex-col gap-8 items-center">
      <video src="http://www.cortexstudio.fr/assets/video/bande_demo.mp4" controls autoplay loop muted class="max-w-full"></video>
    </section>
  </div>
</main>
</template>

<script lang="ts" setup>

</script>

<style></style>