import BasePage from "./BasePage";

class LoginPage extends BasePage {

    visit() {
        cy.log('Open Login Page');
        cy.visit('/login');
    }

    getNotACustomerButton() {
        return cy.get('a[href="#/register"]');
    }

    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLogInButton() {
        return cy.get('#loginButton');
    }

    fillLoginFields(email = '', password = '') {
        cy.log('Fill in authorization fields');
        email ? this.getEmailField().type(email) : cy.log('Skip email field');
        password ? this.getPasswordField().type(password) : cy.log('Skip password field');
        this.getLogInButton().click();
    }

}

export default new LoginPage()