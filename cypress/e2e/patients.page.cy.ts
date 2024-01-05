describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  it('Page should have "Patients" header', () => {
    cy.get('h1').should('have.text', "Patients");
  });

  it('should have a table', () => {
    cy.get('table').should('exist')
  })

  it('should have a row with name "Ellis Gogin"', () => {
    cy.contains('tr', 'Ellis Gogin').should('exist')
  })

  it('should click on the "View Details" button for Ellis Gogin', () => {
    cy.contains('tr', 'Ellis Gogin').within(() => {
      cy.get('a[href*="/dashboard/patientDetails"]').click()
    })
    // Assert that you are on the correct page after clicking
    cy.url().should('include', '/dashboard/patientDetails')
  })

  it('should check that each row has Patient Name and Patient Email columns', () => {
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).within(() => {
        console.log(cy.get('td:eq(0)'));
        cy.get('td:eq(0)').should('not.be.empty')
        cy.get('td:eq(1)').should('not.be.empty')
      })
    })
  })

  it('should validate the number of rows', () => {
    cy.get('table tbody tr').should('have.length', 12)
  })

  it('should have two header columns with proper names', function () {
    cy.get('table thead tr').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('th:eq(0)').should('have.text', 'Patient Name')
        cy.get('th:eq(1)').should('have.text', 'Patient Email')
        cy.get('th:eq(2) span').should('have.text', 'View Details').and('have.class', 'sr-only')
      })
    })
  });
})