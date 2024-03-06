import address from '../fixtures/address.json'
import user from '../fixtures/userInfo.json'

import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import addressCreatePage from '../support/pages/AddressCreatePage';
import AddressSavePage from '../support/pages/AddressSavePage';

describe('Add a new address', () => {
  beforeEach(() => {
    loginPage.visit();
    homePage.getDismissButton().click();
    loginPage.fillLoginFields(user.email, user.password);
  });

  it('Add a new address', () => {

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