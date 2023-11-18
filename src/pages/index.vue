<template>
  <div>
    <Logos />
    <Examples />
    <h1>第一个页面</h1>
    <NuxtLink to="/list" target="_blank">进入列表页</NuxtLink>
    <div>数字：{{ count }}</div>
    <el-button type="success" @click="handleInc">加</el-button>
    <el-button type="primary" @click="dec()">减</el-button>
    <br />
    <br />
    <NuxtLink to="/user-admin/111" target="_blank">进入管理员 id 为 111 的用户中心</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { count, inc, dec } = useCounter()

const handleInc = () => {
  console.log('count====>', count.value)
  inc()
}
</script>
