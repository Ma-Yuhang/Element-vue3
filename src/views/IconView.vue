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
    <H-Icon icon="user-secret" :size="12" />
    <H-Icon icon="bars" :size="14" />
    <H-Icon icon="shield-halved" :size="16" />
    <H-Icon icon="file" :size="18" />
    <H-Icon icon="filter" :size="20" />
    <H-Icon icon="gear" :size="24" />
    <H-Icon icon="barcode" :size="30" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <H-Icon icon="user-secret" rotation="90" :size="20" />
    <H-Icon icon="bars" rotation="270" :size="20" />
    <H-Icon icon="shield-halved" rotation="180" :size="20" />
    <H-Icon icon="file" flip="horizontal" :size="20" />
    <H-Icon icon="filter" flip="vertical" :size="20" />
    <H-Icon icon="folder-open" flip="both" :size="20" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <H-Icon icon="user-secret" :size="20" beat />
    <H-Icon icon="bars" :size="20" beat-fade />
    <H-Icon icon="shield-halved" :size="20" bounce />
    <H-Icon icon="file" :size="20" fade />
    <H-Icon icon="filter" :size="20" flip />
    <H-Icon icon="gear" :size="20" shake />
    <H-Icon icon="barcode" :size="20" spin />
    <H-Icon icon="folder" :size="20" spin spin-reverse />
    <H-Icon icon="folder-open" :size="20" spin-pulse />
  </div>
  <h1 class="row-title">设置颜色(通过type或color)</h1>
  <div class="row">
    <H-Icon icon="user-secret" :size="20" type="primary" />
    <H-Icon icon="bars" :size="20" type="success" />
    <H-Icon icon="shield-halved" :size="20" type="info" />
    <H-Icon icon="file" :size="20" type="warning" />
    <H-Icon icon="filter" :size="20" type="danger" />
    <H-Icon icon="gear" :size="20" color="#e47412" />
    <H-Icon icon="barcode" :size="20" color="#7ec102" />
    <H-Icon icon="folder" :size="20" color="pink" />
    <H-Icon icon="folder-open" :size="20" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
