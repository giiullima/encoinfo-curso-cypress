Cypress.Commands.add('meuLogin', (usuario, senha) => {
    cy.visit('http://zero.webappsecurity.com/login.html');

    cy.get('#user_login').type(usuario);
    cy.get('#user_password').type(senha);
    cy.get('#user_remember_me').click();
    cy.contains('Sign in').click();
});
