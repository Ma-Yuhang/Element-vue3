<template>
  <div>
    <h1 class="row-title">设置类型</h1>
    <h3 class="row-title">使用 type、plain、round、circle、icon 和 size 来定义按钮的样式</h3>
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
      <H-Button circle>
        <H-Icon icon="user"></H-Icon>
      </H-Button>
      <H-Button type="primary" loading>Loading</H-Button>
      <H-Button type="success">
        Loading
        <H-Icon icon="spinner" spin></H-Icon>
      </H-Button>
      <H-Button type="warning" size="small">Small</H-Button>
      <H-Button type="danger" size="large">Large</H-Button>
      <H-Button type="info" icon="user">
        User
      </H-Button>
    </div>
  </div>
</template>

<script setup>
import HButton from '@/components/Button'
</script>

<style lang="scss" scoped></style>
