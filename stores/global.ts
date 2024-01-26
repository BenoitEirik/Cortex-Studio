import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const headerHeight = ref<number>(0)
  
  const setHeaderHeight = (height: number) => {
    headerHeight.value = height
    console.log('height:',height)
  }

  return { headerHeight, setHeaderHeight }
})
