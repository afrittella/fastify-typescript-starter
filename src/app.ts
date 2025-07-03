import fastify, { type FastifyServerOptions, type FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import autoload from '@fastify/autoload'
import underPressure from '@fastify/under-pressure'
import { TypeBoxValidatorCompiler, type TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import path from 'node:path'
import type { ServerEnv } from './types'

export const getApp = (env: ServerEnv, options?: FastifyServerOptions) => {
  const app: FastifyInstance = fastify(options)
    .withTypeProvider<TypeBoxTypeProvider>()
    .setValidatorCompiler(TypeBoxValidatorCompiler)

  app.register(cors, {
    origin: false,
  })

  app.register(helmet, {
    global: true,
  })

  app.register(underPressure)

  app.register(autoload, {
    dir: path.join(__dirname, 'plugins'),
    dirNameRoutePrefix: false,
    scriptPattern: new RegExp(/.*plugin.*/),
    ignorePattern: new RegExp(/.*test.*/),
    options: { appName: env.app.name, description: env.app.description, version: env.app.version },
  })

  app.register(autoload, {
    dir: path.join(__dirname, 'routes'),
    dirNameRoutePrefix: false,
    ignorePattern: new RegExp(/.*test.*/),
    scriptPattern: new RegExp(/.*route.*/),
  })

  return app
}
