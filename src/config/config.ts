import { validateEnvironment } from '../utils/validateEnvironment'
import { type BasicEnv, basicEnv, NodeEnv, type ServerEnv } from '../types'

const _getEnvFile = (nodeEnv: string) => {
  switch (nodeEnv) {
    case 'development':
      return '.env.local'

    case 'production':
      return '.env.production'

    case 'test':
      return '.env.test'

    default:
      return '.env'
  }
}

const env = validateEnvironment<BasicEnv>(_getEnvFile(process.env.NODE_ENV || 'local'), basicEnv)

export default {
  nodeEnv: env.NODE_ENV,
  isDev: env.NODE_ENV === NodeEnv.development,
  isProd: env.NODE_ENV === NodeEnv.production,
  app: {
    name: env.APP_NAME,
    version: env.APP_VERSION,
    description: env.APP_DESCRIPTION,
  },
  log: {
    level: env.LOG_LEVEL,
  },
  server: {
    host: env.HOST,
    port: env.PORT,
  },
} satisfies ServerEnv
