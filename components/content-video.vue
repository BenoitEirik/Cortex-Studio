<template>
<article :id="props.id" class="px-4 pt-[var(--var-header-height)] w-full flex md:flex-row flex-col justify-evenly gap-8 items-start">
  <h3 class="md:hidden block px-2 py-1 lg:text-4xl md:text-3xl text-2xl font-['ClashDisplay-Bold'] bg-gray-800 text-white"
    :class="{ 'self-start': layout === 'left', 'self-end': layout === 'right', 'text-left': layout === 'left', 'text-right': layout === 'right' }">
    {{ props.h3 }}</h3>
  <div class="basis-1/2 md:mb-10 max-w-[800px] w-full bg-gray-900 sm:border-4 border-2 border-gray-800 overflow-hidden video-common lg:rounded-2xl md:rounded-xl rounded-lg"
    :class="{ video_perspective_left: layout === 'left', video_perspective_right: layout === 'right', 'md:order-2 order-2': layout === 'right' }">
    <video v-if="props.srcVideo !== ''" ref="videoRef" :src="props.srcVideo" preload="none" muted loop class="w-full">{{
      props.alt }}</video>
    <img v-if="props.srcImg !== ''" :src="props.srcImg" :alt="props.alt" class="w-full" />
    <slot name="rawSrc" />
  </div>
  <div class="basis-1/2 max-w-[800px] flex flex-col gap-8" :class="{ 'md:order-1 order-2': layout === 'right' }">
    <h3 class="md:block hidden px-2 py-1 lg:text-4xl md:text-3xl text-2xl font-['ClashDisplay-Bold'] bg-gray-800 text-white"
      :class="{ 'self-start': layout === 'left', 'self-end': layout === 'right', 'text-left': layout === 'left', 'text-right': layout === 'right' }">
      {{ props.h3 }}</h3>
    <h4 class="font-['ClashDisplay-Bold'] lg:text-3xl md:text-2xl text-xl"
      :class="{ 'self-start': layout === 'left', 'self-end': layout === 'right', 'text-left': layout === 'left', 'text-right': layout === 'right' }">
      {{ props.h4 }}</h4>
    <slot name="content" />
  </div>
</article>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  layout: {
    type: String,
    default: 'left'
  },
  srcVideo: {
    type: String,
    default: ''
  },
  srcImg: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  h3: {
    type: String,
    default: ''
  },
  h4: {
    type: String,
    default: ''
  },
})

const videoRef = ref<HTMLMediaElement>()

watch(useElementVisibility(videoRef), (value) => playVideoFromRef(videoRef, value))

function playVideoFromRef(video: Ref<HTMLMediaElement | undefined>, value: boolean) {
  if (value) {
    video.value?.play()
  } else {
    video.value?.pause()
  }
}
</script>

<style lang="scss" scoped>
.video-common {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;
}

.video_perspective_left {
  @screen md {
    transform: perspective(1500px) rotateY(15deg);

    &:hover {
      transform: perspective(3000px) rotateY(5deg);
    }
  }
}

.video_perspective_right {
  @screen md {
    transform: perspective(1500px) rotateY(-15deg);

    &:hover {
      transform: perspective(3000px) rotateY(5deg);
    }
  }
}
</style>
