import card from '../fixtures/creditCardInfo.json'
import loginPage from "../support/pages/LoginPage.js";
import homePage from "../support/pages/HomePage.js";
import savedPaymentMethodsPage from '../support/pages/SavedPaymentMethodsPage.js';
import registerUser from '../support/helper.js';
import { faker } from '@faker-js/faker'

let userInfo = {};
describe('Add a new credit card', () => {
  it('Register a new user', () => {
      const email = faker.internet.email();
      const password = faker.internet.password();
      const securityAnswer = 'test';

      registerUser(email, password, securityAnswer);

      userInfo = {
          email: email,
          password: password
      }
  })

  it('Login and Add a new credit card', () => {
      loginPage.visit();
      homePage.getDismissButton().click();

      const { email, password } = userInfo;

      loginPage.fillLoginFields(email, password);
      homePage.getCartIcon().should('be.visible');

    homePage.getAccountButton().click();
    homePage.getOrdersAndPaymentsOption().click();
    homePage.getSavedCardsButton().click();
    savedPaymentMethodsPage.getAddNewCardButton().click();
    savedPaymentMethodsPage.getNameField().type(card.name);
    savedPaymentMethodsPage.getCardNumberField().type(card.cardNumber)
    savedPaymentMethodsPage.getExpiryMonthDropDown().select('2');
    savedPaymentMethodsPage.getExpiryYearDropDown().select('2090');
    savedPaymentMethodsPage.getSubmitButton().click();

    cy.contains('mat-cell.mat-column-Number', '************1121').should('be.visible');

  })
})