<template>
  <div>
    <h1 class="row-title">设置类型</h1>
    <h3 class="row-title">使用 type、plain、round、circle、icon、disabled 和 size 来定义按钮的样式</h3>
    <div class="row">
      <H-Button>Default</H-Button>
      <H-Button type="primary">Primary</H-Button>
      <H-Button type="success">Primary</H-Button>
      <H-Button type="warning">Warning</H-Button>
      <H-Button type="danger">Danger</H-Button>
      <H-Button type="info">Info</H-Button>
    </div>
    <div class="row">
      <H-Button plain>Plain</H-Button>
      <H-Button type="primary" plain>Primary</H-Button>
      <H-Button type="success" plain>Success</H-Button>
      <H-Button type="warning" plain>Warning</H-Button>
      <H-Button type="danger" plain>Danger</H-Button>
      <H-Button type="info" plain>Info</H-Button>
    </div>
    <div class="row">
      <H-Button round>Default</H-Button>
      <H-Button type="primary" round>Primary</H-Button>
      <H-Button type="success" round>Success</H-Button>
      <H-Button type="warning" round>Warning</H-Button>
      <H-Button type="danger" round>Danger</H-Button>
      <H-Button type="info" round>Info</H-Button>
    </div>
    <div class="row">
      <H-Button disabled>Default</H-Button>
      <H-Button type="primary" disabled>Primary</H-Button>
      <H-Button type="success" disabled>Success</H-Button>
      <H-Button type="warning" disabled>Warning</H-Button>
      <H-Button type="danger" disabled>Danger</H-Button>
      <H-Button type="info" disabled>Info</H-Button>
    </div>
    <div class="row">
      <H-Button circle>
        <H-Icon icon="user"></H-Icon>
      </H-Button>
      <H-Button circle icon="user"></H-Button>
      <H-Button type="primary" loading icon="user">Loading</H-Button>
      <H-Button type="success">
        Loading
        <H-Icon icon="spinner" spin></H-Icon>
      </H-Button>
      <H-Button type="warning" size="small">Small</H-Button>
      <H-Button type="danger" size="large">Large</H-Button>
      <H-Button type="info" icon="user" circle ref="btnRef" @click="handleClick"></H-Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HButton from '@/components/Button'

const btnRef = ref(null)
const handleClick = () => {
  console.log(btnRef.value.ref)
}
</script>

<style lang="scss" scoped></style>
