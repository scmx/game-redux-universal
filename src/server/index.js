import createWebSocketServer from 'socket.io'
import { createServer } from 'http'
import app from './app'
import createStore from './createStore'

const server = createServer(app)
const io = createWebSocketServer(server)

createStore(io)

server.listen(app.get('port'), app.get('host'), () => {
  console.log(`Listening on http://${app.get('host')}:${app.get('port')}`)
})
