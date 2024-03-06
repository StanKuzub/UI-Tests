import user from '../fixtures/userInfo.json'
import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";

describe('Authorization positive scenario', () => {
  it('Authorization', () => {
    loginPage.visit();
    homePage.getDismissButton().click();
    loginPage.fillLoginFields(user.email, user.password);
    homePage.getCartIcon().should('be.visible');
    
    homePage.getAccountButton().click();
    homePage.getEmailInfoButton().should('be.visible');
    homePage.getOrdersAndPaymentsOption().should('be.visible');
  })
})