<template>
  <button
      :class="['btn', 'docs__item-btn', classList]"
      type="button"
      @click="$emit('click')"
  >
    <svg v-if="icon" :class='`icon icon-${icon}`'>
      <use :xlink:href="`src/assets/images/sprite.svg#${icon}`"></use>
    </svg>

    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
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

defineEmits(['click'])
</script>
