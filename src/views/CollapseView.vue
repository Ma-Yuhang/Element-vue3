<template>
  <div>
    <HCollapse v-model="data" @change="changeHandle">
      <HCollapseItem title="标题1" name="1">
        <template #title>
          <button>标题1</button>
        </template>
        内容1
      </HCollapseItem>
      <HCollapseItem title="标题2" name="2" disabled> 内容2 </HCollapseItem>
      <HCollapseItem title="标题3" name="3"> 内容3 </HCollapseItem>
    </HCollapse>
  </div>
</template>

<script setup>
import HCollapse from '@/components/Collapse/Collapse.vue'
import HCollapseItem from '@/components/Collapse/CollapseItem.vue'
import { ref } from 'vue'

const data = ref(['2'])

const changeHandle = (val) => {
  console.log(val, 'val')
}
</script>

<style lang="scss" scoped></style>
