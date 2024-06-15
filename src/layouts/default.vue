<template>
  <div class="w-[100%] h-[100%] flex-col">
    <div class="w-[100%] h-70px flex flex-row items-center">
      <AppHeader />
    </div>
    <div class="w-[100%] flex-1">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
