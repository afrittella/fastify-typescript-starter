import { test, type TestContext } from 'node:test'
import { getApp } from './app'
import env from './config/config'
import type { FastifyInstance } from 'fastify'
import { getLoggerByEnv } from './utils/envToLogger'

let app: FastifyInstance

test.beforeEach(async () => {
  app = getApp(env, { logger: getLoggerByEnv(env.nodeEnv, env.log.level) })
})

test('swagger plugin is loaded', async (t: TestContext) => {
  t.plan(1)

  const response = await app.inject({
    method: 'GET',
    url: '/api-docs',
  })

  t.assert.strictEqual(response.statusCode, 200, 'swagger endpoint returns a status code of 200')
})

test.afterEach(async () => {
  await app.close()
})
