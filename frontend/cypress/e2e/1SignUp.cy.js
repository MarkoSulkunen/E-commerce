describe('App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })
  it('navigates to the signup page', () => {
    cy.get('nav a').contains('SignUp').click()
    cy.url().should('include', 'http://127.0.0.1:5173/signup')

  })
  it('signs up successfully', () => {
    cy.get('nav a').contains('SignUp').click()
    cy.get('input[type="email"]').type('testuser@mail.com')
    cy.get('input[type="password"]').type('123456')
    cy.get('button[type="submit"]').click()
    cy.get('nav a').contains('Add Service').should('exist')
    cy.get('nav a').contains('SignUp').should('not.exist')
  })
  });