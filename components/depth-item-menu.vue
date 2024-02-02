<template>
<li>
  <a :href="props.href" class="flex md:flex-row flex-col gap-4">
    <div class="md:basis-2/3 hyphens-manual overflow-hidden">
      <p class="pb-4 text-gray-900 text-2xl md:text-left text-center font-['ClashDisplay-Bold']">{{ props.title }}</p>
      <slot name="content" />
    </div>
    <div class="md:basis-1/3 shrink-0 flex md:justify-end justify-center items-start overflow-hidden">
      <video :src="srcVideo" width="200px" preload="none" autoplay loop
        muted class="bg-gray-900 border-4 border-gray-800 rounded-xl"></video>
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
