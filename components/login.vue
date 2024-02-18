<template>
<div
  class="fixed z-50 left-0 top-0 w-screen max-w-full h-screen flex flex-col justify-center items-center p-4" @click="globalStore.showLoginForm(false)" :class="{ 'hidden': !globalStore.displayLoginForm }">
  <div class="p-8 max-w-fit flex flex-col items-stretch w-[400px] bg-[var(--var-color-bg)] [box-shadow:_0_0_0_100vmax_rgb(0_0_0_/_.5)] sm:border-4 border-2 border-gray-800 rounded-3xl overflow-auto" @click.stop>
    <header class="pb-8">
      <h3 class="font-['ClashDisplay-Bold'] text-2xl text-center">Espace partenaire</h3>
      <p class="pt-4">Connectez-vous pour accéder à l'espace partenaire.</p>
    </header>
    <form class="flex flex-col gap-8 items-stretch" @click.prevent>
      <span class="flex flex-col gap-4">
        <label for="login_email" class="text-xl font-['ClashDisplay-Bold']">Email</label>
        <input id="login_email" type="email" inputmode="email" name="login_email" placeholder="example@email.com" class="px-4 py-2 w-full text-black bg-gray-100 border-2 border-gray-800 rounded-lg">
      </span>
      <span class="flex flex-col gap-4">
        <label for="login_password" class="text-xl font-['ClashDisplay-Bold']">Mot de passe</label>
        <input id="login_password" type="password" inputmode="text" name="login_password" placeholder="Votre mot de passe" class="px-4 py-2 w-full text-black bg-gray-100 border-2 border-gray-800 rounded-lg">
      </span>
      <button type="submit" class="self-center px-4 py-2 lg:text-md md:text-base text-sm border border-gray-800 rounded-lg hover:[box-shadow:_0_2px_0_1px_gray] transition duration-100">Connexion</button>
    </form>
  </div>
</div>
</template>

<script lang="ts" setup>
const globalStore = useGlobalStore()
</script>
