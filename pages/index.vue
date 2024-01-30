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
        class="xl:basis-2/3 relative rounded-md py-8 bg-black border-4 border-gray-800 max-w-[800px] w-full animate__animated animate__fadeIn">
        <video ref="landingVideoRef" autoplay :src="landingVideos[indexLandingVideo].src"
          @ended="nextLandingVideo(undefined)" @dblclick="landingVideoFullscreen" />
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 px-4 py-2 flex gap-4">
          <button type="button" v-for="(v, i) in landingVideos" :key="i"
            class="w-4 h-4 rounded-full border-4 border-gray-800" :style="'background-color:' + v.color"
            @click="nextLandingVideo(i)" />
        </div>
      </div>
    </section>
    <section class="shrink-0 max-w-full">
      <div id="logo_slider" class="max-w-7xl">
        <Swiper :modules="[SwiperAutoplay]" :loop="true" slides-per-view="auto" :speed="7000" :allow-touch-move="false"
          :autoplay="{
            delay: 1,
            disableOnInteraction: false,
          }">
          <SwiperSlide v-for="(brand, i) in brands" :key="i" class="grayscale hover:grayscale-0 transition-all">
            <NuxtImg width="100px" height="100px" :src="brand.src" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>

  <div class="w-screen flex flex-col items-center">
    <section id="notre-travail" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="p-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Notre travail</h2>
        <UiHr />
      </header>
      <div class="px-4 py-20 w-full flex justify-evenly items-center">
        <div
          class="basis-1/2 max-w-[800px] w-full bg-black border-4 border-gray-800 rounded video_perspective_left overflow-hidden">
          <video src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-1-showreel.mp4" autoplay loop muted
            class="w-full" />
        </div>
        <article class="basis-1/2 max-w-[800px] text-left flex flex-col gap-8 items-end">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Showreel</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Créer des expériences digitales</h4>
          <p class="text-right text-lg leading-8">
            <strong>Creative Studio</strong> a l'expertise pour déterminer la stratégie de contenus et la réaliser,
            procéder à la captation, au traitement du visuel, du son et à sa diffusion.
            <br>
            Des divisions articulées pour évoquer les marques (.prod.post.rec.link).
            <br>
            Creative Studio est le partenaire des projets artistiques et commerciaux.
          </p>
        </article>
      </div>
      <div class="p-4 w-full flex justify-evenly items-center">
        <article class="basis-1/2 max-w-[800px] text-left flex flex-col gap-8 items-start">
          <h3 class="text-4xl font-['ClashDisplay-Bold'] bg-gray-800 text-white">Métiers</h3>
          <h4 class="text-2xl font-['ClashDisplay-Bold']">Pure player indépendant</h4>
          <p class="text-left text-lg leading-8">
            Spécialisé dans la production digitale et audiovisuelle, <strong>Cortext Studio</strong> constitue
            un maillage de compétences pluri-disciplinaires
            qui rend possible les projets
            les plus qualitatifs et exigeants.
          </p>
          <blockquote class="text-lg italic">
            « De la réflexion à la diffusion, CS déploie votre communication digitale. »
          </blockquote>
        </article>
        <div
          class="basis-1/2 max-w-[800px] w-full bg-black border-4 border-gray-800 rounded video_perspective_right overflow-hidden">
          <video src="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-2-profession.mp4" autoplay loop
            muted class="w-full" />
        </div>
      </div>
    </section>

    <section id="nos-services" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="p-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Nos services</h2>
        <UiHr />
      </header>
      <div>

      </div>
    </section>

    <section id="le-studio" class="pt-[var(--var-header-height)] p-4 w-full min-h-screen">
      <header class="p-8 pb-16 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Le studio</h2>
        <UiHr />
      </header>
      <div>

      </div>
    </section>

    <section id="contactez-nous"
      class="mt-[var(--var-header-height)] p-4 my-8 max-w-7xl w-full bg-gray-900 text-white xl:rounded-3xl">
      <header class="p-8 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] text-6xl">Contactez-nous</h2>
        <UiHr />
      </header>
      <div class="p-4 flex lg:flex-row flex-col gap-4 justify-evenly">
        <div class="basis-1/2 lg:max-w-[400px] flex flex-col">
          <p class="shrink-0 text-lg text-justify leading-8">Nous sommes ravis d'avoir suscité votre intérêt et nous serions
            enchantés d'entendre parler de vous. Que ce soit pour des questions, des commentaires ou des collaborations
            potentielles, n'hésitez pas à nous contacter en utilisant ce formulaire.</p>
          <NuxtImg src="icons/paper-plane.svg" class="m-auto grow max-w-full lg:w-60 sm:w-48 w-32" />
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
}
const landingVideoFullscreen = () => landingVideoRef.value?.requestFullscreen()
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
</style>