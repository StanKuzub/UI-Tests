import BasePage from "./BasePage";

class AddressSavePage extends BasePage {

    visit() {

        cy.log('Go to the address page');
        cy.visit('/address/saved');
    }

    getAddNewAddressButton() {
        return cy.get('button[aria-label="Add a new address"][routerlink="/address/create"]');
    }

}

export default new AddressSavePage()
