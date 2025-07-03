import Swagger from '@fastify/swagger'
import SwaggerUI from '@fastify/swagger-ui'
import type { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'

type SwaggerPluginOptions = {
  appName: string
  description?: string
  version: string
}

async function swaggerPlugin(fastify: FastifyInstance, { appName, description = '', version }: SwaggerPluginOptions) {
  await fastify.register(Swagger, {
    openapi: {
      openapi: '3.1.0',

      info: {
        title: `${appName} API`,
        description: `${description}`,
        version: version,
      },
    },
  })

  await fastify.register(SwaggerUI, {
    routePrefix: '/api-docs',
    uiConfig: {
      layout: 'BaseLayout',
      syntaxHighlight: {
        activate: true,
        theme: 'monokai',
      },
    },
    logo: undefined,
  })

  fastify.log.info('Swagger is available at /api-docs')
}

export default fp(swaggerPlugin, {
  name: 'swaggerPlugin',
})
