<template>
  <button
    ref="_ref"
    class="h-button"
    :class="classes"
    :disabled="disabled || loading"
  >
    <HIcon v-if="loading" :icon="'spinner'" spin />
    <HIcon v-if="!loading && icon" :icon="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import propsObj from './props'
import { pick } from 'lodash-es'
defineOptions({
  name: 'HButton'
})
const props = defineProps(propsObj)
const _ref = ref(null)
// 向外暴露出ref
defineExpose({
  ref: _ref
})

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
  if (props.loading) {
    isTypeArr.push('is-disabled')
  }
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
