<template>
  <el-input-number v-model="count" :min="1" :max="100000000" />
</template>

<script setup lang="ts">
const { count } = useCounter()
</script>
