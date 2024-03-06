export function findProduct(productName) {
    cy.contains('.item-name', productName);
    cy.get('button[aria-label="Add to Basket"]').eq(0).click();
}