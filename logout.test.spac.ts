import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('User can log out', async ({ page }) => {
    const homePage = new HomePage(page);
    await page.goto('https://www.demoblaze.com/');
    await homePage.logout();
});
test('User can log out', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('testUser', 'password123');
    await homePage.logout();
    await expect(page.locator('#nameofuser')).not.toBeVisible();
});