import { test, expect } from '@playwright/test';

test('открывает и закрывает мобильное меню по клику', async ({ page }) => {
  await page.goto('/');

  const menuButton = page.locator('button[aria-controls="mobile-site-navigation"]');

  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  await menuButton.click();

  await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#mobile-site-navigation')).toBeVisible();

  await page.getByRole('link', { name: 'Главная' }).click();

  await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#mobile-site-navigation')).toHaveCount(0);
});