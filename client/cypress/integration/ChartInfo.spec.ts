describe('Chart Info', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:8080/charts/chart/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.visit('/chartInfo/602863701c3bf60865decdb2');
  });
  it('Changing key requests chart in the new key', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/chart/*/Eb', {
      statusCode: 200,
      fixture: 'chartInfoInKey.json',
    });

    cy.get('[data-testid=selectedKeyDropdown]').select('Eb');

    cy.get('[data-testid=bar1beat1]').should('have.text', 'Eb Dominant 7');
  });

  it('Delete chart - redirect', () => {
    cy.intercept('DELETE', 'http://localhost:8080/charts/delete/*', {
      statusCode: 200,
    });

    cy.intercept('GET', 'http://localhost:8080/charts/all', {
      statusCode: 200,
      body: { charts: [] },
    });

    cy.get('[data-testid=DeleteButton]').click();

    cy.get('[data-testid=mainHeaderText]').should('have.text', 'Charts');
  });

  it('Edit chart - redirect', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/chart/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.get('[data-testid=EditButton]').click();

    cy.get('[data-testid=mainHeaderText]').should('have.text', 'Edit Chart');
  });
});

export {};
