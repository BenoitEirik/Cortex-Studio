<template>
<footer class="max-w-full w-screen flex justify-center bg-gray-900">
  <div class="max-w-7xl w-full p-8 flex lg:flex-row flex-col gap-8 justify-between items-center">
    <div class="self-stretch px-4 py-2 flex lg:flex-col md:flex-row flex-col gap-4 justify-between md:items-start items-center">
      <NuxtLink to="/">
        <img id="logo_footer" width="200px" src="/images/logo.png" alt="Cortex Studio logo" />
      </NuxtLink>
      <div class="text-white text-xs lg:text-left md:text-right text-center">
        <p>© Cortex Studio {{ new Date().getFullYear() }}</p>
        <p>Registred tradmark, All rights reserved.</p>
        <br>
        <NuxtLink to="/legal" class="underline">Mentions légales</NuxtLink>
      </div>
    </div>

    <ul class="self-stretch px-4 py-2 flex justify-center gap-8 text-white lg:text-left text-center">
      <li class="flex flex-col gap-4">
        <NuxtLink to="/#notre-travail" class="font-['ClashDisplay-Bold'] text-2xl font-bold">Plus+</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/architecture">Architecture</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <ul class="px-4 py-2 flex justify-center flex-wrap gap-8 text-white lg:text-left text-center">
      <li class="flex flex-col gap-4">
        <NuxtLink to="/#notre-travail" class="font-['ClashDisplay-Bold'] text-2xl font-bold">Notre travail</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/#showreel">Showreel</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#jobs">Métiers</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#experimentations">Expérimentations</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#offers">Offres</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="flex flex-col gap-4">
        <NuxtLink to="/#nos-services" class="font-['ClashDisplay-Bold'] text-2xl font-bold">Nos services</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/#strategy">Stratégie</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#creation">Création</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#production">Production</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#technology">Technologie</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="flex flex-col gap-4">
        <NuxtLink to="/#le-studio" class="font-['ClashDisplay-Bold'] text-2xl font-bold">Le studio</NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/#vision">Vision</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#model">Modèle</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#references">Références</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#historical">Historique</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</footer>
</template>

<style lang="scss" scoped>
footer {
  #logo_footer {
    filter: drop-shadow(0 0 1px black);
  }
}
</style>