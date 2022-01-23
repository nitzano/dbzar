import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
	roots: ['<rootDir>/src'],
	preset: '@shelf/jest-mongodb',
	transform: {
		'.+\\.ts$': 'ts-jest',
	},
	testEnvironment: 'node',
};
export default config;

