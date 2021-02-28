describe('Charts', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/charts/all', {
      statusCode: 200,
      fixture: 'allCharts.json',
    });

    cy.visit('/charts');
  });
  it('Filter charts by search terms lessens amount of results', () => {
    cy.get('[data-testid=searchTextTextInput]').type('Flat');

    cy.get('[data-testid=pageNumberText]').should('have.text', 'Page 1 of 1');
  });

  it('Next page button disabled when user gets to last page', () => {
    cy.get('[data-testid=NextButton]').click();
    cy.get('[data-testid=NextButton]').should('be.disabled');
  });

  it('Prev page button disabled on load', () => {
    cy.get('[data-testid=PrevButton]').should('be.disabled');
  });
});

export {};
