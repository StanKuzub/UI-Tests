import user from '../fixtures/userInfo.json'
import homePage from "../support/pages/HomePage";
import registrationPage from "../support/pages/RegisterPage";
import { faker } from '@faker-js/faker'

const email = faker.internet.email();
const password = user.password;

describe('Register a user', () => {
  it('User Registration', () => {
    registrationPage.visit();
    homePage.getDismissButton().click();
    registrationPage.getEmailField().type(email);
    registrationPage.getPasswordField().type(user.password);
    registrationPage.getRepeatPasswordField().type(password);
    registrationPage.getSequrityQuestionDropDown().click();
    registrationPage.getMovieFromSequrityQuestionDropDown().click();
    registrationPage.getSequrityAnswerField().type('TEST');
    registrationPage.getRegistrationButton().click();

    const userData = { email, password };
    cy.writeFile('cypress/fixtures/userInfo.json', userData);

    registrationPage.getRegistrationConfirmationMessage().should('have.prop', 'outerText', "Registration completed successfully. You can now log in.\nX");
    registrationPage.getRegistrationConfirmationMessage().should('have.prop', 'clientHeight', 20);
  })
})