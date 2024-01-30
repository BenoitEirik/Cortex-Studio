<template>
<main>
  <div class="w-screen xl:h-screen flex flex-col items-center bg-gray-900">
    <section id="section_1"
      class="pt-[var(--var-header-height)] relative grow w-screen p-4 flex xl:flex-row flex-col justify-evenly items-center gap-4 text-white">
      <div
        class="xl:basis-1/3 p-4 flex flex-col gap-8 xl:items-start items-center animate__animated animate__fadeInLeft">
        <h1 class="xl:text-left text-center max-w-[600px]">
          <span class="font-['ClashDisplay-Bold'] text-6xl">Cortex Studio</span>
          <hr class="h-2 border-transparent">
          <span class="text-4xl">est spécialisé dans le design, le film et la production digitale.</span>
        </h1>
        <NuxtLink id="cta-btn" to="#notre-travail">Découvrir</NuxtLink>
      </div>
      <div id="box_video"
        class="xl:basis-2/3 relative rounded-md pb-8 bg-black border-4 border-gray-800 max-w-[800px] w-full overflow-hidden animate__animated animate__fadeIn">
        <video ref="landingVideoRef" muted :src="landingVideos[indexLandingVideo].src"
          @ended="nextLandingVideo(undefined)" @dblclick="landingVideoFullscreen" />
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 px-4 py-2 flex gap-4">
          <span v-for="(v, i) in landingVideos" :key="i"
            class="w-4 h-4 rounded-full border-4 border-gray-800 cursor-pointer" :style="'background-color:' + v.color"
            @click="nextLandingVideo(i)" />
        </div>
      </div>
    </section>
    <section class="shrink-0 max-w-full">
      <div id="logo_slider" class="py-4 max-w-7xl">
        <Swiper :modules="[SwiperAutoplay]" :loop="true" slides-per-view="auto" :speed="7000" :allow-touch-move="false"
          :autoplay="{
            delay: 1,
            disableOnInteraction: false,
          }">
          <SwiperSlide v-for="(brand, i) in brands" :key="i" class="grayscale hover:grayscale-0 transition-all">
            <NuxtImg width="100px" height="100px" :src="brand.src" alt="Client logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>

  <div class="w-screen flex flex-col items-center">
    <section id="notre-travail" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="px-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Notre travail</h2>
        <UiSubline />
      </header>

      <article id="showreel" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video ref="articleVideo1Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-1-showreel.mp4" preload="none"
            muted loop class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-end">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Showreel</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Créer des expériences digitales</h4>
          <p class="text-justify text-lg leading-8">
            <strong>Creative Studio</strong> a l'expertise pour déterminer la stratégie de contenus et la réaliser,
            procéder à la captation, au traitement du visuel, du son et à sa diffusion.
            <br>
            Des divisions articulées pour évoquer les marques (.prod.post.rec.link).
            <br>
            Creative Studio est le partenaire des projets artistiques et commerciaux.
          </p>
        </div>
      </article>

      <article id="jobs" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Métiers</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Pure player indépendant</h4>
          <p class="text-justify text-lg leading-8">
            Spécialisé dans la production digitale et audiovisuelle, <strong>Cortext Studio</strong> constitue
            un maillage de compétences pluri-disciplinaires
            qui rend possible les projets
            les plus qualitatifs et exigeants.
          </p>
          <blockquote>
            <p class="text-lg italic text-black">« De la réflexion à la diffusion, Cortex Studio déploie votre
              communication digitale. »</p>
          </blockquote>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video ref="articleVideo2Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-2-profession.mp4" preload="none"
            loop muted class="w-full" />
        </div>
      </article>

      <article id="experimentations" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video ref="articleVideo3Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-3-experiment1.mp4" preload="none"
            loop muted class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8">
          <h3 class="self-end text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Expérimentations</h3>
          <h4 class="self-end text-2xl font-['ClashDisplay-Bold']">Captures insolites</h4>
          <p class="text-justify text-lg leading-8">
            Révélations des détails invisibles d'un orage sous l'oeil d'une caméra à l'affut. Expérimenter aujourd'hui,
            c'est maitriser demain pour vos projets.
            <br>
            De nombreuses expérimentations digitales sont en cours.
            <br>
            Nous participons aux développements de la captation, du traitement sonore et visuel et des nouveaux usages
            médiatiques.
          </p>
        </div>
      </article>

      <article id="offers" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Offres</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Des offres pour les annonceurs, les agences et les producteurs
          </h4>
          <p class="text-justify text-lg leading-8">
            <strong>Cortex Studio</strong> maximise la qualité et la pertinence des contenus.
            <br>
            <strong>Cortex Studio</strong> propose des offres adaptées pour intégrer des équipes déjà opérantes, ou en
            constituer de nouvelles.
            <br>
            <strong>Cortex Studio</strong> apporte des solutions par le conseil, la prise en charge exécutive et la
            direction de projet.
            <br>
            <strong>Cortex Studio</strong> articule les compétences en parfaite confidentialité.
          </p>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video ref="articleVideo4Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-4-offers.mp4" preload="none" loop
            muted class="w-full" />
        </div>
      </article>
    </section>

    <section id="nos-services" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="px-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Nos services</h2>
        <UiSubline />
      </header>

      <article id="stategy" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video ref="articleVideo5Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-1-strategy.mp4" preload="none" loop
            muted class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="self-end text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Stratégie</h3>
          <h4 class="self-end text-2xl font-['ClashDisplay-Bold']">Correspondre à l'ère du temps</h4>
          <p class="text-justify text-lg leading-8">
            À chaque étape, <strong>Cortex Studio</strong> déploie des stratégies qui favorisent la pertinence des
            contenus.
            <br>
            Alors que la stratégie marketing va identifier un besoin de communication, la stratégie de contenu propose «
            le comment ».
            <br>
            Elle dresse la route à suivre pour s'exprimer et les processus de productions adaptées.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio propose des contenus déterminants. »</p>
            <ul class="list-disc pl-4">
              <li>analyse de compétitivité</li>
              <li>développement personnalisé</li>
              <li>analyse web</li>
              <li>référencement</li>
              <li>planification de projet</li>
              <li>stratégie de réseaux sociaux</li>
            </ul>
          </blockquote>
        </div>
      </article>

      <article id="creation" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Création</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">L'essence et la forme</h4>
          <p class="text-justify text-lg leading-8">
            Les contenus sont des « véhicules » qui portent le sens et l'apparence du projet diffusé.
            <br>
            Cerner dans le projet de communication,
            les objectifs, les thèmes et la mission
            que devront remplir les contenus
            pour en choisir le design, c'est comprendre
            la nature du projet dans son essence.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio définit les objets médias. »</p>
            <ul class="list-disc pl-4">
              <li>études de tendance</li>
              <li>design scénique</li>
              <li>design graphique</li>
              <li>design animé</li>
              <li>design sonore</li>
              <li>design d'interaction</li>
              <li>architecture d'Information</li>
            </ul>
          </blockquote>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video ref="articleVideo6Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-2-creation.mp4" preload="none" loop
            muted class="w-full" />
        </div>
      </article>

      <article id="production" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video ref="articleVideo7Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-3-production.mp4" preload="none"
            loop muted class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8">
          <h3 class="self-end text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Production</h3>
          <h4 class="self-end text-2xl font-['ClashDisplay-Bold']">De la puissance à l'acte</h4>
          <p class="text-justify text-lg leading-8">
            <strong>Cortex Studio</strong> pilote l'ensemble des moyens de production digitale.
            <br>
            La production est au centre de la dynamique de <strong>Cortex Studio</strong>. Elle nourrit la créativité et
            devient le levier qui bascule un projet en réalisation concrète diffusée.
            Nous avons circonscrit l'ensemble des solutions de production dans un modèle qui articule, élève, et
            améliore les procédés.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio est l'outil facilitateur de production digitale. »</p>
          </blockquote>
        </div>
      </article>

      <article id="technology" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Technologie</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Incubateur d'inspiration</h4>
          <p class="text-justify text-lg leading-8">
            Un maillage technologique dans un workflow au service de la créativité.
            <br>
            Premier à Paris en 2007 à introduire l'ultra haute definition, nos choix technologiques s'adaptent aux
            projets inédits.
            Le worflow <strong>Cortex Studio</strong> est 6K-RAW pour le visuel et 24bits/192khz pour l'audio.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio fait la jonction des technologies UHD. »</p>
          </blockquote>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video ref="articleVideo8Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-4-technology.mp4" preload="none"
            loop muted class="w-full" />
        </div>
      </article>
    </section>

    <section id="le-studio" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="px-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Le studio</h2>
        <UiSubline />
      </header>

      <article id="vision" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video ref="articleVideo9Ref" src="http://www.cortexstudio.fr/assets/video/menu_movies/3-studio-1-vision.mp4" preload="none" loop
            muted class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8">
          <h3 class="self-end text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Vision</h3>
          <h4 class="self-end text-2xl font-['ClashDisplay-Bold']">Expert en contenus de marques</h4>
          <p class="text-justify text-lg leading-8">
            Pour répondre aux besoins des annonceurs et des artistes CS propose une approche qui met les contenus
            audiovisuels au centre de la démarche médiatique. CS accompagne les projets en apportant l'expertise de la
            production au service de la création digitale.
            <br>
            <strong>Cortex Studio</strong> intervient sur les missions ponctuelles et les opérations de communications
            globales en connectant les talents de la publicité, du web et de l'audiovisuel.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio active la communication. »</p>
          </blockquote>
        </div>
      </article>

      <article id="model" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Modèle</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Quatre pôles d'expertises complémentaires</h4>
          <p class="text-justify text-lg leading-8">
            Le modèle <strong>Cortex Studio</strong> place les contenus au centre du processus de communication et
            apporte une solution de production pour tout support, tout écran, tout média.
            <br>
            Le modèle articule les expertises pour concevoir et réaliser des projets, vecteurs d'interactions et
            d'opinions favorables, à travers le contenu de marque.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio est la synergie des talents. »</p>
          </blockquote>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video src="" preload="none" loop muted class="w-full" />
        </div>
      </article>

      <article id="references" class="px-4 py-20 w-full flex justify-evenly gap-8 items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <NuxtImg src="http://www.cortexstudio.fr/assets/img/references.jpg" alt="references.jpg" class="w-full" />
        </div>
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8">
          <h3 class="self-end text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Références</h3>
          <h4 class="self-end text-2xl font-['ClashDisplay-Bold']">Une expérience pointue</h4>
          <p class="text-justify text-lg leading-8">
            La diversité des prestations auprès de nos clients grands comptes dans des domaines aussi variés que le
            luxe, le divertissement, et la culture, constitue la richesse de notre expérience.
            <br>
            Nous travaillons pour valoriser des narrations artistiques et positives en maîtrisant la capture, la
            transformation et le mélange des matières sonores et visuelles.
          </p>
          <blockquote>
            <p class="pb-4 text-lg italic">« Cortex Studio optimise la communication des marques. »</p>
          </blockquote>
        </div>
      </article>

      <article id="historical" class="p-4 w-full flex justify-evenly gap-8 items-center">
        <div class="basis-1/2 max-w-[800px] flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Historique</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Artisan sonore et visuel depuis 2005</h4>
          <p class="text-justify text-lg leading-8">
            Initié en 2005, le projet <strong>Cortex Studio</strong> rassemble un réseau de professionnels pour apporter
            une solution globale image et son.
          </p>
        </div>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-gray-900 border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video src="" preload="none" loop muted class="w-full" />
        </div>
      </article>
    </section>

    <section id="contactez-nous"
      class="pt-[var(--var-header-height)] mb-8 px-4 max-w-7xl w-full bg-gray-900 text-white xl:rounded-3xl">
      <header class="px-8 pb-8 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Contactez-nous</h2>
        <UiSubline />
      </header>
      <div class="p-4 flex lg:flex-row flex-col gap-4 justify-evenly">
        <div class="basis-1/2 lg:max-w-[400px] flex flex-col">
          <p class="shrink-0 text-lg text-justify leading-8">Nous sommes ravis d'avoir suscité votre intérêt et nous
            serions
            enchantés d'entendre parler de vous. Que ce soit pour des questions, des commentaires ou des collaborations
            potentielles, n'hésitez pas à nous contacter en utilisant ce formulaire.</p>
          <NuxtImg src="icons/paper-plane.svg" alt="Paper plane" class="m-auto grow max-w-full lg:w-60 sm:w-48 w-32" />
        </div>
        <form @click.prevent="" class="basis-1/2 flex flex-col gap-8 items-stretch">
          <span class="flex flex-col gap-4">
            <label for="form-email" class="text-xl font-['ClashDisplay-Bold']">Email</label>
            <input id="form-email" name="form-emai" type="text" inputmode="email" placeholder="votre@email.com" required
              class="px-4 py-2 text-black border-4 border-gray-800 rounded-xl">
          </span>
          <span class="flex flex-col gap-4">
            <label for="form-msg" class="text-xl font-['ClashDisplay-Bold']">Votre message</label>
            <textarea id="form-msg" name="form-msg" inputmode="text" placeholder="Votre message" spellcheck="true"
              required class="h-[250px] px-4 py-2 text-black border-4 border-gray-800 rounded-xl" />
          </span>
          <button type="submit" id="form-btn" class="self-center">Envoyer</button>
        </form>
      </div>
    </section>
  </div>
