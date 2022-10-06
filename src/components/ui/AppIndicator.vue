<template>
  <div :class="['indicator', {[`indicator--${colorTheme}`]: colorTheme}]"></div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  colorTheme: {
    type: String,
    required: true,
    validator(value) {
      return ['cyan', 'yellow', 'orange', 'blue', 'gray'].includes(value)
    }
  }
})
</script>
