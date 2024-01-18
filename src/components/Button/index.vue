<template>
  <button class="h-button" :class="classes">
    <H-Icon
      v-if="props.icon || props.loading"
      class="h-icon"
      :icon="props.icon || 'spinner'"
      :spin="props.loading"
    ></H-Icon>
    <span><slot /></span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import propsObj from './props'
import { pick } from 'lodash-es'
defineOptions({
  name: 'H-Button'
})
const props = defineProps(propsObj)

const classes = computed(() => {
  // 筛选出 plain round circle disabled
  const shapeObj = pick(props, ['plain', 'round', 'circle', 'disabled'])
  const typeArr = []
  for (const [type, boolean] of Object.entries(shapeObj)) {
    boolean && typeArr.push(type)
  }
  // console.log(shapeArr);
  const isTypeArr = typeArr.map((type) => {
    return `is-${type}`
  })
  // 选出type
  let type = props.type
  type && (type = `h-button--${type}`)
  // 选出size
  let size = props.size
  size && (size = `h-button--${size}`)
  const result = [...isTypeArr, type, size].filter(Boolean)
  // console.log(result, 'result')
  return result
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
