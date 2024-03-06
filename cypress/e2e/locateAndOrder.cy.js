import user from '../fixtures/userInfo.json';
import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import basketPage from "../support/pages/BasketPage";
import addressSelectPage from "../support/pages/AddressSelectPage";
import deliveryMethodPage from "../support/pages/DeliveryMethodPage";
import paymentShopPage from "../support/pages/PaymentShopPage";
import orderSummaryPage from "../support/pages/OrderSummaryPage";

import { findProduct } from "../support/helper";

describe('Checkout with the helper function', () => {
  beforeEach(() => {
    loginPage.visit();
    homePage.getDismissButton().click();
    loginPage.fillLoginFields(user.email, user.password);
  });

  it('Authorization and checkout', () => {

    findProduct('Apple Juice (1000ml)');
    homePage.getCartIcon().click();
    basketPage.getCheckoutButton().click({ force: true });
    addressSelectPage.getAddressSelectRadioButton().click();
    addressSelectPage.getNextButton().click();
    deliveryMethodPage.getStandardDeliveryRadioButton().click();
    deliveryMethodPage.getContinueButton().click();
    paymentShopPage.getCreditCardRadioButton().click();
    paymentShopPage.getContinueButton().click();
    orderSummaryPage.getPlaceYourOrderAndPayButton().click();

    cy.contains('h1.confirmation', 'Thank you for your purchase!').should('be.visible');
    cy.contains('div.confirmation', 'Your order will be delivered in 5 days.').should('be.visible');
    cy.contains('mat-cell.mat-column-product', 'Apple Juice (1000ml)').should('be.visible');
  });
});

