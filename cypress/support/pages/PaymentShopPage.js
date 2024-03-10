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

    getNameField() {
        return cy.get('.mat-form-field-infix.ng-tns-c119-24');
    }
    
    getCardNumberField() {
        return cy.get('#mat-input-11');
    }

    getExpiryMonthDropDown() {
        return cy.get('select#mat-input-12');
    }

    getExpiryYearDropDown() {
        return cy.get('select#mat-input-13');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

}

export default new PaymentShopPage()
