import { Page } from "playwright";

export class HomePage {
    private page: Page;
    private logoutButton;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = this.page.locator('a', { hasText: 'Log out' });
    }

    async logout() {
        await this.logoutButton.click();
    }
}
