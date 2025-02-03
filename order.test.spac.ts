import { test as base, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage'; // Ensure this path is correct and the file exists

import { LoginPage } from '../pages/LoginPage'; // Ensure this path is correct and the file exists

const test = base.extend<{ productPage: ProductPage, loginPage: LoginPage }>({
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

test('User can order Apple Monitor 24', async ({ page, productPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await productPage.addAppleMonitorToCart();
});
test('User can order Apple Monitor 24', async ({ page, productPage, loginPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await loginPage.login('testUser', 'password123');
    await productPage.addAppleMonitorToCart();
    await expect(page.locator('.cart-item')).toHaveText('Apple monitor 24');
});
