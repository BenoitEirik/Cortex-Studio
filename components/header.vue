<template>
<div class="absolute z-10 w-screen flex justify-center">
  <nav ref="headerRef" class="max-w-7xl w-full h-[var(--var-header-height)] p-6 flex justify-between items-center">
    <NuxtLink to="/">
      <NuxtImg id="logo" width="200px" src="logo.png" />
    </NuxtLink>
    <ul class="px-4 py-2 flex justify-end gap-4 text-2xl text-white font-['ClashDisplay-Bold']">
      <li>
        <NuxtLink to="#notre-travail" class="font-bold">Notre travail</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#nos-services" class="font-bold">Nos services</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#le-studio" class="font-bold">Le studio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#contactez-nous" class="font-bold">Contactez-nous</NuxtLink>
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