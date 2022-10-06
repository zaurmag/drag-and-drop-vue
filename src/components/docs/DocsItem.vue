<template>
  <div v-if="docItem" :class="['docs__item', {'docs__item--cat': docItem.type === 'cat'}, classList]">
    <app-item :item="docItem" />

    <div class="docs__items" v-if="docItem.items.length">
      <div
          class="docs__item"
          v-for="item in docItem.items"
          :key="item.id"
      >
        <div class="docs__item-row">
          <app-item :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppItem from '../AppItem.vue'
import { defineProps } from 'vue'

defineProps({
  docItem: {
    type: Object,
    required: true
  },
  classList: {
    type: String,
    required: false
  }
})

</script>
