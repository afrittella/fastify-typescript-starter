module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.test.ts",
        "!<rootDir>/node_modules/",
        "!<rootDir>/build/"
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
    coverageReporters: ['json', ['lcov', { projectRoot: './src' }], 'text', 'clover'],
}
