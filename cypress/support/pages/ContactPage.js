import BasePage from "./BasePage";

class ContentPage extends BasePage {

    visit() {
        cy.log('Open Basket Page');
        cy.visit('/contact');
    }

    getCommentField() {
        return cy.get('#comment');
    }

    getRaitingSlider() {
        return cy.get('#rating');
    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    getResultField() {
        return cy.get('#captchaControl');
    }

    getFeedbackConfirmationMessage() {
        return cy.get('.mat-simple-snack-bar-content');
    }

}

export default new ContentPage()
