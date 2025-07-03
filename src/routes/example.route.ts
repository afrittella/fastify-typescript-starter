import { Type, type FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import type { FastifyRequestTypeBox } from '../types'

const PostExampleSchema = {
  tags: ['example'],
  body: Type.Object({
    foo: Type.String(),
  }),
}

const exampleRoute: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.post('', { schema: PostExampleSchema }, async (req: FastifyRequestTypeBox<typeof PostExampleSchema>, res) => {
    const { foo } = req.body
    return res.status(201).send({ message: `Your foo variable is "${foo}"` })
  })
}

export const autoPrefix = 'example'
export default exampleRoute
