export const KEY = 'game-redux-universal'

const { localStorage } = window

export function getLocalState () {
  const rawValue = localStorage.getItem(KEY)

  if (rawValue == null) {
    return {}
  }

  try {
    return JSON.parse(rawValue) || {}
  } catch (e) {
    console.warn(`Could not parse localStorage.getItem('${KEY}')`)
    throw e
  }
}
