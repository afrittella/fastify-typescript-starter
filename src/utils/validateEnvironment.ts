import envSchema from 'env-schema'
import type { TSchema } from '@sinclair/typebox'

export const validateEnvironment = <T>(envPath: string, schema: TSchema) =>
  envSchema<T>({
    dotenv: {
      path: envPath,
    },
    schema,
  })
