import user from '../fixtures/userInfo.json';
import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import basketPage from "../support/pages/BasketPage";
import addressSavePage from "../support/pages/AddressSavePage.js";
import addressCreatePage from "../support/pages/AddressCreatePage.js";
import addressSelectPage from "../support/pages/AddressSelectPage.js";
import savedPaymentMethodsPage from "../support/pages/SavedPaymentMethodsPage.js";
import paymentShopPage from "../support/pages/PaymentShopPage.js";
import deliveryMethodPage from "../support/pages/DeliveryMethodPage";
import orderSummaryPage from "../support/pages/OrderSummaryPage";
import { findProduct } from "../support/helper";
import { faker } from '@faker-js/faker';
import registerUser from '../support/helper.js';
import address from '../fixtures/address.json';
import card from '../fixtures/creditCardInfo.json'

let userInfo = {};

describe('Checkout with the helper function', () => {
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

it('Login and Checkout', () => {
    loginPage.visit();
    homePage.getDismissButton().click();

    const { email, password } = userInfo;

    loginPage.fillLoginFields(email, password);
    homePage.getCartIcon().should('be.visible');

    findProduct('Apple Juice (1000ml)');
    homePage.getCartIcon().click();
    basketPage.getCheckoutButton().click({ force: true });
    addressSavePage.getAddNewAddressButton().click();
    addressCreatePage.getCountryField().type(address.country);
    addressCreatePage.getNameField().type(address.name);
    addressCreatePage.getMobileNumberField().type(address.mobilemNumber);
    addressCreatePage.getZipCodeField().type(address.zipCode);
    addressCreatePage.getAddressField().type(address.addressLocation);
    addressCreatePage.getCityField().type(address.city);
    addressCreatePage.getSubmitButton().click();
    addressSelectPage.getAddressSelectRadioButton().click();
    addressSelectPage.getNextButton().click();

    deliveryMethodPage.getStandardDeliveryRadioButton().click();
    deliveryMethodPage.getContinueButton().click();

    savedPaymentMethodsPage.getAddNewCardButton().click();
    paymentShopPage.getNameField().type(card.name);
    paymentShopPage.getCardNumberField().type(card.cardNumber)
    paymentShopPage.getExpiryMonthDropDown().select('2');
    paymentShopPage.getExpiryYearDropDown().select('2090');
    paymentShopPage.getSubmitButton().click();


    paymentShopPage.getCreditCardRadioButton().click();
    paymentShopPage.getContinueButton().click();
    orderSummaryPage.getPlaceYourOrderAndPayButton().click();

    cy.contains('h1.confirmation', 'Thank you for your purchase!').should('be.visible');
    cy.contains('div.confirmation', 'Your order will be delivered in 5 days.').should('be.visible');
    cy.contains('mat-cell.mat-column-product', 'Apple Juice (1000ml)').should('be.visible');
    cy.contains('mat-cell.mat-column-price', '1.99¤').should('be.visible');
  });
});

