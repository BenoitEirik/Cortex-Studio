<template>
<ul v-if="props.depthIndex === props.index"
  class="p-8 max-w-7xl w-full grid lg:grid-cols-2 grid-cols-1 gap-8 bg-[var(--var-color-bg)] rounded-3xl border-2 border-gray-800" @pointerover.stop="">
  <slot />
</ul>
</template>

<script lang="ts" setup>
const props = defineProps({
  index: {
    type: String,
    default: 'none1'
  },
  depthIndex: {
    type: String,
    default: 'none2'
  }
})
</script>
