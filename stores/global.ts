import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', () => {
  const headerHeight = ref<number>(0)
  const displayLoginForm = ref<boolean>(false)
  
  const setHeaderHeight = (height: number) => {
    headerHeight.value = height
  }

  function showLoginForm(value: boolean) {
    displayLoginForm.value = value
  }

  return { headerHeight, setHeaderHeight, displayLoginForm, showLoginForm }
})
