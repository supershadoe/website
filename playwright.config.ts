import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    webServer: {
        command: 'npx vite build && npx vite preview',
        port: 4173
    },
    testDir: 'tests'
};

export default config;
