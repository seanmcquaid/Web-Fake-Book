describe('EditChart', () => {
  beforeEach(() => {
    cy.visit('/editChart/602863701c3bf60865decdb2');
  });
  it('User is redirected after successfully editing a chart', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/chart/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

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

    cy.get('.sc-crrsfI').click();

    cy.get('.sc-bdfBwQ').should('have.text', 'Charts');
  });
});
