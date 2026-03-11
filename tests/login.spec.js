import { test, expect } from '@playwright/test';
import { LoginPage } from "../.github/workflows/pages/LoginPage.js";


test.describe('Login Tests', () => {
    let loginPage;  
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });


  test('should login with valid credentials', async ({ page }) => {
        await loginPage.login('revathi.test123@test.com', 'Password123');
        await expect(page.locator('body')).toContainText('revathi.test123@test.com');
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
        });
        
    test('should not login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid@test.com', 'InvalidPassword');
        await expect(page.getByText('Login was unsuccessful. Please correct the errors and try again.')).toBeVisible();
    });

});