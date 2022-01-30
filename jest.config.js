"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presets_1 = require("ts-jest/presets");
const config = {
    roots: ['<rootDir>/src'],
    transform: presets_1.defaults.transform,
    preset: '@shelf/jest-mongodb',
    watchPathIgnorePatterns: ['globalConfig'],
    setupFiles: ['<rootDir>/jest/setup-envs.ts'],
};
exports.default = config;
