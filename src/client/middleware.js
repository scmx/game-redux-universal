export default function clientMiddleware () {
  return store => {
    return next => {
      return action => next(action)
    }
  }
}
