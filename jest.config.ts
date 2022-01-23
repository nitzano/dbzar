import type {Config} from '@jest/types';
import {defaults as tsjPreset} from 'ts-jest/presets';

const config: Config.InitialOptions = {
	roots: ['<rootDir>/src'],
	preset: '@shelf/jest-mongodb',
	transform: tsjPreset.transform,
	testEnvironment: 'node',
};
export default config;

