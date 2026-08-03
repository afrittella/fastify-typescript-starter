

# Plantilla de Inicio para Fastify con TypeScript

> **Nota:** Este proyecto ha sido reescrito por completo. Puedes encontrar la implementación anterior en la rama [legacy-version](https://github.com/afrittella/fastify-typescript-starter/tree/legacy-version).

Una base minimalista para APIs construida con tecnologías web modernas:

- [Fastify](https://www.fastify.io) - Framework web rápido y con baja sobrecarga (incluye plugins oficiales)
- [TypeScript](https://www.typescriptlang.org) - Superset de JavaScript con tipado seguro
- [Biome](https://biomejs.dev) - Formateador y linter rápido
- [TypeBox](https://github.com/sinclairzx81/typebox) - Generador de tipos para JSON Schema con validación automática en Fastify

## Inicio Rápido

1. Clona este repositorio en tu máquina local
2. Instala las dependencias: `pnpm install`
3. Configura las variables de entorno: Copia `.env.example` a `.env.local` y actualiza los valores
4. Inicia el servidor de desarrollo: `pnpm dev`
5. Abre tu navegador en `https://localhost:[PORT]` (el valor de PORT proviene de tu configuración `.env.local`)

## Pruebas
1. Copia .env.example a .env.test
2. Ejecuta las pruebas: `pnpm test`

## Comandos de Desarrollo

- `pnpm run lint` - Formatea el código y ejecuta el linter
- `pnpm run build` - Compila el proyecto usando esbuild
- `pnpm run dev` - Inicia el servidor de desarrollo con tsx
- `pnpm run start` - Inicia el servidor de producción desde el directorio dist
- `pnpm run test` - Ejecuta la suite de pruebas

## Hoja de Ruta

Las mejoras planificadas incluyen:
- Soporte para contenedorización con Docker
- Middleware de solicitud/respuesta mejorado
- Características adicionales basadas en los comentarios de la comunidad

¡No dudes en abrir issues o solicitudes de funcionalidades para ayudar a mejorar esta plantilla de inicio!

Licencia
Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
