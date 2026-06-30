import { test, expect } from '@playwright/test'

const PORTFOLIO_MODALS = [
  'portfolioModalMiniTwitterRestApiBackendServer',
  'portfolioModalTextStoringProcessing',
  'portfolioModalParkingLotServer',
  'portfolioModalDummyReactConfServer',
  'portfolioModalDummyReactConfDashboard',
  'portfolioModalDummyReactConfWebsite',
  'portfolioModalSalimDellali',
  'portfolioModalMediafex',
  'portfolioModalLinexAlgeria',
]

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.locator('#portfolio').scrollIntoViewIfNeeded()
})

for (const modalId of PORTFOLIO_MODALS) {
  test(modalId, async ({ page }) => {
    await page.click(`[data-bs-target="#${modalId}"]`)
    await page.waitForSelector(`#${modalId}.show`, { state: 'visible' })
    await expect(page).toHaveScreenshot('open.png')

    await page.locator(`#${modalId}`).evaluate(el => el.scrollTop = el.scrollHeight)
    await expect(page).toHaveScreenshot('scrolled.png')
  })
}
