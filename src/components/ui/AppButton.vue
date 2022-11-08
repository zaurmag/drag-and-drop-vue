<template>
  <button
      :class="['btn', 'docs__item-btn', classList]"
      type="button"
      @click="$emit('click')"
  >
    <svg-icon :name="icon" />

    <slot />
  </button>
</template>

<script setup>
import SvgIcon from './SvgIcon.vue'
defineEmits(['click'])

defineProps({
  classList: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  }
})
</script>
