<template>
  <i class="h-icon" :class="{ [`h-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filterProps" :style="{ 'font-size': size }" />
  </i>
</template>

<script setup>
import { computed } from 'vue'
import { omit } from 'lodash-es'
import propsObj from './props'
defineOptions({
  name: 'HIcon'
})
// 接收props
const props = defineProps(propsObj)
const filterProps = computed(() => omit(props, ['type', 'size']))
</script>

<style lang="scss" scoped>
.h-icon {
  --h-icon-color: inherit;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: var(--h-icon-color);
  font-size: inherit;
}

@each $val in primary, info, success, warning, danger {
  // 当你挂上 .h-icon--primary 类之后
  // 你的 --h-icon-color 这个变量的值就会变成 var(--h-color-primary)
  .h-icon--#{$val} {
    --h-icon-color: var(--h-color-#{$val});
  }
}
</style>
