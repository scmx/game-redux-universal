import express from 'express'
import path from 'path'
import createWebpackCompiler from 'webpack'
import createDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.js'

const webpackCompiler = createWebpackCompiler(webpackConfig)

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('host', process.env.HOST || '0.0.0.0')

app.use(
  createDevMiddleware(webpackCompiler, {
    stats: 'minimal',
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
)

app.use(express.static(path.join(__dirname, '../../public')))

export default app
