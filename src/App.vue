<template>
  <app-page>
    <app-header />
    <app-search />

    <div class="docs">
      <!-- Categories -->
      <div
          class="docs__cats"
      >
      <!--
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
       -->
        <cat-item
            v-for="item in cats"
            :key="item.id"
            :doc-item="item"
            :items="items"
            :data-cat="item.id"
            :dropdown="dropdown"
        />
      </div>
      <!--
        @dragstart="startDrag($event, item)"
        @dragenter.prevent="onEnter($event, item.order)"
        @dragend="dragend"
       -->

      <!-- Items -->
      <div class="docs__items">
        <div
            draggable="true"
            class="docs__item"
            v-for="item in items.filter(item => !item.catId)"
            :key="item.id"
            @click.stop
        >
          <app-item :item="item" />
        </div>
        <!--
         @dragstart="startDrag($event, item)"
          @dragenter.prevent="onEnter($event, item.order)"
          @dragend="dragend"
         -->
      </div>
    </div>
  </app-page>
</template>

<script setup>
import { cats, items } from './data'
import AppPage from './layouts/AppPage.vue'
import AppHeader from './components/AppHeader.vue'
import AppSearch from './components/AppSearch.vue'
import CatItem from './components/docs/CatItem.vue'
import AppItem from './components/AppItem.vue'
import { ref } from 'vue'

const dropdown = ref(false)

const startDrag = (evt, item) => {
  console.log('onStartDrag: ', evt)
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', item.id)
}

const onEnter = (evt) => {
  console.log('onEnter: ', evt)
  // const removeItemID = +evt.target.id
  // const itemID = +evt.dataTransfer.getData('itemID')
  // const item = items.find(item => item.id === itemID)

  // if (removeItemID !== itemID) {
  //   const removeItem = items.find(item => item.id === removeItemID)
  //   removeItem.order = item.order
  //   item.order = order
  // }
}

const onDrop = (evt) => {
  console.log('onDrop: ', evt)
  // const itemID = +evt.dataTransfer.getData('itemID')
  // const item = items.value.find((item) => item.id === itemID)
  // item.list = list

  // dropdown.value = true
  // console.log(dropdown.value)
}

const dragend = (evt) => {
  console.log('onDragend: ', evt)
  evt.dataTransfer.clearData()
}
</script>
