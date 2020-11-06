const App_URL = 'https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html'

describe('Formulário Deve Funcionar', function() {
    
    it('Site deve estar acessível', function() {
        cy.visit(App_URL);
        cy.contains('Meu Formulário');
    });

    it('Deve preencher os dados corretamente', function() {
        cy.get('#nome').type('Humberto Gessinger');
        cy.get('#idade').type('53');
    });

    it('Deve submeter corretamente', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('#success-message').should('be.visible');
    });

});

describe('Formulário Não Deve Funcionar', function() {

    it('Site deve estar acessível', function() {
        cy.visit(App_URL);
        cy.contains('Meu Formulário');
    });

    it('Deve submeter e apresentar erro', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('#error-message').should('be.visible');
    });
    
});