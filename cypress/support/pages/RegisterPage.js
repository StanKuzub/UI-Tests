import BasePage from "./BasePage";


class RegisterPage extends BasePage {

    visit() {
        cy.log('User Registration page...')
        cy.visit('/register');
    }

    getEmailField() {
        return cy.get('#emailControl');
    }

    getPasswordField() {
        return cy.get('.mat-form-field.ng-tns-c119-8.mat-accent.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted');
    }

    getRepeatPasswordField() {
        return cy.get('.mat-form-field.ng-tns-c119-9.mat-accent.mat-form-field-type-mat-input.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-has-label.mat-form-field-hide-placeholder.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted');
    }

    getSequrityQuestionDropDown() {
        return cy.get('.mat-select-placeholder.mat-select-min-line.ng-tns-c130-11.ng-star-inserted');
    }

    getMovieFromSequrityQuestionDropDown() {
        return cy.get('#mat-option-11');
    }

    getSequrityAnswerField() {
        return cy.get('#securityAnswerControl');
    }

    getRegistrationButton() {
        return cy.get('#registerButton');
    }

    getRegistrationConfirmationMessage() {
        return cy.get('.mat-simple-snackbar.ng-star-inserted');
    }

}
export default new RegisterPage();
