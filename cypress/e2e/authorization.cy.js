import loginPage from "../support/pages/LoginPage";
import homePage from "../support/pages/HomePage";
import registerUser from '../support/helper.js';
import { faker } from '@faker-js/faker'

let userInfo = {};
describe('Registration and authorization', () => {
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

  it('Authorization', () => {
      loginPage.visit();
      homePage.getDismissButton().click();

      const { email, password } = userInfo;

      loginPage.fillLoginFields(email, password);
      homePage.getCartIcon().should('be.visible');
  })
})