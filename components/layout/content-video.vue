<template>
<section :id="props.id" class="pt-[var(--var-header-height)] sm:px-4 sm:pb-8 pb-4 w-full min-h-screen">
  <header class="px-8 pb-2 flex flex-col gap-4 items-center text-center">
    <h2 class="font-['ClashDisplay-Bold'] lg:text-6xl md:text-5xl sm:text-4xl text-3xl">{{ props.title }}</h2>
    <UiSubline />
  </header>

  <slot name="content" />
</section>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
    required: true
  },
  title: {
    type: String,
    default: '',
    required: true
  }
})
</script>
