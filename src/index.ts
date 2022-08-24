import pino from 'pino'
import { getApp } from './app'

const server = getApp({
    logger: pino({ level: 'debug' }),
})

const start = async () => {
    try {
        await server.listen({
            port: 8080,
        })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()
