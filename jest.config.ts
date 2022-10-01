module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	rootDir: './',
	coverageDirectory: './.coverage',
	collectCoverage: true,
	collectCoverageFrom: ['**/*.ts', '!**/*.d.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	coveragePathIgnorePatterns: ['/node_modules/', '/.build/', '/.coverage/', '/.middleware/', 'index.ts'],
	resetMocks: true,
	moduleNameMapper: {
		'src/(.*)': '<rootDir>/src/$1',
		'tests/(.*)': '<rootDir>/tests/$1',
	},
	// coverageThreshold: {
	// 	global: {
	// 		branches: 70,
	// 		functions: 70,
	// 		lines: 70,
	// 		statements: 70,
	// 	},
	// },
};
