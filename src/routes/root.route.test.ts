import type { FastifyInstance } from 'fastify'
import { test, type TestContext } from 'node:test'
import { getApp } from '../app'
import env from '../config/config'
import { getLoggerByEnv } from '../utils/envToLogger'

let app: FastifyInstance

test.beforeEach(async () => {
  app = getApp(env, { logger: getLoggerByEnv(env.nodeEnv, env.log.level) })
})

test('"/" route should return 200', async (t: TestContext) => {
  t.plan(1)

  const response = await app.inject({
    method: 'GET',
    url: '/',
  })

  t.assert.strictEqual(response.statusCode, 200, 'returns a status code of 200')
})

test('"/" route should return a json file with a "welcome" message', async (t: TestContext) => {
  t.plan(2)

  const response = await app.inject({
    method: 'GET',
    url: '/',
  })

  const body = response.json()

  t.assert.strictEqual(
    body.message.startsWith('Welcome to'),
    true,
    'returns a json payload with a message starting with "Welcome to"',
  )
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8', 'returns a json')
})

test.afterEach(async () => {
  await app.close()
})
