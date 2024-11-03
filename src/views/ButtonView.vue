<template>
  <div>
    <h1 class="row-title">设置类型</h1>
    <h3 class="row-title">使用 type、plain、round、circle、icon、disabled 和 size 来定义按钮的样式</h3>
    <div class="row">
      <HButton>Default</HButton>
      <HButton type="primary">Primary</HButton>
      <HButton type="success">Primary</HButton>
      <HButton type="warning">Warning</HButton>
      <HButton type="danger">Danger</HButton>
      <HButton type="info">Info</HButton>
    </div>
    <div class="row">
      <HButton plain>Plain</HButton>
      <HButton type="primary" plain>Primary</HButton>
      <HButton type="success" plain>Success</HButton>
      <HButton type="warning" plain>Warning</HButton>
      <HButton type="danger" plain>Danger</HButton>
      <HButton type="info" plain>Info</HButton>
    </div>
    <div class="row">
      <HButton round>Default</HButton>
      <HButton type="primary" round>Primary</HButton>
      <HButton type="success" round>Success</HButton>
      <HButton type="warning" round>Warning</HButton>
      <HButton type="danger" round>Danger</HButton>
      <HButton type="info" round>Info</HButton>
    </div>
    <div class="row">
      <HButton disabled>Default</HButton>
      <HButton type="primary" disabled>Primary</HButton>
      <HButton type="success" disabled>Success</HButton>
      <HButton type="warning" disabled>Warning</HButton>
      <HButton type="danger" disabled>Danger</HButton>
      <HButton type="info" disabled>Info</HButton>
    </div>
    <div class="row">
      <HButton circle>
        <HIcon icon="user"></HIcon>
      </HButton>
      <HButton circle icon="user"></HButton>
      <HButton type="primary" loading icon="user">Loading</HButton>
      <HButton type="success">
        Loading
        <HIcon icon="spinner" spin></HIcon>
      </HButton>
      <HButton type="warning" size="small">Small</HButton>
      <HButton type="danger" size="large">Large</HButton>
      <HButton type="info" icon="user" circle ref="btnRef" @click="handleClick"></HButton>
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
