<template>
  <div class="docs__item-row">
    <div
        class="docs__item-icon"
        v-if="item.type === 'cat'"
    >
      <svg-icon name="i_chevron-down" />
    </div>

    <div class="docs__item-tlt">{{ item.title }}</div>

    <div class="docs__item-status" v-if="item.status?.length">
      <app-indicator
          v-for="color in item.status"
          :colorTheme="color"
          :key="color"
      />
    </div>

    <div class="docs__item-req" v-if="item.required">Обязательный</div>
    <div class="docs__item-txt">{{ item.text }}</div>

    <div class="docs__item-buttons">
      <app-button icon="i_pen" class-list="docs__item-btn--ed" />
      <app-button icon="i_trash" class-list="docs__item-btn--del" />
      <app-button
          icon="i_move"
          class-list="docs__item-btn--mv"
          @mousedown="$emit('mousedown')"
          @mouseup="$emit('mouseup')"
          @mousemove="$emit('mousemove')"
      />
    </div>
  </div>
</template>

<script setup>
import AppIndicator from './ui/AppIndicator.vue'
import AppButton from './ui/AppButton.vue'
import SvgIcon from './ui/SvgIcon.vue'

defineEmits(['click', 'mousedown', 'mouseup', 'mousemove'])

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
