<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <HIcon icon="user-secret" />
    <HIcon icon="bars" />
    <HIcon icon="shield-halved" />
    <HIcon icon="file" />
    <HIcon icon="filter" />
    <HIcon icon="gear" />
    <HIcon icon="barcode" />
    <HIcon icon="folder" />
    <HIcon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <HIcon icon="user-secret" :size="12" />
    <HIcon icon="bars" :size="14" />
    <HIcon icon="shield-halved" :size="16" />
    <HIcon icon="file" :size="18" />
    <HIcon icon="filter" :size="20" />
    <HIcon icon="gear" :size="24" />
    <HIcon icon="barcode" :size="30" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <HIcon icon="user-secret" rotation="90" :size="20" />
    <HIcon icon="bars" rotation="270" :size="20" />
    <HIcon icon="shield-halved" rotation="180" :size="20" />
    <HIcon icon="file" flip="horizontal" :size="20" />
    <HIcon icon="filter" flip="vertical" :size="20" />
    <HIcon icon="folder-open" flip="both" :size="20" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <HIcon icon="user-secret" :size="20" beat />
    <HIcon icon="bars" :size="20" beat-fade />
    <HIcon icon="shield-halved" :size="20" bounce />
    <HIcon icon="file" :size="20" fade />
    <HIcon icon="filter" :size="20" flip />
    <HIcon icon="gear" :size="20" shake />
    <HIcon icon="barcode" :size="20" spin />
    <HIcon icon="folder" :size="20" spin spin-reverse />
    <HIcon icon="folder-open" :size="20" spin-pulse />
  </div>
  <h1 class="row-title">设置颜色(通过type或color)</h1>
  <div class="row">
    <HIcon icon="user-secret" :size="20" type="primary" />
    <HIcon icon="bars" :size="20" type="success" />
    <HIcon icon="shield-halved" :size="20" type="info" />
    <HIcon icon="file" :size="20" type="warning" />
    <HIcon icon="filter" :size="20" type="danger" />
    <HIcon icon="gear" :size="20" color="#e47412" />
    <HIcon icon="barcode" :size="20" color="#7ec102" />
    <HIcon icon="folder" :size="20" color="pink" />
    <HIcon icon="folder-open" :size="20" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
