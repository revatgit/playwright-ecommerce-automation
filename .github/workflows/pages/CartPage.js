export class CartPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
        this.cartLink =  page.locator('#topcartlink');;
    }

    async navigate() {
        await this.page.goto('https://demowebshop.tricentis.com/');
    }

    async addProductToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }


 }