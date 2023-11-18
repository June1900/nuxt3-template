import { defineStore } from 'pinia'

const USER_INFO = {
  userName: '测试',
  id: 1,
  sex: '男'
}

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO)

  return {
    userInfo
  }
})
