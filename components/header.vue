<template>
<div class="absolute z-10 w-screen flex justify-center">
  <nav ref="headerRef" class="max-w-6xl w-full h-[80px] p-6 flex justify-between items-center">
    <NuxtLink to="/">
      <NuxtImg id="logo" width="200px" src="logo.png" />
    </NuxtLink>
    <ul>
      <li class="text-lg text-white">
        <NuxtLink to="#contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()

const headerRef = ref<HTMLElement>()
onMounted(() => {
  globalStore.setHeaderHeight(headerRef?.value?.offsetHeight || 0)
})
</script>

<style lang="scss" scoped>
nav {
  #logo {
    filter: drop-shadow(0 0 1px black);
  }

  ul li {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
}
</style>