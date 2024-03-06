import BasePage from "./BasePage";

class PaymentShopPage extends BasePage {

    visit() {

        cy.log('Go to the payment shop page');
        cy.visit('/payment/shop');
    }

    getCreditCardRadioButton() {
        return cy.get('#mat-radio-44');
    }

    getContinueButton() {
        return cy.get('.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary');
    }
}

export default new PaymentShopPage()
