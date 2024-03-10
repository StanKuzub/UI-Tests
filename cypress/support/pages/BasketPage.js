import BasePage from "./BasePage";

class BasketPage extends BasePage {

    visit() {
        cy.log('Open Basket Page');
        cy.visit('/basket');
    }

    getCheckoutButton() {
        return cy.get('#checkoutButton');
    }

}

export default new BasketPage()
