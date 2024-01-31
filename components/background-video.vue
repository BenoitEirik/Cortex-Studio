<template>
<div :class="{ '!block': display }" class="hidden sticky z-20 inset-0 w-screen h-screen bg-gray-900 cursor-pointer">
  <video :src="srcBgVideo" preload="none" autoplay loop muted class="w-full h-full object-cover" @click="popUpMainVideo" />
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full text-white pointer-events-none">
    <slot name="content" />
  </div>
  <div ref="mainRef"
    class="absolute z-30 w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black"
    @click="closeMainVideo">
    <video :src="srcMainVideo" preload="none" autoplay loop muted class="max-w-full" />
  </div>
</div>
</template>

<script lang="ts" setup>
defineProps({
  display: {
    type: Boolean,
    default: false
  },
  srcBgVideo: {
    type: String,
    default: ''
  },
  srcMainVideo: {
    type: String,
    default: ''
  }
})

const mainRef = ref<HTMLElement>()

function popUpMainVideo() {
  if (mainRef.value !== undefined) {
    mainRef.value.style.display = 'flex'
  }
}

function closeMainVideo() {
  if (mainRef.value !== undefined) {
    mainRef.value.style.display = 'none'
  }
}
</script>
