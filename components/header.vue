<template>
<header class="sticky top-0 h-0 z-10 w-screen flex justify-center">
  <nav ref="headerRef"
    class="absolute xl:top-2 top-0 max-w-7xl w-full max-h-[var(--var-header-height)] px-6 py-4 flex justify-between items-center xl:rounded-3xl rounded-b-3xl"
    :style="{ 'background': scrolling ? 'rgba(17, 24, 39, 80%)' : 'none' }" :class="{ 'backdrop-blur': scrolling }">
    <NuxtLink to="/">
      <NuxtImg id="logo_header" width="200px" src="logo.png" alt="Cortex Studio logo" />
    </NuxtLink>
    <ul class="px-4 py-2 hidden lg:flex justify-end gap-4 text-2xl text-white font-['ClashDisplay-Bold']">
      <li @pointerover="launchMenu('#notre-travail')">
        <NuxtLink to="/#notre-travail" class="font-bold">Notre travail</NuxtLink>
      </li>
      <li @pointerover="launchMenu('#nos-services')">
        <NuxtLink to="/#nos-services" class="font-bold">Nos services</NuxtLink>
      </li>
      <li @pointerover="launchMenu('#le-studio')">
        <NuxtLink to="/#le-studio" class="font-bold">Le studio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#contactez-nous" class="font-bold">Contactez-nous</NuxtLink>
      </li>
    </ul>
    <div class="px-4 py-2 lg:hidden flex justify-center items-center bg-[var(--var-color-bg)] border-2 border-gray-800 rounded-3xl cursor-pointer" @click="launchMenu('#')">
      <Icon name="i-iconoir-menu" size="1.5rem" />
    </div>
  </nav>

  <NavMenu ref="navMenuRef" />
</header>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()

const { y } = useWindowScroll()

const scrolling = computed(() => {
  if (!process.client) return false
  if (y.value > window.innerHeight * 0.8) {
    return true
  } else {
    return false
  }
})

// Menu
const navMenuRef = ref(null)

function launchMenu(depthIndex: string) {
  if (navMenuRef.value === null) return

  navMenuRef.value.toggle(depthIndex)
}

const subMenu1Ref = ref<HTMLElement>()
const subMenu2Ref = ref<HTMLElement>()
const subMenu3Ref = ref<HTMLElement>()

function popUpFromLink(index: number) {
  switch (index) {
    case 0:
      if (subMenu1Ref.value !== undefined) {
        subMenu1Ref.value.style.display = 'block'
        if (subMenu2Ref.value !== undefined) subMenu2Ref.value.style.display = 'none'
        if (subMenu3Ref.value !== undefined) subMenu3Ref.value.style.display = 'none'
      }
      break;
    case 1:
      if (subMenu2Ref.value !== undefined) {
        subMenu2Ref.value.style.display = 'block'
        if (subMenu1Ref.value !== undefined) subMenu1Ref.value.style.display = 'none'
        if (subMenu3Ref.value !== undefined) subMenu3Ref.value.style.display = 'none'
      }
      break;
    case 2:
      if (subMenu3Ref.value !== undefined) {
        subMenu3Ref.value.style.display = 'block'
        if (subMenu1Ref.value !== undefined) subMenu1Ref.value.style.display = 'none'
        if (subMenu2Ref.value !== undefined) subMenu2Ref.value.style.display = 'none'
      }
      break;
    case 3:
      if (subMenu1Ref.value !== undefined) subMenu1Ref.value.style.display = 'none'
      if (subMenu2Ref.value !== undefined) subMenu2Ref.value.style.display = 'none'
      if (subMenu3Ref.value !== undefined) subMenu3Ref.value.style.display = 'none'
      break;
  }
}

function closeFromBox(index: number) {
  switch (index) {
    case 0:
      if (subMenu1Ref.value !== undefined) {
        subMenu1Ref.value.style.display = 'none'
      }
      break;
    case 1:
      if (subMenu2Ref.value !== undefined) {
        subMenu2Ref.value.style.display = 'none'
      }
      break;
    case 2:
      if (subMenu3Ref.value !== undefined) {
        subMenu3Ref.value.style.display = 'none'
      }
      break;
  }
}

function closeFromClick() {
  if (subMenu1Ref.value !== undefined) {
    subMenu1Ref.value.style.display = 'none'
  }
  if (subMenu2Ref.value !== undefined) {
    subMenu2Ref.value.style.display = 'none'
  }
  if (subMenu3Ref.value !== undefined) {
    subMenu3Ref.value.style.display = 'none'
  }
}

const headerRef = ref<HTMLElement>()
onMounted(() => {
  globalStore.setHeaderHeight(headerRef?.value?.offsetHeight || 0)
})
</script>

<style lang="scss" scoped>
nav {
  #logo_header {
    filter: drop-shadow(0 0 1px black);
  }

  ul li {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
}
</style>