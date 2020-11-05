describe('Formulário Deve Funcionar', function() {
    
    it('Site deve estar acessível', function() {
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
        cy.contains('Meu Formulário');
    });

    it('Deve preencher os dados corretamente', function() {
        cy.get('#nome').type('Humberto Gessinger');
        cy.get('#idade').type('53');
    });

    it('Deve submeter corretamente', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('h2').contains('Sucesso, meu patrão');
    });

});

describe('Formulário Não Deve Funcionar', function() {

    it('Site deve estar acessível', function() {
        cy.visit('https://jhemesonmotta.github.io/testaveis-curso-cypress/index-1.html');
        cy.contains('Meu Formulário');
    });

    it('Deve submeter e apresentar erro', function() {
        cy.get('button').contains('Enviar').click();
        cy.get('h2').contains('Pô, meu patrão, lembre que todos os campos são obrigatórios...');
    });
    
});