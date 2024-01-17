<template>
  <i class="h-icon" :class="{ [`h-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup>
import { computed } from 'vue'
import { omit } from 'lodash-es'
import propsObj from './props'
defineOptions({
  name: 'H-Icon'
})
// 接收props
const props = defineProps(propsObj)
const filterProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped></style>
