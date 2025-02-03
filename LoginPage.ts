import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput;
    private passwordInput;
    private loginButton;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('#loginusername');
        this.passwordInput = this.page.locator('#loginpassword');
        this.loginButton = this.page.locator('button', { hasText: 'Log in' });
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}