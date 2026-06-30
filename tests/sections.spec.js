import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
})

test('navbar', async ({ page }) => {
  await expect(page.locator('nav')).toHaveScreenshot('screenshot.png')
})

test('hero', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('header.masthead')).toHaveScreenshot('screenshot.png')
})

test('about', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('#aboutMe')).toHaveScreenshot('screenshot.png')
})

test('stack', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await page.waitForTimeout(500)
  await expect(page.locator('#myStack')).toHaveScreenshot('screenshot.png')
})

test('portfolio', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('#portfolio')).toHaveScreenshot('screenshot.png')
})

test('learn more', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('#learnMore')).toHaveScreenshot('screenshot.png')
})

test('contact', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('#contact')).toHaveScreenshot('screenshot.png')
})

test('footer', async ({ page }) => {
  await page.addStyleTag({ content: '#mainNav { display: none !important; }' })
  await expect(page.locator('footer')).toHaveScreenshot('screenshot.png')
})
