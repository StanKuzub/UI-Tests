import homePage from "../support/pages/HomePage";
import contentPage from "../support/pages/ContactPage";
import feedbackMock from '../fixtures/feedbackMock.json';

describe('Submit Feedback Form', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://juice-shop-sanitarskyi.herokuapp.com/rest/captcha/', (req) => {
      req.continue((res) => {

        const captchaData = res.body;
        const captchaExpression = captchaData.captcha;
        const captchaAnswer = eval(captchaExpression);

        contentPage.getResultField().type(captchaAnswer);
      });
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

    cy.wait('@captchaRequest');

    contentPage.getSubmitButton().click();

    contentPage.getFeedbackConfirmationMessage().should('have.prop', 'outerText', "Thank you for your feedback.");
  });
});