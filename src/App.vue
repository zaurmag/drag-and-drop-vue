<template>
  <app-page>
    <app-header />
    <app-search />

    <div class="docs">
      <div class="docs__cats">
        <docs-item
            v-for="item in data.cats"
            :key="item.id"
            :doc-item="item"
        />
      </div>
      <div class="docs__items"></div>
    </div>

    <!-- Educations DAD -->
    <div
        class="drop-zone"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
    >
      <div
          v-for="item in listOne"
          :key="item.id"
          class="drag-el"
          :id="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @dragenter.prevent="onEnter($event, item.order)"
          @dragend="dragend"
      >
        {{ item.title + ': ' + item.order }}
      </div>
    </div>
    <div
        class="drop-zone"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
    >
      <div
          v-for="item in listTwo"
          :key="item.id"
          class="drag-el"
          :id="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @dragenter.prevent="onEnter($event, item.order)"
          @dragend="dragend"
      >
        {{ item.title + ': ' + item.order }}
      </div>
    </div>

    <div
        class="drop-zone"
        @drop="onDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent
    >
      <div
          v-for="item in listThree"
          :key="item.id"
          class="drag-el"
          :id="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
          @dragenter.prevent="onEnter($event, item.order)"
          @dragend="dragend"
      >
        {{ item.title + ': ' + item.order }}
      </div>
    </div>
  </app-page>
</template>

<script setup>
import data from './data'
import AppPage from './layouts/AppPage.vue'
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import DocsItem from './components/docs/DocsItem.vue'
import { computed, ref } from 'vue'

// Educations DAD
const items = ref([
  {
    id: 0,
    title: 'Item A',
    order: 1,
    list: 1
  },
  {
    id: 1,
    title: 'Item B',
    order: 2,
    list: 1
  },
  {
    id: 2,
    title: 'Item C',
    order: 1,
    list: 3
  }
])

const startDrag = (evt, item) => {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', item.id)
}

const onEnter = (evt, order) => {
  const removeItemID = +evt.target.id
  const itemID = +evt.dataTransfer.getData('itemID')
  const item = items.value.find(item => item.id === itemID)

  if (removeItemID !== itemID) {
    const removeItem = items.value.find(item => item.id === removeItemID)
    removeItem.order = item.order
    item.order = order
  } else {
    // item.order = items.value.length - 1
  }
}

const onDrop = (evt, list) => {
  const itemID = +evt.dataTransfer.getData('itemID')
  const item = items.value.find((item) => item.id === itemID)
  item.list = list
}

const dragend = (evt) => {
  evt.dataTransfer.clearData()
}

const listOne = computed(() => {
  return items.value
      .filter((item) => item.list === 1)
      .sort((a, b) => a.order - b.order)
})

const listTwo = computed(() => {
  return items.value
      .filter((item) => item.list === 2)
      .sort((a, b) => a.order - b.order)
})

const listThree = computed(() => {
  return items.value
      .filter((item) => item.list === 3)
      .sort((a, b) => a.order - b.order)
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
  cursor: move;
}
</style>
