import createDevMiddleware from 'webpack-dev-middleware'
// import createHotMiddleware from 'webpack-hot-middleware'
import createWebSocketServer from 'socket.io'
import createWebpackCompiler from 'webpack'
import express from 'express'
import path from 'path'
import webpackConfig from './webpack.config.js'
import { createServer } from 'http'

const webpackCompiler = createWebpackCompiler(webpackConfig)

const app = express()
const server = createServer(app)
const io = createWebSocketServer(server)

app.set('port', process.env.PORT || 3000)
app.set('host', process.env.HOST || '0.0.0.0')

app.use(
  createDevMiddleware(webpackCompiler, {
    stats: 'minimal',
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
)

// app.use(createHotMiddleware(webpackCompiler))

app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', socket => {
  console.log('Connection')
  socket.emit('message', 'Hello world')
})

server.listen(app.get('port'), app.get('host'), () => {
  console.log(`Listening on http://${app.get('host')}:${app.get('port')}`)
})