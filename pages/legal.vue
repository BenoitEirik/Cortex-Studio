<template>
<main>
  <div class="pt-[var(--var-header-height)] w-screen flex flex-col items-center bg-gray-900">
    <section class="p-8 max-w-6xl w-full">
      <NuxtLink to="/">
        <Icon name="i-iconoir-arrow-left" color="white" size="2rem" />
      </NuxtLink>
    </section>

    <section class="p-4 max-w-6xl w-full flex flex-col gap-8 items-center">
      <NuxtLink to="/">
        <img id="logo" width="200px" src="/images/logo.png" alt="Cortex Studio logo" />
      </NuxtLink>
      <div class="text-white">
        <p>© Cortex Studio 2005-{{ new Date().getFullYear() }}</p>
        <p>Registred tradmark, All rights reserved.</p>
        <br>
        <p>
          Administration :<br>
          1 Bis route de Ballée,<br>
          53340 Chémeré-le-roi
        </p>
        <br>
        <p>
          INPI n° 3971155<br>
          RC : 48880276000014<br>
          TVA : FR25488802760<br>
          CEO : Alexandre Levionnois
        </p>
      </div>
    </section>
  </div>
</main>
</template>

<script lang="ts" setup>
useHead({
  title: 'Cortex Studio - Mentions légales',
  meta: [
    { name: 'description', content: 'Cortex Studio est spécialisé dans le design, le film et la production digitale. Un producteur moderne, inventif et rigoureux, expert audiovisuel. Stratège, designer de l\'image et du son, superviseur de la diffusion. Plus qu\'un studio digital, Cortex Studio est une source créative qui solutionne la production de contenus.' }
  ]
})
</script>
