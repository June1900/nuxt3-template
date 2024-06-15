<script setup lang="ts">
definePageMeta({
  middleware: [
    // function (to, from) {
    //   // Custom inline middleware
    //   console.log('to---->', to)
    //   console.log('from---->', from)
    // },
    'auth'
  ]
})
</script>

<template>
  <div>api页面</div>
</template>

<style scoped lang="scss"></style>
