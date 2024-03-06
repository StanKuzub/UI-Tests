import BasePage from "./BasePage";

class DeliveryMethodPage extends BasePage {

    visit() {

        cy.log('Go to the delivery method page');
        cy.visit('/delivery-method');
    }

    getStandardDeliveryRadioButton() {
        return cy.get('.mat-cell.cdk-cell.cdk-column-Name.mat-column-Name.ng-star-inserted').contains('Standard Delivery');
    }

    getContinueButton() {
        return cy.get('.mat-focus-indicator.btn.nextButton.mat-button.mat-raised-button.mat-button-base.mat-primary');
    }
}

export default new DeliveryMethodPage()
