import user from '../fixtures/userInfo.json'
import card from '../fixtures/creditCardInfo.json'
import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import savedPaymentMethodsPage from '../support/pages/SavedPaymentMethodsPage';

describe('Add a new credit card', () => {
  beforeEach(() => {
    loginPage.visit();
    homePage.getDismissButton().click();
    loginPage.fillLoginFields(user.email, user.password);
  });

  it('Add a new credit card', () => {

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