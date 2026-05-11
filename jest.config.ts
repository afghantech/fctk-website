import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  clearMocks: true,
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    'app/about/sections.tsx',
    '!**/__tests__/**',
    '!**/*.d.ts',
    '!lib/site-data.ts',
    '!app/**/page.tsx',
    '!app/**/layout.tsx',
    '!app/**/sitemap.ts',
  ],
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
};

export default createJestConfig(config);