</main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Cortex Studio - Design, film & production digitale',
  meta: [
    { name: 'description', content: 'Cortex Studio est spécialisé dans le design, le film et la production digitale. Un producteur moderne, inventif et rigoureux, expert audiovisuel. Stratège, designer de l\'image et du son, superviseur de la diffusion. Plus qu\'un studio digital, Cortex Studio est une source créative qui solutionne la production de contenus.' }
  ]
})

const brands = [
  {
    src: 'brands/chanel.svg'
  },
  {
    src: 'brands/cartier.svg'
  },
  {
    src: 'brands/nissan.svg'
  },
  {
    src: 'brands/costes.svg'
  },
  {
    src: 'brands/ps3.svg'
  },
  {
    src: 'brands/schwarzkopf.svg'
  },
  {
    src: 'brands/nivea.svg'
  },
  {
    src: 'brands/veet.svg'
  },
  {
    src: 'brands/airwick.svg'
  },
  {
    src: 'brands/nouvelles-frontieres.svg'
  },
  {
    src: 'brands/groupama.svg'
  },
  {
    src: 'brands/st-marc.webp'
  },
  {
    src: 'brands/pringles.svg'
  },
  {
    src: 'brands/lu.svg'
  },
  {
    src: 'brands/cdvi.svg'
  }
]

