<template>
  <div>
    <ListItem />
    <div v-focus>focus</div>
    <strong>姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }}</strong>
    <div>数字{{ count }}</div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore'

const { count } = useCounter()
const { userInfo } = useUserStore()
// console.log(userInfo);
</script>
