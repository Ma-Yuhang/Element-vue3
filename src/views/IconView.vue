<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <H-Icon icon="user-secret" />
    <H-Icon icon="bars" />
    <H-Icon icon="shield-halved" />
    <H-Icon icon="file" />
    <H-Icon icon="filter" />
    <H-Icon icon="gear" />
    <H-Icon icon="barcode" />
    <H-Icon icon="folder" />
    <H-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <H-Icon icon="user-secret" size="2xs" />
    <H-Icon icon="bars" size="xs" />
    <H-Icon icon="shield-halved" size="sm" />
    <H-Icon icon="file" size="lg" />
    <H-Icon icon="filter" size="xl" />
    <H-Icon icon="gear" size="2xl" />
    <H-Icon icon="barcode" size="2x" />
    <H-Icon icon="folder" size="3x" />
    <H-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <H-Icon icon="user-secret" rotation="90" size="xl" />
    <H-Icon icon="bars" rotation="270" size="xl" />
    <H-Icon icon="shield-halved" rotation="180" size="xl" />
    <H-Icon icon="file" flip="horizontal" size="xl" />
    <H-Icon icon="filter" flip="vertical" size="xl" />
    <H-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <H-Icon icon="user-secret" size="xl" beat />
    <H-Icon icon="bars" size="xl" beat-fade />
    <H-Icon icon="shield-halved" size="xl" bounce />
    <H-Icon icon="file" size="xl" fade />
    <H-Icon icon="filter" size="xl" flip />
    <H-Icon icon="gear" size="xl" shake />
    <H-Icon icon="barcode" size="xl" spin />
    <H-Icon icon="folder" size="xl" spin spin-reverse />
    <H-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <H-Icon icon="user-secret" size="xl" type="primary" />
    <H-Icon icon="bars" size="xl" type="success" />
    <H-Icon icon="shield-halved" size="xl" type="info" />
    <H-Icon icon="file" size="xl" type="warning" />
    <H-Icon icon="filter" size="xl" type="danger" />
    <H-Icon icon="gear" size="xl" color="#e47412" />
    <H-Icon icon="barcode" size="xl" color="#7ec102" />
    <H-Icon icon="folder" size="xl" color="pink" />
    <H-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