const landingVideoRef = ref<HTMLMediaElement>()
watch(useElementVisibility(landingVideoRef), (value) => {
  if (value) {
    landingVideoRef.value?.play()
  } else {
    landingVideoRef.value?.pause()
  }
})
const indexLandingVideo = ref(0)
const landingVideos = [
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/1_intro.mp4',
    color: '#fff'
  },
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/2_prod.mp4',
    color: '#92ffa1'
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/3_post.mp4',
    color: '#75d4ff'
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/4_rec.mp4',
    color: '#c724dd'
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/5_link.mp4',
    color: '#fefead'
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/6_content.mp4',
    color: '#fff'
  }
]
const nextLandingVideo = (index: number | undefined) => {
  if (index != undefined && index >= 0) {
    indexLandingVideo.value = index
  } else if ((indexLandingVideo.value + 1) === landingVideos.length) {
    indexLandingVideo.value = 0
  } else {
    indexLandingVideo.value++
  }
  nextTick(() => {
    landingVideoRef.value?.play()
  })
}
const landingVideoFullscreen = () => landingVideoRef.value?.requestFullscreen()

const articleVideo1Ref = ref<HTMLMediaElement>()
const articleVideo2Ref = ref<HTMLMediaElement>()
const articleVideo3Ref = ref<HTMLMediaElement>()
const articleVideo4Ref = ref<HTMLMediaElement>()
const articleVideo5Ref = ref<HTMLMediaElement>()
const articleVideo6Ref = ref<HTMLMediaElement>()
const articleVideo7Ref = ref<HTMLMediaElement>()
const articleVideo8Ref = ref<HTMLMediaElement>()
const articleVideo9Ref = ref<HTMLMediaElement>()
watch(useElementVisibility(articleVideo1Ref), (value) => playVideoFromRef(articleVideo1Ref, value))
watch(useElementVisibility(articleVideo2Ref), (value) => playVideoFromRef(articleVideo2Ref, value))
watch(useElementVisibility(articleVideo3Ref), (value) => playVideoFromRef(articleVideo3Ref, value))
watch(useElementVisibility(articleVideo4Ref), (value) => playVideoFromRef(articleVideo4Ref, value))
watch(useElementVisibility(articleVideo5Ref), (value) => playVideoFromRef(articleVideo5Ref, value))
watch(useElementVisibility(articleVideo6Ref), (value) => playVideoFromRef(articleVideo6Ref, value))
watch(useElementVisibility(articleVideo7Ref), (value) => playVideoFromRef(articleVideo7Ref, value))
watch(useElementVisibility(articleVideo8Ref), (value) => playVideoFromRef(articleVideo8Ref, value))
watch(useElementVisibility(articleVideo9Ref), (value) => playVideoFromRef(articleVideo9Ref, value))

