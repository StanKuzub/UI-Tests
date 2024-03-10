import BasePage from "./BasePage";

class HomePage extends BasePage {

    visit() {
        cy.log('Opening home page...')
        cy.visit('/');
    }

    getDismissButton() {
        return cy.get('.mat-focus-indicator.close-dialog.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted');
    }
    getAccountButton() {
        return cy.get('#navbarAccount');
    }

    getLoginButton() {
        return cy.get('#navbarLoginButton');
    }

    getCartIcon() {
        return cy.get('button[routerlink="/basket"][aria-label="Show the shopping cart"]');
    }

    getEmailInfoButton() {
        return cy.get('button[aria-label="Go to user profile"]');
    }

    getOrdersAndPaymentsOption() {
        return cy.get('button[aria-label="Show Orders and Payment Menu"]');
    }

    getSavedAddressesButton() {
        return cy.get('button[routerlink="/address/saved"][aria-label="Go to saved address page"]');
    }

    getSavedCardsButton() {
        return cy.get('button[routerlink="/saved-payment-methods"][aria-label="Go to saved payment methods page"]');
    }

    getAddToCartApllePomaceButton() {
        return cy.get('button[aria-label="Add to Basket"]');
    }

    getMainDropDown() {
        return cy.get('button[aria-label="Open Sidenav"]');
    }

    getCustomerFeedbackButton() {
        return cy.get('a[routerlink="/contact"][aria-label="Go to contact us page"]');
    }
}
export default new HomePage()