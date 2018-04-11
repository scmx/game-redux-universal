export default function clientMiddlewareFactory () {
  return function clientMiddleware (store) {
    return next => {
      return action => next(action)
    }
  }
}
