import { test, type TestContext } from 'node:test'
import { getApp } from '../app'
import env from '../config/config'
import type { FastifyInstance } from 'fastify'
import { getLoggerByEnv } from '../utils/envToLogger'

let app: FastifyInstance

test.beforeEach(async () => {
  app = getApp(env, { logger: getLoggerByEnv(env.nodeEnv, env.log.level) })
})

test('POST example route should return 201', async (t: TestContext) => {
  t.plan(1)

  const response = await app.inject({
    method: 'POST',
    url: '/example',
    body: {
      foo: 'test',
    },
  })

  t.assert.strictEqual(response.statusCode, 201, 'returns a status code of 201')
})

test('POST example route should return the "foo" variable in the json body', async (t: TestContext) => {
  t.plan(2)

  const response = await app.inject({
    method: 'POST',
    url: '/example',
    body: {
      foo: 'test',
    },
  })

  t.assert.strictEqual(
    response.body,
    JSON.stringify({ message: 'Your foo variable is "test"' }),
    'returns a json payload with a message starting with the "foo" variable',
  )
  t.assert.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8', 'returns a json')
})

test('POST example with the wrong body should return a status code of 400', async (t: TestContext) => {
  t.plan(1)

  const response = await app.inject({
    method: 'POST',
    url: '/example',
    body: {
      wrong: 'test',
    },
  })

  t.assert.strictEqual(response.statusCode, 400, 'Bad request for wrong body')
})
