import { test, expect } from '@playwright/test'

const LEARN_MORE_MODALS = [
  'learnMoreModalEducation',
  'learnMoreModalWork',
  'learnMoreModalAiesec',
  'learnMoreModalHobbies',
  'learnMoreModalLanguages',
]

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForTimeout(1000)
  await page.locator('#learnMore').scrollIntoViewIfNeeded()
})

for (const modalId of LEARN_MORE_MODALS) {
  test(modalId, async ({ page }) => {
    await page.click(`[data-bs-target="#${modalId}"]`)
    await page.waitForSelector(`#${modalId}.show`, { state: 'visible' })
    await expect(page).toHaveScreenshot('open.png')

    await page.locator(`#${modalId}`).evaluate(el => el.scrollTop = el.scrollHeight)
    await expect(page).toHaveScreenshot('scrolled.png')
  })
}