function playVideoFromRef(video: Ref<HTMLMediaElement | undefined>, value: boolean) {
  if (value) {
    video.value?.play()
  } else {
    video.value?.pause()
  }
}
</script>

<style lang="scss">
#logo_slider {
  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper-slide {
    display: flex;
    padding: 10px 50px;
    width: auto;
  }

  .swiper::before,
  .swiper::after {
    content: "";
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-image: linear-gradient(90deg, rgb(17, 24, 39, 1), transparent);
    overflow: hidden;
    pointer-events: none;
  }

  .swiper::after {
    left: auto;
    right: 0;
    background-image: linear-gradient(270deg, rgb(17, 24, 39, 1), transparent);
  }
}

#cta-btn,
#form-btn {
  position: relative;
  z-index: 2;
  padding-inline: 1rem;
  padding-block: 0.75rem;
  overflow: hidden;
  color: white;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 8px;

  &:before {
    position: absolute;
    z-index: -1;
    content: "";
    inset: 0 -50px 0 0;
    border-right: 50px solid transparent;
    border-bottom: 60px solid white;
    transform: translateX(-100%);
    transition: 0.25s ease-in-out;
  }

  &:hover {
    @apply text-gray-800 border-gray-800;

    &:before {
      transform: translateX(0);
    }
  }
}

#section_1 {
  background: linear-gradient(45deg, rgba(150, 255, 160, 0.7), rgba(118, 213, 255, 0.7), rgba(199, 36, 221, 0.7), rgba(255, 255, 173, 0.7));

  h1 {
    filter: drop-shadow(0 0 1px black);
  }

  #box_video {
    box-shadow: 0 0 20px black, 20px 15px 30px rgba(150, 255, 160, 0.4), -20px 15px 30px rgba(118, 213, 255, 0.4), -20px -15px 30px rgba(199, 36, 221, 0.4), 20px -15px 30px rgba(255, 255, 173, 0.4);
  }
}

#notre-travail {
  background: linear-gradient(-150deg, var-color(1, 50%), #f6f6f9 20% 100%);
}

.video_perspective_left {
  transform: perspective(1500px) rotateY(15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(5deg);
  }
}

.video_perspective_right {
  transform: perspective(1500px) rotateY(-15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(5deg);
  }
}

blockquote p {
  text-shadow: -1px 0 lightgray, 0 1px lightgray, 1px 0 lightgray, 0 -1px lightgray;
}
</style>