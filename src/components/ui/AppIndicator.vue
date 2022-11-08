<template>
  <div :class="['indicator', {[`indicator--${colorTheme}`]: colorTheme}]"></div>
</template>

<script setup>
defineProps({
  colorTheme: {
    type: String,
    required: true,
    validator(value) {
      return ['cyan', 'yellow', 'orange', 'blue', 'gray', 'red'].includes(value)
    }
  }
})
</script>
