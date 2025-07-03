import type {
  FastifySchema,
  FastifyRequest,
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression,
  FastifyReply,
  RawReplyDefaultExpression,
  ContextConfigDefault,
} from 'fastify'
import { Type, type TypeBoxTypeProvider, type Static } from '@fastify/type-provider-typebox'

export enum NodeEnv {
  development = 'development',
  production = 'production',
  test = 'test',
}

export enum LogLevel {
  trace = 'trace',
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error',
}

export const basicEnv = Type.Object({
  LOG_LEVEL: Type.Enum(LogLevel),
  NODE_ENV: Type.Enum(NodeEnv),
  HOST: Type.String({ default: 'localhost' }),
  PORT: Type.Number({ default: 3000 }),
  CACHE_URI: Type.Optional(Type.String()),
  APP_NAME: Type.String(),
  APP_VERSION: Type.String(),
  APP_DESCRIPTION: Type.Optional(Type.String()),
})
export type BasicEnv = Static<typeof basicEnv>

export const serverEnv = Type.Object({
  nodeEnv: Type.Enum(NodeEnv),
  isDev: Type.Boolean(),
  isProd: Type.Boolean(),
  app: Type.Object({
    name: Type.String(),
    version: Type.String(),
    description: Type.Optional(Type.String()),
  }),
  server: Type.Object({
    host: Type.String(),
    port: Type.Number(),
  }),
  log: Type.Object({
    level: Type.String(),
  }),
  cacheUri: Type.Optional(Type.String()),
})
export type ServerEnv = Static<typeof serverEnv>

export type FastifyRequestTypeBox<TSchema extends FastifySchema> = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression,
  TSchema,
  TypeBoxTypeProvider
>

export type FastifyReplyTypeBox<TSchema extends FastifySchema> = FastifyReply<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  ContextConfigDefault,
  TSchema,
  TypeBoxTypeProvider
>
