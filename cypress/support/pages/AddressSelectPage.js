import BasePage from "./BasePage";

class AddressSelectPage extends BasePage {

    visit() {

        cy.log('Go to the address page');
        cy.visit('/address/select');
    }

    getAddressSelectRadioButton() {
        return cy.get('.mat-radio-button.mat-accent');
    }

    getNextButton() {
        return cy.get('button[aria-label="Proceed to payment selection"]');
    }
}

export default new AddressSelectPage()
