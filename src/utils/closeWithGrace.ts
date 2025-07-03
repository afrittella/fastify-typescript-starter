import type { FastifyInstance } from 'fastify'
import closeWithGrace from 'close-with-grace'

export const getCloseWithGrace = (app: FastifyInstance, delay = 200) =>
  closeWithGrace({ delay }, async ({ signal, err }) => {
    if (err) {
      app.log.error({ err }, 'server closing with error')
    } else {
      app.log.info(`${signal} received, server closing`)
    }
    await app.close()
  })
