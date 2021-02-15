describe('Chart Info', () => {
  beforeEach(() => {
    cy.visit('/chartInfo/602863701c3bf60865decdb2');
  });
  it('Changing key requests chart in the new key', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/charts/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.get('[data-testid=selectedKeyDropdown]').select('Eb');

    cy.intercept('GET', 'http://localhost:8080/charts/charts/*/Eb', {
      statusCode: 200,
      fixture: 'chartInfoInKey.json',
    });

    cy.get(':nth-child(1) > .sc-bkzZxe > :nth-child(1)').should(
      'have.text',
      'Eb Dominant 7'
    );
  });

  it('Delete chart - redirect', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/charts/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.intercept('DELETE', 'http://localhost:8080/charts/delete/*', {
      statusCode: 200,
    });

    cy.intercept('GET', 'http://localhost:8080/charts/all', {
      statusCode: 200,
      body: { charts: [] },
    });

    cy.get('.sc-crrsfI').click();

    cy.get('.sc-bdfBwQ').should('have.text', 'Charts');
  });

  it('Edit chart - redirect', () => {
    cy.intercept('GET', 'http://localhost:8080/charts/charts/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.intercept('GET', 'http://localhost:8080/charts/charts/*', {
      statusCode: 200,
      fixture: 'chartInfo.json',
    });

    cy.get('.sc-fodVxV').click();

    cy.get('.sc-bdfBwQ').should('have.text', 'Edit Chart');
  });
});

export {};
