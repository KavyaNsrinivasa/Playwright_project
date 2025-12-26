import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('books');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'books bestsellers english' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.a-link-normal.s-no-outline').first().click();
  const page1 = await page1Promise;
  await page1.getByTestId('2d9jkl-le5wso-jq77yc-15klcs').getByRole('button', { name: 'Add to cart' }).click();
});