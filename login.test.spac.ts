import { test } from '../utils/testConfig';
import { expect } from '@playwright/test';

test('User can log in with valid credentials', async ({ page, loginPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('testUser', 'password123');
    expect(await page.locator('#nameofuser')).toHaveText('Welcome testUser');
});
test('User can log in with valid credentials', async ({ page, loginPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('testUser', 'password123');
    await expect(page.locator('#nameofuser')).toHaveText('Welcome testUser');
});

test('User cannot log in with invalid credentials', async ({ page, loginPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('invalidUser', 'wrongPassword');
    await expect(page.locator('.error-message')).toBeVisible();
});
test('User cannot log in with invalid credentials', async ({ page, loginPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('invalidUser', 'wrongPassword');
    await expect(page.locator('.error-message')).toBeVisible();
});