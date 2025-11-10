import { getApp } from './app'
import env from './config/config'
import { getLoggerByEnv } from './utils/envToLogger'
import { getCloseWithGrace } from './utils/closeWithGrace'

const start = async () => {
  const app = getApp(env, {
    logger: getLoggerByEnv(env.nodeEnv, env.log.level),
    routerOptions: {
      ignoreDuplicateSlashes: true,
    },
  })

  getCloseWithGrace(app, 500)

  try {
    await app.listen({ host: env.server.host, port: env.server.port })
    app.log.info(`Listening on port ${env.server.port}`)
  } catch (e) {
    app.log.error(e)
    process.exit(1)
  }
}

start()
