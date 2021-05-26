export const setLocalStorage = (data: string, title: string): void => {
  localStorage.setItem(title, data)
}

export const removeFromLocalStorage = (userInfo: string): void => {
  localStorage.removeItem(userInfo)
}

export const isLogin = (): boolean => {
  if (localStorage.getItem('userInfo')) {
    return true
  }

  return false
}
