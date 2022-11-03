<template>
  <div
      draggable="true"
      v-if="docItem"
      :class="['docs__item', 'docs__item--cat', {'is-active': dropdown}]"
      @click="dropdownHandler"
  >
    <app-item :item="docItem" />

    <div
        class="docs__items"
        v-if="items.length"
        :style="`height: ${nestedItemsTotalHeight}px`"
        ref="nestedItems"
    >
      <div
          class="docs__item"
          v-for="item in items.filter(item => item.catId === docItem.id)"
          :key="item.id"
          @click.stop
      >
        <app-item
            :item="item"
            @mousedown="onMouseDown"
            @mouseup="onMouseUp"
            @mousemove="onMouseMove"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppItem from '../AppItem.vue'
import { ref, onMounted } from 'vue'

const props = defineProps({
  docItem: {
    type: Object,
    required: true
  },
  items: {
    type: Array,
    required: false,
    default() {
      return []
    }
  },
  dropdown: {
    type: Boolean,
    required: false,
    default: false
  },
  classList: {
    type: String,
    required: false
  }
})

const dropdown = ref(props.dropdown)
const nestedItems = ref(null)
const nestedItemsTotalHeight = ref(0)
const dropdownHandler = ref(null);

onMounted(() => {
  const collapse = (docItems) => {
    if (dropdown.value) {
      nestedItemsTotalHeight.value = docItems.reduce((acc, item) => {
        acc += item.clientHeight

        return acc - 1
      }, 0)
    } else {
      nestedItemsTotalHeight.value = 0
    }
  }

  if (nestedItems.value) {
    const docItems = Array.from(nestedItems.value.querySelectorAll('.docs__item'))
    collapse(docItems)

    dropdownHandler.value = () => {
      dropdown.value = !dropdown.value
      collapse(docItems)
    }
  }
})

const lkm = ref(false)

// Нажали ЛКМ на кнопке move
const onMouseDown = () => {
  lkm.value = true
  console.log('Mousedown move button')
}

// Движение мыши при нажатой ЛКМ
const onMouseMove = () => {
  if (lkm.value) {
    console.log('Mousemove move button')
  }
}

// Отжали ЛКМ
const onMouseUp = () => {
  lkm.value = false
  console.log('Mouseup move button')
}
</script>
