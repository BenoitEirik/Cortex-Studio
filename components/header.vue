<template>
<header class="sticky top-0 h-0 z-10 w-screen flex justify-center">
  <nav ref="headerRef"
    class="absolute xl:top-2 top-0 max-w-7xl w-full max-h-[var(--var-header-height)] px-6 py-4 flex justify-between items-center xl:rounded-3xl rounded-b-3xl"
    :style="{ 'background': scrolling ? 'rgba(17, 24, 39, 80%)' : 'none' }">
    <NuxtLink to="/">
      <NuxtImg id="logo" width="200px" src="logo.png" alt="Cortex Studio logo" />
    </NuxtLink>
    <ul class="px-4 py-2 flex justify-end gap-4 text-2xl text-white font-['ClashDisplay-Bold']">
      <li @pointerover="popUpFromLink(0)" @click="closeFromClick()">
        <NuxtLink to="#notre-travail" class="font-bold">Notre travail</NuxtLink>
      </li>
      <li @pointerover="popUpFromLink(1)" @click="closeFromClick()">
        <NuxtLink to="#nos-services" class="font-bold">Nos services</NuxtLink>
      </li>
      <li @pointerover="popUpFromLink(2)" @click="closeFromClick()">
        <NuxtLink to="#le-studio" class="font-bold">Le studio</NuxtLink>
      </li>
      <li @pointerover="popUpFromLink(3)" @click="closeFromClick()">
        <NuxtLink to="#contactez-nous" class="font-bold">Contactez-nous</NuxtLink>
      </li>
    </ul>
  </nav>

  <div ref="subMenu1Ref" @pointerleave="closeFromBox(0)" class="hidden absolute top-[var(--var-header-height)] p-4">
    <div class="p-8 bg-[var(--var-color-bg)] rounded-3xl flex flex-col gap-8 border-2 border-gray-800">
      <a href="#showreel" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Showreel</h3>
          <ul class="pl-4 list-disc">
            <li>Capturer</li>
            <li>Améliorer</li>
            <li>Mélanger</li>
            <li>Connecter</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/showreel.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#jobs" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Métiers</h3>
          <ul class="pl-4 list-disc">
            <li>Spécialiste du contenu</li>
            <li>Producteur de films</li>
            <li>Révélateur visuel</li>
            <li>Orchestrateur sonore</li>
            <li>Diffuseur médias</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/metiers.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#experimentations" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Expérimentations</h3>
          <ul class="pl-4 list-disc">
            <li>Captation insolite</li>
            <li>Révélation optique</li>
            <li>SFX/VFX</li>
            <li>Maquettes de contenus</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/references.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#offers" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Offres</h3>
          <ul class="pl-4 list-disc">
            <li>Conseil &amp; accompagnement</li>
            <li>Prise en charge exécutive</li>
            <li>Communication par les contenus</li>
            <li><strong>Cortex Studio</strong> : atout pour les marques</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/offers.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>
    </div>
  </div>

  <div ref="subMenu2Ref" @pointerleave="closeFromBox(1)"
    class="hidden absolute top-[var(--var-header-height)] p-4">
    <div class="p-8 bg-[var(--var-color-bg)] rounded-3xl flex flex-col gap-8 border-2 border-gray-800">
      <a href="#strategy" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Stratégie</h3>
          <ul class="pl-4 list-disc">
            <li>Analyse de compétitivité</li>
            <li>Développement personnalisé</li>
            <li>Analyse web</li>
            <li>Référencement</li>
            <li>Planification de projet</li>
            <li>Stratégie de réseaux sociaux</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/strategie.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#creation" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Création</h3>
          <ul class="pl-4 list-disc">
            <li>Stage design</li>
            <li>Graphic design</li>
            <li>Motion design</li>
            <li>Sound design</li>
            <li>Interaction design</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/design.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#production" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Production</h3>
          <ul class="pl-4 list-disc">
            <li>solution complète</li>
            <li>déploiement scènique</li>
            <li>mise en scène</li>
            <li>captation image et son</li>
            <li>matérialiser les idées</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/prod.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#technology" class="flex gap-8" @click="closeFromClick()">
        <header class="basis-2/3 ">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Technologie</h3>
          <ul class="pl-4 list-disc">
            <li>UHD workflow</li>
            <li>génération de signal</li>
            <li>traitement des sources</li>
            <li>conformations aux supports </li>
            <li>diffusion cross-media</li>
          </ul>
        </header>
        <div class="basis-1/3 shrink-0">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/techno.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>
    </div>
  </div>

  <div ref="subMenu3Ref" @pointerleave="closeFromBox(2)" class="hidden absolute top-[var(--var-header-height)] p-4">
    <div class="p-8 max-w-[600px] bg-[var(--var-color-bg)] rounded-3xl flex flex-col gap-8 border-2 border-gray-800">
      <a href="#vision" class="flex justify-evenly gap-8" @click="closeFromClick()">
        <header class="basis-1/2">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Vision</h3>
          <p>
            Approche par les contenus
            l'expertise de la production
            au service de la creation
          </p>
        </header>
        <div class="basis-1/2">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/vision.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#model" class="flex gap-8 justify-evenly" @click="closeFromClick()">
        <header class="basis-1/2">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Modèle</h3>
          <ul class="pl-4 list-disc">
            <li>.prod</li>
            <li>.post</li>
            <li>.rec</li>
            <li>.link</li>
            <li>.content</li>
          </ul>
        </header>
        <div class="basis-1/2">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/model.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#references" class="flex gap-8 justify-evenly" @click="closeFromClick()">
        <header class="basis-1/2">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Références</h3>
          <ul class="pl-4 list-disc">
            <li>Luxe</li>
            <li>Grands comptes</li>
            <li>Corporate</li>
            <li>Institutionnel</li>
            <li>Artistique</li>
          </ul>
        </header>
        <div class="basis-1/2">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/references.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>

      <a href="#historical" class="flex gap-8 justify-evenly" @click="closeFromClick()">
        <header class="basis-1/2">
          <h3 class="text-gray-900 text-2xl font-['ClashDisplay-Bold']">Historique</h3>
          <ul class="pl-4 list-disc">
            <li>Naissance</li>
            <li>Mise en place</li>
            <li>Structuration</li>
            <li>Fonction du réseau</li>
            <li>Déploiement des talents</li>
          </ul>
        </header>
        <div class="basis-1/2">
          <video src="http://www.cortexstudio.fr/assets/video/stickers/origin.mp4" width="200px" autoplay loop
            muted></video>
        </div>
      </a>
    </div>
  </div>
</header>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '@/stores/global'

const globalStore = useGlobalStore()

const { y } = useWindowScroll()

const scrolling = computed(() => {
  if (y.value > window.innerHeight * 0.8) {
    return true
  } else {
    return false
  }
})

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
  #logo {
    filter: drop-shadow(0 0 1px black);
  }

  ul li {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
}
</style>