import fastify, { FastifyServerOptions } from 'fastify'
import fastifyCors from 'fastify-cors'

export const getApp = (opts?: FastifyServerOptions) => {
    const app = fastify(opts)

    app.register(fastifyCors)

    app.route({
        method: 'GET',
        url: '/',
        handler: async (request, reply) => {
            reply.send({ message: 'Welcome' })
        },
    })

    return app
}
