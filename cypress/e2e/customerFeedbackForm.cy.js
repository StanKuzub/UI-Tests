import homePage from "../support/pages/HomePage";
import contentPage from "../support/pages/ContactPage";
import feedbackMock from '../fixtures/feedbackMock.json';

describe('Submit Feedback Form', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/', {
      statusCode: 200,
      body: {
        captchaId: 11,
        captcha: '6+4-3',
        answer: '7'
      }
    }).as('captchaRequest');

    cy.intercept('GET', 'https://juice-shop-sanitarskyi.herokuapp.com/rest/tags', feedbackMock).as('tagsRequest');
  });

  it('Submit Feedback Form', () => {
    homePage.visit();
    homePage.getDismissButton().click();
    homePage.getMainDropDown().click();
    homePage.getCustomerFeedbackButton().click();
    contentPage.getCommentField().type('Test');
    contentPage.getRaitingSlider().click();
    contentPage.getSResultField().type('7');
    contentPage.getSubmitButton().click();
    contentPage.getFeedbackConfirmationMessage().should('have.prop', 'outerText', "Thank you for your feedback.");

  });
});
