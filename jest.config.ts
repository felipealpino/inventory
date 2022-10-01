const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
  // roots: ['../src/tests/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src' }),
	collectCoverage: true,
	collectCoverageFrom: ['./src/'],
	moduleFileExtensions: ['ts', 'js', 'json'],
	coverageDirectory: '../coverage',
};
