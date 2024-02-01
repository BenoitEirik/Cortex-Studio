<template>
<main>
  <div class="pt-[var(--var-header-height)] w-screen flex flex-col items-center bg-gray-900">
    <section class="p-8 max-w-6xl w-full max-w-6xl">
      <NuxtLink to="/">
        <Icon name="i-iconoir-arrow-left" color="white" size="2rem" />
      </NuxtLink>
    </section>

    <section class="p-4 max-w-6xl w-full flex flex-col gap-8 items-center">
      <NuxtLink to="/">
        <NuxtImg id="logo" width="200px" src="logo.png" alt="Cortex Studio logo" />
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