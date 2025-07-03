export const getLoggerByEnv = (env: string, envLogLevel = 'info') => {
  const envToLogger: Record<string, unknown> = {
    development: {
      level: envLogLevel,
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
    },
    production: {
      level: envLogLevel,
      redact: ['req.headers.authorization'],
    },
    test: false,
  }

  return envToLogger[env] || false
}
