import address from '../fixtures/address.json';
import registerUser from '../support/helper.js';
import { faker } from '@faker-js/faker'
import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import addressCreatePage from '../support/pages/AddressCreatePage';
import AddressSavePage from '../support/pages/AddressSavePage';

let userInfo = {};
describe('User Registration', () => {
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

  it('Login and add a new address', () => {

    loginPage.visit();
    homePage.getDismissButton().click();
    
    const { email, password } = userInfo;

    loginPage.fillLoginFields(email, password);
    homePage.getCartIcon().should('be.visible');

    homePage.getAccountButton().click();
    homePage.getOrdersAndPaymentsOption().click();
    homePage.getSavedAddressesButton().click();
    AddressSavePage.getAddNewAddressButton().click();
    addressCreatePage.getCountryField().type(address.country);
    addressCreatePage.getNameField().type(address.name);
    addressCreatePage.getMobileNumberField().type(address.mobilemNumber);
    addressCreatePage.getZipCodeField().type(address.zipCode);
    addressCreatePage.getAddressField().type(address.addressLocation);
    addressCreatePage.getCityField().type(address.city);
    addressCreatePage.getSubmitButton().click();

  })
})