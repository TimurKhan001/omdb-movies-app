export const loadState = (key: string): any => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (key: string, state: any): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    console.error('Could not save state', err)
  }
}
