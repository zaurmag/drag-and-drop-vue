<template>
  <div
      v-if="docItem"
      :class="[
        'docs__item',
        {'docs__item--cat': docItem.type === 'cat'},
        {'is-active': dropdown},
        classList
      ]"
  >
    <app-item :item="docItem" @click="dropdownHandler" />

    <div
        class="docs__items"
        v-if="docItem?.items?.length"
        :style="`height: ${nestedItemsTotalHeight}px`"
        ref="nestedItems"
    >
      <div
          class="docs__item"
          v-for="item in docItem.items"
          :key="item.id"
      >
        <app-item :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppItem from '../AppItem.vue'
import { ref, onMounted } from 'vue'

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

const dropdown = ref(false)
const nestedItems = ref(null)
const nestedItemsTotalHeight = ref(0)
const dropdownHandler = ref(null);

onMounted(() => {
  if (nestedItems.value) {
    const docItems = Array.from(nestedItems.value.querySelectorAll('.docs__item'))

    dropdownHandler.value = () => {
      if (!dropdown.value) {
        nestedItemsTotalHeight.value = docItems.reduce((acc, item) => {
          acc += item.clientHeight

          return acc - 1
        }, 0)
      } else {
        nestedItemsTotalHeight.value = 0
      }

      dropdown.value = !dropdown.value
    }
  }
})
</script>
