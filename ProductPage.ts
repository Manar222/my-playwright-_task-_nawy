import { Page } from "playwright";

export class ProductPage {
    private page: Page;
    private appleMonitor;
    private addToCartButton;

    constructor(page: Page) {
        this.page = page;
        this.appleMonitor = this.page.locator('.card-title', { hasText: 'Apple monitor 24' });
        this.addToCartButton = this.page.locator('a', { hasText: 'Add to cart' });
    }

    async addAppleMonitorToCart() {
        await this.appleMonitor.click();
        await this.addToCartButton.click();
    }
}