<template>
  <!-- 外层容器 -->
  <div
    class="h-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- 标题部分 -->
    <div
      class="h-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="itemClickHandle(name)"
    >
      <slot name="title">{{ title }}</slot>
      <!-- 右侧的图标 -->
      <HIcon icon="angle-right" class="header-angle" />
    </div>
    <!-- 内容部分 -->
    <Transition name="slide" v-on="transitionEvents">
      <div class="h-collapse-item__wrapper" v-show="isActive">
        <div class="h-collapse-item__content" :id="`item-content-${title}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { collapseItemProps, collapseContextKey } from './props.js'
defineOptions({
  name: 'HCollapseItem'
})
const props = defineProps(collapseItemProps)
const collapseContext = inject(collapseContextKey)

const isActive = computed(() => {
  return collapseContext.activeNames.value.includes(props.name)
})

const itemClickHandle = (name) => {
  if (props.disabled) return
  collapseContext.itemClickHandle(name)
}
// 在这个对象里面，会指定过渡开始和结束时的不同样式
const transitionEvents = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style lang="scss" scoped>
@import url(./style.scss);
</style>
