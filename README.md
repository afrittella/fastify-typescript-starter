# Fastify TypeScript Starter Template

> **Note:** This project has been completely rewritten. You can find the previous implementation in the [legacy-version](https://github.com/afrittella/fastify-typescript-starter/tree/legacy-version) branch.

A minimalist API foundation built with modern web technologies:

- [Fastify](https://www.fastify.io) - Fast and low overhead web framework (including official plugins)
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript superset
- [Biome](https://biomejs.dev) - Fast formatter and linter
- [TypeBox](https://github.com/sinclairzx81/typebox) - JSON Schema type builder with automatic Fastify validation

## Quick Start

1. Clone this repository to your local machine
2. Install dependencies: `pnpm install`
3. Set up environment variables: Copy `.env.example` to `.env.local` and update the values
4. Launch development server: `pnpm dev`
5. Open your browser to `https://localhost:[PORT]` (PORT value comes from your .env.local configuration)

## Development Commands

- `pnpm run lint` - Format code and run linter
- `pnpm run build` - Compile project using esbuild
- `pnpm run dev` - Start development server with tsx
- `pnpm run start` - Launch production server from dist directory
- `pnpm run test` - Execute test suite

## Roadmap

Planned enhancements include:
- Docker containerization support
- Enhanced request/response middleware
- Additional features based on community feedback

Feel free to submit issues or feature requests to help improve this starter template!

License
This project is licensed under the MIT License - see the LICENSE file for details.
