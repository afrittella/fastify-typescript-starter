import type { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { Type } from '@sinclair/typebox'
import type { FastifyInstance } from 'fastify'

const rootRoute: FastifyPluginAsyncTypebox = async (fastify: FastifyInstance) => {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: Type.Object({
            message: Type.String(),
          }),
        },
      },
    },
    async (_) => {
      return { message: 'Welcome to fastify-typescript-starter' }
    },
  )
}

export default rootRoute
