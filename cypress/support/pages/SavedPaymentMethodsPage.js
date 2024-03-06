import BasePage from "./BasePage";

class SavedPaymentMethodsPage extends BasePage {

    visit() {

        cy.log('Go to the Saved Payment Methods Page page');
        cy.visit('/saved-payment-methods');
    }

    getAddNewCardButton() {
        return cy.contains('mat-panel-title', 'Add new card');
    }

    getNameField() {
        return cy.get('.mat-input-element.mat-form-field-autofill-control.ng-tns-c119-15.ng-untouched.ng-pristine.ng-invalid.cdk-text-field-autofill-monitored');
    }

    getCardNumberField() {
        return cy.get('input[type="number"].mat-input-element.mat-form-field-autofill-control');
    }

    getExpiryMonthDropDown() {
        return cy.get('select#mat-input-5');
    }

    getExpiryYearDropDown() {
        return cy.get('select#mat-input-6');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }
}

export default new SavedPaymentMethodsPage()
