describe('App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })
  it('navigates to the login page', () => {
    cy.get('nav a').contains('Login').click()
    cy.url().should('include', 'http://127.0.0.1:5173/login')
  })
  it('logs in successfully', () => {
    cy.get('nav a').contains('Login').click()
    cy.get('input[type="email"]').type('testuser@mail.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()
    cy.get('nav a').contains('Add Service').should('exist')
    cy.get('nav a').contains('Login').should('not.exist')
  })
  });