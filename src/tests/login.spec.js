// @ts-check
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Click the get started link.
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill("standard_user");
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill("secret_sauce");
  await page.getByText('Login').click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
