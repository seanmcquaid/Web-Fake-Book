describe('EditChart', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/charts/chart/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.visit('/editChart/602863701c3bf60865decdb2');
  });
  it('User is redirected after successfully editing a chart', () => {
    cy.get(
      '[data-testid=bar2beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('b2');

    cy.intercept(
      'PUT',
      'http://localhost:8080/charts/edit/602863701c3bf60865decdb2',
      {
        statusCode: 200,
      }
    );

    cy.intercept('GET', 'http://localhost:8080/charts/all', {
      statusCode: 200,
      body: { charts: [] },
    });

    cy.get('[data-testid="Edit This ChartButton"]').click();

    cy.get('[data-testid=mainHeaderText]').should('have.text', 'Charts');
  });
});

export {};
