import BasePage from "./BasePage";

class AddressCreatePage extends BasePage {

    visit() {
        cy.log('Go to the address page');
        cy.visit('/address/create');
    }

    getCountryField() {
        return cy.get('input[type="text"][placeholder="Please provide a country."][required]');
    }
    getSubmitButton() {
        return cy.get('#submitButton');
    }

    getAddressField() {
        return cy.get('#address');
    }

    getNameField() {
        return cy.get('input[type="text"][placeholder="Please provide a name."][required]');
    }

    getMobileNumberField() {
        return cy.get('input[placeholder="Please provide a mobile number."]');
    }

    getZipCodeField() {
        return cy.get('input[placeholder="Please provide a ZIP code."]');
    }

    getCityField() {
        return cy.get('input[placeholder="Please provide a city."]');
    }

}
export default new AddressCreatePage()
