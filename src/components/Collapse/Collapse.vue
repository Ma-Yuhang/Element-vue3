<template>
  <div class="h-collapse">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'
import { collapseProps, collapseContextKey } from './props'
defineOptions({
  name: 'HCollapse'
})
const props = defineProps(collapseProps)
const emit = defineEmits(['update:modelValue', 'change'])

const activeNames = ref(props.modelValue)

const itemClickHandle = (name) => {
  if (props.accordion) {
    if (activeNames.value.includes(name)) {
      activeNames.value = []
    } else {
      activeNames.value = [name]
    }
  } else {
    if (activeNames.value.includes(name)) {
      activeNames.value = activeNames.value.filter((item) => item !== name)
    } else {
      activeNames.value.push(name)
    }
  }
  emit('update:modelValue', activeNames.value)
  emit('change', activeNames.value)
}
provide(collapseContextKey, {
  activeNames,
  itemClickHandle
})
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
