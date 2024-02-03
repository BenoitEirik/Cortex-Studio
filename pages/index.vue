<template>
<main class="bg-[var(--var-color-bg)]">
  <div class="w-screen max-w-full xl:h-screen flex flex-col items-center bg-gray-900">
    <section id="section_landing"
      class="pt-[var(--var-header-height)] relative grow w-full p-4 flex xl:flex-row flex-col justify-evenly items-center gap-4 text-white">
      <div
        class="xl:basis-1/3 p-4 flex flex-col gap-8 xl:items-start items-center animate__animated animate__fadeInLeft">
        <h1 class="xl:text-left text-center max-w-[600px]">
          <span class="font-['ClashDisplay-Bold'] lg:text-6xl text-5xl">Cortex Studio</span>
          <span class="block h-2 border-transparent" />
          <span class="lg:text-4xl text-3xl">est spécialisé dans le design, le film et la production digitale.</span>
        </h1>
        <NuxtLink id="cta-btn" to="/#notre-travail">Découvrir</NuxtLink>
      </div>
      <div id="box_video"
        class="xl:basis-2/3 relative rounded-md pb-8 bg-black border-4 border-gray-800 max-w-[800px] w-full overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
        <video ref="landingVideoRef" muted :src="landingVideos[indexLandingVideo].src"
          @ended="nextLandingVideo()" @dblclick="landingVideoFullscreen"
          @click="popUpModelVideo(landingVideos[indexLandingVideo].bgVideo)"
          :class="{ 'cursor-pointer': landingVideos[indexLandingVideo].bgVideo !== -1 }" />
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 px-4 py-2 flex gap-4">
          <span v-for="(v, i) in landingVideos" :key="i"
            class="w-4 h-4 rounded-full border-4 border-gray-800 cursor-pointer outline-1"
            :class="{ 'outline': i === indexLandingVideo }"
            :style="'background-color:' + v.color + ';outline-color:' + v.color" @click="nextLandingVideo(i)" />
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
            <img class="md:w-[100px] sm:w-[80px] w-[60px] md:h-[100px] sm:h-[80px] h-[60px]"
              :src="'/images/' + brand.src" alt="Client logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>

  <div class="max-w-full w-screen flex flex-col items-center">
    <LayoutContentVideo id="notre-travail" title="Notre travail">
      <template #content>
        <ContentVideo id="showreel"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-1-showreel.mp4" h3="Showreel"
          h4="Créer des expériences digitales">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              <strong>Creative Studio</strong> a l'expertise pour déterminer la stratégie de contenus et la réaliser,
              procéder à la captation, au traitement du visuel, du son et à sa diffusion.
              <br>
              Des divisions articulées pour évoquer les marques (.prod.post.rec.link).
              <br>
              Creative Studio est le partenaire des projets artistiques et commerciaux.
            </p>
          </template>
        </ContentVideo>

        <ContentVideo id="jobs" layout="right"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-2-profession.mp4" h3="Métiers"
          h4="Pure player indépendant">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Spécialisé dans la production digitale et audiovisuelle, <strong>Cortext Studio</strong> constitue
              un maillage de compétences pluri-disciplinaires
              qui rend possible les projets
              les plus qualitatifs et exigeants.
            </p>
            <blockquote>
              <p class="lg:text-lg text-md italic text-black">« De la réflexion à la diffusion, Cortex Studio déploie
                votre
                communication digitale. »</p>
            </blockquote>
          </template>
        </ContentVideo>

        <ContentVideo id="experimentations"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-3-experiment1.mp4"
          h3="Expérimentations" h4="Captures insolites">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Révélations des détails invisibles d'un orage sous l'oeil d'une caméra à l'affut. Expérimenter
              aujourd'hui,
              c'est maitriser demain pour vos projets.
              <br>
              De nombreuses expérimentations digitales sont en cours.
              <br>
              Nous participons aux développements de la captation, du traitement sonore et visuel et des nouveaux usages
              médiatiques.
            </p>
          </template>
        </ContentVideo>

        <ContentVideo id="offers" layout="right"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/1-our_work-4-offers.mp4" h3="Offres"
          h4="Des offres pour les annonceurs, les agences et les producteurs">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
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
          </template>
        </ContentVideo>
      </template>
    </LayoutContentVideo>

    <LayoutContentVideo id="nos-services" title="Nos services">
      <template #content>
        <ContentVideo id="strategy"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-1-strategy.mp4" h3="Stratégie"
          h4="Correspondre à l'ère du temps">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              À chaque étape, <strong>Cortex Studio</strong> déploie des stratégies qui favorisent la pertinence des
              contenus.
              <br>
              Alors que la stratégie marketing va identifier un besoin de communication, la stratégie de contenu propose
              «
              le comment ».
              <br>
              Elle dresse la route à suivre pour s'exprimer et les processus de productions adaptées.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio propose des contenus déterminants. »</p>
              <ul class="list-disc pl-4">
                <li>analyse de compétitivité</li>
                <li>développement personnalisé</li>
                <li>analyse web</li>
                <li>référencement</li>
                <li>planification de projet</li>
                <li>stratégie de réseaux sociaux</li>
              </ul>
            </blockquote>
          </template>
        </ContentVideo>

        <ContentVideo id="creation" layout="right"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-2-creation.mp4" h3="Création"
          h4="L'essence et la forme">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Les contenus sont des « véhicules » qui portent le sens et l'apparence du projet diffusé.
              <br>
              Cerner dans le projet de communication,
              les objectifs, les thèmes et la mission
              que devront remplir les contenus
              pour en choisir le design, c'est comprendre
              la nature du projet dans son essence.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio définit les objets médias. »</p>
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
          </template>
        </ContentVideo>

        <ContentVideo id="production"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-3-production.mp4" h3="Production"
          h4="De la puissance à l'acte">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              <strong>Cortex Studio</strong> pilote l'ensemble des moyens de production digitale.
              <br>
              La production est au centre de la dynamique de <strong>Cortex Studio</strong>. Elle nourrit la créativité
              et
              devient le levier qui bascule un projet en réalisation concrète diffusée.
              Nous avons circonscrit l'ensemble des solutions de production dans un modèle qui articule, élève, et
              améliore les procédés.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio est l'outil facilitateur de production digitale.
                »
              </p>
            </blockquote>
          </template>
        </ContentVideo>

        <ContentVideo id="technology" layout="right"
          src-video="http://www.cortexstudio.fr/assets/video/menu_movies/2-services-4-technology.mp4" h3="Technologie"
          h4="Incubateur d'inspiration">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Un maillage technologique dans un workflow au service de la créativité.
              <br>
              Premier à Paris en 2007 à introduire l'ultra haute definition, nos choix technologiques s'adaptent aux
              projets inédits.
              Le worflow <strong>Cortex Studio</strong> est 6K-RAW pour le visuel et 24bits/192khz pour l'audio.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio fait la jonction des technologies UHD. »</p>
            </blockquote>
          </template>
        </ContentVideo>
      </template>
    </LayoutContentVideo>

    <LayoutContentVideo id="le-studio" title="Le studio">
      <template #content>
        <ContentVideo id="vision" src-video="http://www.cortexstudio.fr/assets/video/menu_movies/3-studio-1-vision.mp4"
          h3="Vision" h4="Expert en contenus de marques">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Pour répondre aux besoins des annonceurs et des artistes CS propose une approche qui met les contenus
              audiovisuels au centre de la démarche médiatique. CS accompagne les projets en apportant l'expertise de la
              production au service de la création digitale.
              <br>
              <strong>Cortex Studio</strong> intervient sur les missions ponctuelles et les opérations de communications
              globales en connectant les talents de la publicité, du web et de l'audiovisuel.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio active la communication. »</p>
            </blockquote>
          </template>
        </ContentVideo>

        <ContentVideo id="model" layout="right" h3="Modèle" h4="Quatre pôles d'expertises complémentaires">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Le modèle <strong>Cortex Studio</strong> place les contenus au centre du processus de communication et
              apporte une solution de production pour tout support, tout écran, tout média.
              <br>
              Le modèle articule les expertises pour concevoir et réaliser des projets, vecteurs d'interactions et
              d'opinions favorables, à travers le contenu de marque.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio est la synergie des talents. »</p>
            </blockquote>
          </template>
          <template #rawSrc>
            <div class="relative bg-gray-900 w-full aspect-video flex justify-center flex-wrap">
              <div class="relative basis-1/2 border border-gray-800 bg-[var(--var-color-4)]">
                <p class="absolute left-2 top-2 lg:text-xl md:text-lg sm:text-md underline">.link</p>
                <div
                  class="absolute inset-0 p-2 flex justify-center items-center font-bold text-transparent hover:text-black hover:bg-[var(--var-color-4)] transition cursor-pointer"
                  @click="popUpModelVideo(1)">
                  <p class="lg:text-xl md:text-lg text-md text-center">Design web et interactif</p>
                </div>
              </div>
              <div class="relative basis-1/2 border border-gray-800 bg-[var(--var-color-1)]">
                <p class="absolute right-2 top-2 lg:text-xl md:text-lg sm:text-md underline">.prod</p>
                <div
                  class="absolute inset-0 p-2 flex justify-center items-center font-bold text-transparent hover:text-black hover:bg-[var(--var-color-1)] transition cursor-pointer"
                  @click="popUpModelVideo(2)">
                  <p class="lg:text-xl md:text-lg text-md text-center">Production de film</p>
                </div>
              </div>
              <div class="relative basis-1/2 border border-gray-800 bg-[var(--var-color-3)]">
                <p class="absolute left-2 bottom-2 lg:text-xl md:text-lg sm:text-md underline">.rec</p>
                <div
                  class="absolute inset-0 p-2 flex justify-center items-center font-bold text-transparent hover:text-black hover:bg-[var(--var-color-3)] transition cursor-pointer"
                  @click="popUpModelVideo(3)">
                  <p class="lg:text-xl md:text-lg text-md text-center">Design sonore et traitement du son</p>
                </div>
              </div>
              <div class="relative basis-1/2 border border-gray-800 bg-[var(--var-color-2)]">
                <p class="absolute right-2 bottom-2 lg:text-xl md:text-lg sm:text-md underline">.post</p>
                <div
                  class="absolute inset-0 p-2 flex justify-center items-center font-bold text-transparent hover:text-black hover:bg-[var(--var-color-2)] transition cursor-pointer"
                  @click="popUpModelVideo(4)">
                  <p class="lg:text-xl md:text-lg text-md text-center">Post-prod vidéo & motion design</p>
                </div>
              </div>
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex justify-center items-center bg-white border border-black rounded-full overflow-hidden"
                @click.stop="popUpModelVideo(5)">
                <p class="px-4 py-2 text-center text-md font-bold underline">.content</p>
                <div
                  class="absolute inset-0 p-2 flex justify-center items-center font-bold text-transparent hover:text-black hover:bg-white transition cursor-pointer">
                  <p class="text-md text-center">Services</p>
                </div>
              </div>
            </div>
          </template>
        </ContentVideo>

        <ContentVideo id="references" src-img="http://www.cortexstudio.fr/assets/img/references.jpg"
          alt="Image references.jpg" h3="Références" h4="Une expérience pointue">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              La diversité des prestations auprès de nos clients grands comptes dans des domaines aussi variés que le
              luxe, le divertissement, et la culture, constitue la richesse de notre expérience.
              <br>
              Nous travaillons pour valoriser des narrations artistiques et positives en maîtrisant la capture, la
              transformation et le mélange des matières sonores et visuelles.
            </p>
            <blockquote>
              <p class="pb-4 lg:text-lg text-md italic">« Cortex Studio optimise la communication des marques. »</p>
            </blockquote>
          </template>
        </ContentVideo>

        <ContentVideo id="historical" layout="right" h3="Historique" h4="Artisan sonore et visuel depuis 2005">
          <template #content>
            <p class="text-justify lg:text-lg text-md leading-8">
              Initié en 2005, le projet <strong>Cortex Studio</strong> rassemble un réseau de professionnels pour
              apporter
              une solution globale image et son.
            </p>
          </template>
          <template #rawSrc>
            <div class="w-full aspect-video bg-[var(--var-color-bg)] flex flex-col justify-center items-center">
              <div class="p-2 flex gap-4 flex-wrap justify-evenly items-center border-b-4 border-dashed font-bold">
                <span class="text-xs">2006</span>
                <span class="text-sm">2007</span>
                <span class="text-base">2008</span>
                <span class="text-lg">2009</span>
                <span class="text-xl">2010</span>
                <span class="text-2xl">2012</span>
                <span class="text-3xl">2015</span>
                <span class="text-4xl">2019</span>
                <span class="text-5xl">2024</span>
              </div>
              <p class="p-8 text-center lg:text-xl text-lg">
                L'activité s'installe dans un studio du 10eme arrondissement de Paris.
                <br>
                Elle est dédiée dans un premier temps aux prestations techniques de post-production de l'audio et de la
                vidéo.
              </p>
            </div>
          </template>
        </ContentVideo>
      </template>
    </LayoutContentVideo>

    <section id="contactez-nous"
      class="pt-[var(--var-header-height)] xl:mb-8 mb-0 sm:px-4 sm:pb-4 max-w-7xl w-full bg-gray-900 text-white xl:rounded-3xl">
      <header class="px-8 pb-8 flex flex-col gap-4 items-center text-center">
        <h2 class="font-['ClashDisplay-Bold'] lg:text-6xl text-5xl">Contactez-nous</h2>
        <UiSubline />
      </header>
      <div class="p-4 flex lg:flex-row flex-col gap-4 justify-evenly">
        <div class="basis-1/2 lg:max-w-[400px] flex flex-col">
          <p class="shrink-0 lg:text-lg text-md text-justify leading-8">Nous sommes ravis d'avoir suscité votre intérêt
            et nous
            serions
            enchantés d'entendre parler de vous. Que ce soit pour des questions, des commentaires ou des collaborations
            potentielles, n'hésitez pas à nous contacter en utilisant ce formulaire.</p>
          <img src="/images/icons/paper-plane.svg" alt="Paper plane"
            class="m-auto grow max-w-full lg:w-60 sm:w-48 w-32" />
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

  <!-- Need to be child of a parent with viewport size page -->
  <BackgroundVideo :display="bgVideo1" @close="(value) => bgVideo1 = Boolean(value)"
    src-bg-video="http://www.cortexstudio.fr/assets/video/fonds/link.mp4"
    src-main-video="http://www.cortexstudio.fr/assets/video/color_movies/link.mp4">
    <template #content>
      <article class="p-4 flex flex-col gap-4 justify-start">
        <h3 class="text-4xl">Initiateur d'expérience interactive</h3>
        <p class="text-sm italic">création/editorial/developpement</p>
        <p class="lg:text-lg text-md">Instaurer des univers immersifs par des langages forts et de nouveaux concepts
          interactifs.
        </p>
        <p class="lg:text-lg text-md">A l'affut des dernières tendances .link propose des créations et conçoit des
          interfaces
          novatrices, vecteurs
          de relations entre les publics et la marque.</p>
        <p class="text-xl text-[var(--var-color-4)]">CS.link est la division spécialisée dans la conception de sites web
          et d'interfaces digitales.</p>
        <p class="text-xl"><b>Savoir-faire :</b></p>
        <ul class="pl-8 text-xl list-disc">
          <li>Déploiement broadcast et online</li>
          <li>Site web corporate</li>
          <li>Site web évènementiel</li>
          <li>Bannières, newsletters</li>
          <li>Marketing viral</li>
          <li>Bornes interactives</li>
          <li>Supports de vente</li>
        </ul>
      </article>
    </template>
  </BackgroundVideo>

  <BackgroundVideo :display="bgVideo2" @close="(value) => bgVideo2 = Boolean(value)"
    src-bg-video="http://www.cortexstudio.fr/assets/video/fonds/prod.mp4"
    src-main-video="http://www.cortexstudio.fr/assets/video/color_movies/prod.mp4">
    <template #content>
      <article class="p-4 flex flex-col gap-4 justify-start">
        <h3 class="text-4xl">Initiateur d'expérience scénographique</h3>
        <p class="text-sm italic">scénographie/captation/réalisation de films</p>
        <p class="lg:text-lg text-md">Mettre en scène vos projets de communication par des narrations pertinentes et
          l'emploi de
          technologies de pointe.</p>
        <p class="lg:text-lg text-md">
          <strong>CS.prod coordonne les talents et les outils pour procurer un discours esthétique et clair à votre
            communication audiovisuelle.</strong>
        </p>
        <p class="text-xl text-[var(--var-color-1)]">CS.prod est la division spécialisée dans l'écriture et la
          réalisation de films.</p>
        <p class="text-xl"><b>Savoir-faire :</b></p>
        <ul class="pl-8 text-xl list-disc">
          <li>Élaborer des scenarii et superviser la réalisation</li>
          <li>Organiser et planifier chaque étape de la production</li>
          <li>Préparer et contrôler les tournages sur site ou en studio</li>
          <li>Déployer les opérateurs les plus performants parmi les métiers du son et de l'image</li>
          <li>Superviser la captation</li>
          <li>Exploiter un workflow UHD pour vos productions dès la captation</li>
          <li>Anticiper les travaux web d'intégration dès l'écriture.</li>
        </ul>
      </article>
    </template>
  </BackgroundVideo>

  <BackgroundVideo :display="bgVideo3" @close="(value) => bgVideo3 = Boolean(value)"
    src-bg-video="http://www.cortexstudio.fr/assets/video/fonds/rec.mp4"
    src-main-video="http://www.cortexstudio.fr/assets/video/color_movies/rec.mp4">
    <template #content>
      <article class="p-4 flex flex-col gap-4 justify-start">
        <h3 class="text-4xl">Initiateur d'expériences sonores</h3>
        <p class="text-sm italic">sound-design/travail du son</p>
        <p class="lg:text-lg text-md">Orchestrer des univers sonores à travers la recherche, la composition et le
          traitement du
          son.</p>
        <p class="lg:text-lg text-md">Le son a un impact déterminant sur la perception. Seul ou en soutien à l'image, le
          son est
          vecteur d'émotions.</p>
        <p class="lg:text-lg text-md">
          <strong>Le langage sonore participe à l'élaboration, au ton, à l'intensité du message et fait appel à la
            sensibilité.</strong>
        </p>
        <p class="lg:text-lg text-md">
          <strong>CS.prod coordonne les talents et les outils pour procurer un discours esthétique et clair à votre
            communication audiovisuelle.</strong>
        </p>
        <p class="text-xl text-[var(--var-color-3)]">CS.rec est la division spécialisée dans la composition, la
          production et la réalisation sonore.</p>
        <p class="text-xl"><b>Savoir-faire :</b></p>
        <ul class="pl-8 text-xl list-disc">
          <li>Supervision sonore</li>
          <li>Sound design/création sonore/signature sonore</li>
          <li>Composition musicale</li>
          <li>Composition d'ambiance comportementale</li>
          <li>Enregistrement, montage/mixage</li>
          <li>Mastering</li>
          <li>Post-synchronisation</li>
        </ul>
      </article>
    </template>
  </BackgroundVideo>

  <BackgroundVideo :display="bgVideo4" @close="(value) => bgVideo4 = Boolean(value)"
    src-bg-video="http://www.cortexstudio.fr/assets/video/fonds/post.mp4"
    src-main-video="http://www.cortexstudio.fr/assets/video/color_movies/post.mp4">
    <template #content>
      <article class="p-4 flex flex-col gap-4 justify-start">
        <h3 class="text-4xl">Initiateur d'expériences visuelles</h3>
        <p class="text-sm italic">visual design/vfx/post-production video</p>
        <p class="lg:text-lg text-md">Concevoir le traitement de l'image en cohérence avec le projet de création.</p>
        <p class="lg:text-lg text-md"><strong>CS.post réunit les idées et le savoir-faire pour être vu, dans tous les
            formats
            (SD,HD,4K,6K).</strong></p>
        <p class="text-xl text-[var(--var-color-2)]">CS.post est la division experte dans l'image.</p>
        <p class="text-xl"><b>Savoir-faire :</b></p>
        <ul class="pl-8 text-xl list-disc">
          <li>Supervision du traitement de l'image</li>
          <li>Graphisme 2D/3D, motion design</li>
          <li>Montage</li>
          <li>Effets spéciaux</li>
          <li>Habillage filmique</li>
          <li>Étalonnage</li>
          <li>Conformation</li>
          <li>Supervision des travaux de laboratoire</li>
        </ul>
      </article>
    </template>
  </BackgroundVideo>

  <BackgroundVideo :display="bgVideo5" @close="(value) => bgVideo5 = Boolean(value)"
    src-bg-video="http://www.cortexstudio.fr/assets/video/fonds/content.mp4"
    src-main-video="http://www.cortexstudio.fr/assets/video/color_movies/content.mp4">
    <template #content>
      <article class="p-4 flex flex-col gap-4 justify-start text-black">
        <h3 class="text-4xl">Initiateur d'expérience digitale</h3>
        <p class="text-sm italic">stratégie média /conseil / pilotage / déclinaison média</p>
        <p class="lg:text-lg text-md">Faire converger les compétences autour d'une équipe dédiée pour concevoir une
          stratégie de marque pertinente.</p>
        <p class="lg:text-lg text-md"><strong>Dès les premières étapes de réflexion, CS.content crée la synergie des
            cultures digitales pour concevoir des projets de communications ciblés.</strong></p>
        <p class="text-xl text-[var(--var-color-2)]">CS.content est une équipe spécialisée dans le conseil, la création
          et le pilotage de projets de communications cross-medias.</p>
        <p class="text-xl"><b>Son rôle :</b></p>
        <ul class="pl-8 text-xl list-disc">
          <li><strong>cibler les besoins de communications par le contenu</strong></li>
          <li><strong>orienter et concevoir une communication cohérente</strong></li>
          <li><strong>réunir les compétences</strong></li>
          <li><strong>sécuriser et encadrer la production depuis la phase de conception</strong></li>
          <li><strong>décliner la réalisation sur tous supports</strong></li>
          <li><strong>encadrer la tenue du planning et des coûts</strong></li>
          <li><strong>contrôler la qualité</strong></li>
          <li><strong>obtenir les audiences et les résultats</strong></li>
        </ul>
      </article>
    </template>
  </BackgroundVideo>
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
    color: '#fff',
    bgVideo: -1
  },
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/2_prod.mp4',
    color: '#92ffa1',
    bgVideo: 2
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/3_post.mp4',
    color: '#75d4ff',
    bgVideo: 4
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/4_rec.mp4',
    color: '#c724dd',
    bgVideo: 3
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/5_link.mp4',
    color: '#fefead',
    bgVideo: 1
  }
  ,
  {
    src: 'http://www.cortexstudio.fr/assets/video/home_movies/6_content.mp4',
    color: '#fff',
    bgVideo: 5
  }
]
const nextLandingVideo = (index: number | undefined = undefined) => {
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

function popUpModelVideo(index: number) {
  switch (index) {
    case 1:
      bgVideo1.value = true
      break;
    case 2:
      bgVideo2.value = true
      break;
    case 3:
      bgVideo3.value = true
      break;
    case 4:
      bgVideo4.value = true
      break;
    case 5:
      bgVideo5.value = true
      break;
  }
}

const bgVideo1 = ref<boolean>(false)
const bgVideo2 = ref<boolean>(false)
const bgVideo3 = ref<boolean>(false)
const bgVideo4 = ref<boolean>(false)
const bgVideo5 = ref<boolean>(false)
</script>

<style lang="scss">
#logo_slider {
  .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper-slide {
    display: flex;
    padding: 10px 20px;
    width: auto;

    @media (min-width: 640px) {
      padding: 10px 30px;
    }

    @media (min-width: 768px) {
      padding: 10px 50px;
    }
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

video {
  background-image: url('/puff.svg');
  background-position: center;
  background-repeat: no-repeat;
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

#section_landing {
  background: linear-gradient(45deg, rgba(150, 255, 160, 0.7), rgba(118, 213, 255, 0.7), rgba(199, 36, 221, 0.7), rgba(255, 255, 173, 0.7));

  h1 {
    filter: drop-shadow(0 0 1px #1f2937);
  }

  #box_video {
    box-shadow: 0 0 20px theme('colors.gray.900');
  }
}

#notre-travail {
  background: linear-gradient(-150deg, var-color(1, 50%), #f6f6f9 20% 100%);
}

blockquote p {
  text-shadow: -1px 0 lightgray, 0 1px lightgray, 1px 0 lightgray, 0 -1px lightgray;
}
</style>