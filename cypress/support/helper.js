export function findProduct(productName) {
    cy.contains('.item-name', productName);
    cy.get('button[aria-label="Add to Basket"]').eq(0).click();
}

const registerUser = (email, password, securityAnswer) => {
    cy.request({
      method: 'POST',
      url: 'https://juice-shop-sanitarskyi.herokuapp.com/api/Users/',
      body: {
        email: email,
        password: password,
        passwordRepeat: password,
        securityAnswer: securityAnswer,
        securityQuestion: {
          id: 1,
          question: 'Your eldest siblings middle name?',
          createdAt: '2024-03-10T07:51:17.140Z',
          updatedAt: '2024-03-10T07:51:17.140Z'
        }
      }
    }).then((response) => {
      // Check if the registration was successful
      expect(response.status).to.eq(201);
      expect(response.body.status).to.eq('success');
      expect(response.body.data.email).to.eq(email);
      // You can add more assertions based on the response if needed
    });
  }
  export default registerUser;
