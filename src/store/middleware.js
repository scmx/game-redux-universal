import { apiRequestMiddleware, apiResponseMiddleware } from './api/middleware'
import clientMiddleware from './client/middleware'
import serverMiddleware from './server/middleware'

const storageMiddleware = configuredMiddleware => configuredMiddleware
const loggerMiddleware = configuredMiddleware => configuredMiddleware

export {
  apiRequestMiddleware,
  apiResponseMiddleware,
  clientMiddleware,
  serverMiddleware,
  storageMiddleware,
  loggerMiddleware
}
