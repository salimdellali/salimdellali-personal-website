import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{snapshotDir}/{testName}/{arg}{-projectName}{ext}',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
    },
  },
  use: {
    baseURL: 'http://localhost:5173',
    animations: 'disabled',
  },
  projects: [
    {
      name: 'laptop-l',
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'tablet',
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: 'mobile-l',
      use: { viewport: { width: 425, height: 812 }, isMobile: true },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
})
