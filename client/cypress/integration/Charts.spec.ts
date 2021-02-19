describe('Charts', () => {
  beforeEach(() => {
    cy.visit('/charts');

    cy.intercept('GET', 'http://localhost:8080/charts/all', {
      statusCode: 200,
      body: [],
    });
  });
  it('Filter charts by search terms lessens amount of results', () => {
    cy.get('.sc-jSgupP').type('Flat');

    cy.get('.sc-bYEvPH').should('have.text', 'Page 1 of 1');
  });

  it('Next page button disabled when user gets to last page', () => {
    cy.get('.sc-ezrdKe > :nth-child(3)').click();
    cy.get('.sc-ezrdKe > :nth-child(3)').should('be.disabled');
  });

  it('Prev page button disabled on load', () => {
    cy.get('.sc-ezrdKe > :nth-child(1)').should('be.disabled');
  });
});

export {};
