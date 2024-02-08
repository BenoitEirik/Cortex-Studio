<template>
<header class="fixed top-0 h-0 z-10 max-w-full w-screen flex justify-center">
  <div class="absolute left-4 right-4 flex flex-col items-center" @pointerover="closeMenu()">
    <div class="h-2 w-full" @pointerover="closeMenu()" />
    <nav ref="headerRef"
      class="max-w-7xl w-full max-h-[var(--var-header-height)] flex justify-between items-center sm:rounded-3xl rounded-2xl"
      :style="{ 'background': scrolling ? 'rgba(17, 24, 39, 80%)' : 'none' }" :class="{ 'backdrop-blur': scrolling }" @pointerover.stop="">
      <div class="grow self-stretch pl-6 py-4 flex items-center rounded-l-3xl" @pointerover="closeMenu()">
        <NuxtLink to="/">
          <img id="logo_header" width="200px" src="/images/logo.webp" alt="Cortex Studio logo" />
        </NuxtLink>
      </div>
      <ul
        class="shrink-0 pr-6 hidden lg:flex justify-end gap-4 text-2xl text-white font-['ClashDisplay-Bold'] rounded-r-3xl">
        <li class="py-6">
          <NuxtLink to="/#notre-travail" class="font-bold" @pointerover="launchMenu('#notre-travail')"
            @click="closeMenu()">Notre travail</NuxtLink>
        </li>
        <li class="py-6">
          <NuxtLink to="/#nos-services" class="font-bold" @pointerover="launchMenu('#nos-services')"
            @click="closeMenu()">Nos services</NuxtLink>
        </li>
        <li class="py-6">
          <NuxtLink to="/#le-studio" class="font-bold" @pointerover="launchMenu('#le-studio')" @click="closeMenu()">Le
            studio</NuxtLink>
        </li>
        <li class="py-6">
          <NuxtLink to="/#contactez-nous" class="font-bold" @pointerover="closeMenu()">Contactez-nous</NuxtLink>
        </li>
        <li class="py-6">
          <div class="cursor-pointer" title="Accès partenaire">
            <Icon name="i-iconoir-log-in" size="1.5rem" />
          </div>
        </li>
      </ul>
      <div
        class="mx-4 my-4 px-4 py-2 lg:hidden flex justify-center items-center bg-[var(--var-color-bg)] border-2 border-gray-800 rounded-3xl cursor-pointer rounded-r-3xl"
        @click="launchMenu('#')">
        <Icon name="i-iconoir-menu" size="1.5rem" />
      </div>
    </nav>
  </div>

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

  // @ts-ignore
  navMenuRef.value.toggle(depthIndex, true)
}

function closeMenu() {
  if (navMenuRef.value === null) return

  // @ts-ignore
  navMenuRef.value.toggle('', false)
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

  ul li svg {
    filter: drop-shadow(0 0 1px black);
  }
}
</style>