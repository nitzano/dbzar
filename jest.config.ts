import type {Config} from '@jest/types';
import {defaults as tsjPreset} from 'ts-jest/presets';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/src'],
	transform: tsjPreset.transform,
	preset: '@shelf/jest-mongodb',
	watchPathIgnorePatterns: ['globalConfig'],
	setupFiles: ['<rootDir>/jest/setup-envs.ts'],
};
export default config;
