<template>
<li>
  <a :href="props.href" class="flex md:flex-row flex-col gap-4">
    <div class="md:basis-2/3 hyphens-manual overflow-hidden">
      <p class="pb-4 text-gray-900 text-2xl md:text-left text-center font-['ClashDisplay-Bold']">{{ props.title }}</p>
      <slot name="content" />
    </div>
    <div class="md:basis-1/3 shrink-0 flex md:justify-end justify-center items-start overflow-hidden">
      <video :src="srcVideo" width="200px" preload="none" autoplay loop
        muted class="bg-gray-900 sm:border-4 border-2 border-gray-800 lg:rounded-2xl md:rounded-xl rounded-lg"></video>
    </div>
  </a>
</li>
</template>

<script lang="ts" setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  srcVideo: {
    type: String,
    default: ''
  }
})
</script>
