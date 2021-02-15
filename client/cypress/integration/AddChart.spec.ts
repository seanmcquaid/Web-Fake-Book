describe('Add Chart', () => {
  beforeEach(() => {
    cy.visit('/addChart');
  });

  it('Successfully added chart with unique configurations redirects user to charts page', () => {
    cy.get('.sc-jSgupP').type('Blues in Hoss Flat');
    cy.get('[data-testid=defaultKeyDropdown]').select('Db');
    cy.get('[data-testid=numberOfBarsDropdown]').select('12');
    cy.get('[data-testid=genreDropdown]').select('Blues');

    cy.get(
      '[data-testid=bar1beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('1');
    cy.get(
      '[data-testid=bar1beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar1beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar2beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('4');
    cy.get(
      '[data-testid=bar2beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar2beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar3beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('1');
    cy.get(
      '[data-testid=bar3beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar3beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar5beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('4');
    cy.get(
      '[data-testid=bar5beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar5beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar7beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('1');
    cy.get(
      '[data-testid=bar7beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar7beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar8beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('3');
    cy.get(
      '[data-testid=bar8beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Half Diminished');
    cy.get('[data-testid=bar8beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar8beat3] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('6');
    cy.get(
      '[data-testid=bar8beat3] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar8beat3] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar9beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('2');
    cy.get(
      '[data-testid=bar9beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Minor');
    cy.get('[data-testid=bar9beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar10beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('5');
    cy.get(
      '[data-testid=bar10beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar10beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar11beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('1');
    cy.get(
      '[data-testid=bar11beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar11beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar11beat3] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('6');
    cy.get(
      '[data-testid=bar11beat3] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar11beat3] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar12beat1] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('2');
    cy.get(
      '[data-testid=bar12beat1] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Minor');
    cy.get('[data-testid=bar12beat1] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.get(
      '[data-testid=bar12beat3] > [for="functionalNumber"] > [data-testid=functionalNumberDropdown]'
    ).select('5');
    cy.get(
      '[data-testid=bar12beat3] > [for="chordQuality"] > [data-testid=chordQualityDropdown]'
    ).select('Dominant');
    cy.get('[data-testid=bar12beat3] > .sc-fubCfw > .sc-iBPRYJ').click();

    cy.intercept('POST', 'http://localhost:8080/charts/add', {
      statusCode: 200,
    });

    cy.get('.sc-crrsfI').click();

    cy.get('.sc-bdfBwQ').should('have.text', 'Charts');
  });
});

export {};
