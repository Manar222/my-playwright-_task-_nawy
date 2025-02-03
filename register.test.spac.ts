import { test as base, expect } from "playwright/test";
import { RegisterPage } from '../pages/RegisterPage';

const test = base.extend<{ registerPage: RegisterPage }>({
    registerPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(page);
        await use(registerPage);
    },
});

test('User can register with valid data', async ({ page, registerPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await registerPage.register('testUser', 'password123');
});

test('User cannot register with invalid data', async ({ page, registerPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await registerPage.register('', '');
});
test('User can register with valid data', async ({ page, registerPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await registerPage.register('newUser123', 'password123');
    await expect(page.locator('.alert-success')).toBeVisible();
});

test('User cannot register with invalid data', async ({ page, registerPage }) => {
    await page.goto('https://www.demoblaze.com/');
    await registerPage.register('', '');
    await expect(page.locator('.alert-danger')).toBeVisible();
});
