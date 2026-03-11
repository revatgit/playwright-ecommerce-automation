export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchProduct = page.locator('#small-searchterms');
         this.searchButton = page.getByRole('button', { name: 'Search' });
         this.productLink = page.getByRole('link', { name: 'Picture of 14.1-inch Laptop' }); 
         this.submitSearchButton = page.locator('#submit_search');   

    }

    // async navigate() {
    //     await this.page.goto('https://demowebshop.tricentis.com/');
    // }   
    async searchProductName(productName) {
          await this.searchProduct.fill(productName);
          await this.searchButton.click();
    }
    async selectProduct() {
          await this.productLink.click();

        await this.submitSearchButton.click();
    }   


 
    }