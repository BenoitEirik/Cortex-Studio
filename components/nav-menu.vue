<template>
<div
  class="fixed z-50 lg:top-[var(--var-header-height)] lg:pt-0 pt-2 p-4 w-screen max-w-full lg:h-[calc(100% - var(--var-header-height))] h-screen max-h-screen justify-center items-start overflow-auto animate__animated animate__fadeIn animate__faster"
  :class="{ hidden: !display, flex: display }" @pointerover="toggle('', false)">
  <!-- depth '' -->
  <ul v-if="depthIndex === '#'" @pointerover.stop=""
    class="p-8 max-w-7xl w-full flex flex-col gap-8 items-center bg-[var(--var-color-bg)] rounded-3xl border-2 border-gray-800 font-['ClashDisplay-Bold'] text-2xl text-center">
    <li>
      <p class="font-bold cursor-pointer" @click="depthIndex = '#notre-travail'">Notre travail</p>
    </li>
    <li>
      <p class="font-bold cursor-pointer" @click="depthIndex = '#nos-services'">Nos services</p>
    </li>
    <li>
      <p class="font-bold cursor-pointer" @click="depthIndex = '#le-studio'">Le studio</p>
    </li>
    <li>
      <NuxtLink to="/#contactez-nous" class="font-bold" @click="toggle('')">Contactez-nous</NuxtLink>
    </li>
    <li>
      <button type="button" title="Accès partenaire" @click="toggle('');globalStore.showLoginForm(true)">
        <Icon name="i-iconoir-log-in" size="2rem" />
        <span class="hidden">Menu</span>
      </button>
    </li>
  </ul>

  <!-- #notre-travail -->
  <LayoutDepthItemMenu index="#notre-travail" :depth-index="depthIndex">
    <DepthItemMenu href="/#showreel" title="Showreel"
      src-video="https://cortexstudio.eu/assets/video/stickers/showreel.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Capturer</li>
          <li>Améliorer</li>
          <li>Mélanger</li>
          <li>Connecter</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#jobs" title="Métiers"
      src-video="https://cortexstudio.eu/assets/video/stickers/metiers.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Spécialiste du contenu</li>
          <li>Producteur de films</li>
          <li>Révélateur visuel</li>
          <li>Orchestrateur sonore</li>
          <li>Diffuseur médias</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#experimentations" title="Expérimentations"
      src-video="https://cortexstudio.eu/assets/video/stickers/references.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Captation insolite</li>
          <li>Révélation optique</li>
          <li>SFX/VFX</li>
          <li>Maquettes de contenus</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#offers" title="Offres"
      src-video="https://cortexstudio.eu/assets/video/stickers/offers.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Conseil &amp; accompagnement</li>
          <li>Prise en charge exécutive</li>
          <li>Communication par les contenus</li>
          <li><strong>Cortex Studio</strong> : atout pour les marques</li>
        </ul>
      </template>
    </DepthItemMenu>
  </LayoutDepthItemMenu>

  <!-- #nos-services -->
  <LayoutDepthItemMenu index="#nos-services" :depth-index="depthIndex">
    <DepthItemMenu href="/#strategy" title="Stratégie"
      src-video="https://cortexstudio.eu/assets/video/stickers/strategie.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Analyse de compétitivité</li>
          <li>Développement personnalisé</li>
          <li>Analyse web</li>
          <li>Référencement</li>
          <li>Planification de projet</li>
          <li>Stratégie de réseaux sociaux</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#creation" title="Création"
      src-video="https://cortexstudio.eu/assets/video/stickers/design.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Stage design</li>
          <li>Graphic design</li>
          <li>Motion design</li>
          <li>Sound design</li>
          <li>Interaction design</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#production" title="Production"
      src-video="https://cortexstudio.eu/assets/video/stickers/prod.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>solution complète</li>
          <li>déploiement scènique</li>
          <li>mise en scène</li>
          <li>captation image et son</li>
          <li>matérialiser les idées</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#technology" title="Technologie"
      src-video="https://cortexstudio.eu/assets/video/stickers/techno.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>UHD workflow</li>
          <li>génération de signal</li>
          <li>traitement des sources</li>
          <li>conformations aux supports </li>
          <li>diffusion cross-media</li>
        </ul>
      </template>
    </DepthItemMenu>
  </LayoutDepthItemMenu>

  <!-- #le-studio -->
  <LayoutDepthItemMenu index="#le-studio" :depth-index="depthIndex">
    <DepthItemMenu href="/#vision" title="Vision"
      src-video="https://cortexstudio.eu/assets/video/stickers/vision.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <p>
          Approche par les contenus
          l'expertise de la production
          au service de la creation
        </p>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#model" title="Modèle" src-video="https://cortexstudio.eu/assets/video/stickers/model.mp4"
      class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>.prod</li>
          <li>.post</li>
          <li>.rec</li>
          <li>.link</li>
          <li>.content</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#references" title="Références"
      src-video="https://cortexstudio.eu/assets/video/stickers/references.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Luxe</li>
          <li>Grands comptes</li>
          <li>Corporate</li>
          <li>Institutionnel</li>
          <li>Artistique</li>
        </ul>
      </template>
    </DepthItemMenu>
    <DepthItemMenu href="/#historical" title="Historique"
      src-video="https://cortexstudio.eu/assets/video/stickers/origin.mp4" class="basis-1/2" @click="toggle('')">
      <template #content>
        <ul class="pl-4 list-disc">
          <li>Naissance</li>
          <li>Mise en place</li>
          <li>Structuration</li>
          <li>Fonction du réseau</li>
          <li>Déploiement des talents</li>
        </ul>
      </template>
    </DepthItemMenu>
  </LayoutDepthItemMenu>
</div>
</template>

<script lang="ts" setup>
const display = ref<boolean>(false)
const depthIndex = ref<string>('#')

defineExpose({
  toggle
})

function toggle(index: string, show: boolean | undefined = undefined) {
  depthIndex.value = index

  if (show !== undefined) {
    display.value = show
  } else {
    display.value = !display.value
  }
}

const globalStore = useGlobalStore()
</script>

<style></style>