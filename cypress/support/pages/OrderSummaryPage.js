import BasePage from "./BasePage";

class OrderSummaryPage extends BasePage {

    visit() {
       
        cy.log('Go to the order summary page');
        cy.visit('/order-summary');
    }

    getPlaceYourOrderAndPayButton() {
        return cy.get('#checkoutButton');    
    }
   
}

export default new OrderSummaryPage()
