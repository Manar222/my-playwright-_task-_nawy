import { Page } from "playwright";

export class RegisterPage {
    private page: Page;
    private usernameInput;
    private passwordInput;
    private registerButton;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.locator('#sign-username');
        this.passwordInput = this.page.locator('#sign-password');
        this.registerButton = this.page.locator('button', { hasText: 'Sign up' });
    }

    async register(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }
}
