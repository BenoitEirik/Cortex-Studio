<template>
<div :class="{ '!block': display }" class="hidden sticky z-20 inset-0 w-screen h-screen bg-black">
  <div
    class="absolute w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer"
    @click.stop="showPopUp()">
    <video :src="srcMainVideo" preload="none" autoplay loop muted class="max-w-full" />
  </div>
  <div ref="popUpRef"
    class="absolute z-30 hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full w-screen max-h-full h-full text-white cursor-pointer"
    @click="closePopUp()">
    <video :src="srcBgVideo" preload="none" autoplay loop muted class="w-full h-full object-cover" />
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pt-8 w-[800px] max-w-full max-h-screen overflow-auto">
      <slot name="content" />
    </div>
  </div>
  <div class="absolute z-30 top-0 left-0 cursor-pointer" title="Fermer" @click.stop="$emit('close', false)">
    <Icon name="i-iconoir-xmark" color="white" class="close_icon m-2" size="2rem" />
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

defineEmits<{
  close: [value: Boolean]
}>()

const popUpRef = ref<HTMLElement>()

function showPopUp() {
  if (popUpRef.value !== undefined) {
    popUpRef.value.style.display = 'block'
  }
}

function closePopUp() {
  console.log('tgdfdhjkbfsfhsgbyudiqky')
  if (popUpRef.value !== undefined) {
    popUpRef.value.style.display = 'none'
  }
}
</script>

<style lang="scss" scoped>
.close_icon {
  filter: drop-shadow(0 0 1px black);
}
</style>
